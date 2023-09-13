const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: 'i' } },
          { email: { $regex: req.query.search, $options: 'i' } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please Enter all the Feilds');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

//===={To Login user}===============================================

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  let user;

  //======={Wallet Verification} ==================
  if (req.body.walletAddress && !req.body.passwword && !req.body.email) {
    user = await User.findOne({ walletAddress: req.body.walletAddress });
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pics: user.pics,
        walletAddress: user.walletAddress,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid walletAddress');
    }
  } else {
    //======={Email Verification} ==================
    user = await User.findOne({ email: req.body.email });
    if (user && (await user.matchPassword(req.body.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pics: user.pics,
        walletAddress: user.walletAddress,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid Email or Password');
    }
  }
});

// ====================={Login User}===========================
const adminLogin = asyncHandler(async (req, res) => {
  //====={email and password || walletAddress}===============
  let user;
  let verified = false;
  //======={Wallet Verification} ==================
  if (req.body.walletAddress && !req.body.passwword && !req.body.email) {
    user = await User.findOne({ walletAddress: req.body.walletAddress });
    if (user) {
      verified = true;
    }
    //   Generate Token
    const token = generateToken(user._id);

    if (verified) {
      const { _id, walletAddress, email, pics, role } = user;
      let response = {
        userId: _id,
        walletAddress,
        email,
        pics,
        role,
        token,
      };
      res.status(200).json(response);
    } else {
      user = await User.findOne({ email: req.body.email });
      if (user) {
        verified = true;
      }

      if (verified) {
        const { _id, walletAddress, email, pics, role } = user;
        let response = {
          userId: _id,
          walletAddress,
          email,
          pics,
          role,
          token,
        };
        res.status(200).json(response);
      } else {
        res.status(400);
        throw new Error('Invalid email or password');
      }
    }
    if (!user) {
      res.status(400);
      throw new Error('User not found, please signup');
    }
  }
});

const usersAdmin = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.send(users);
});

//Get User Data
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, walletAddress, email, pics, role } = user;
    res.status(200).json({
      _id,
      walletAddress,
      email,
      pics,
      role,
    });
  } else {
    res.status(400);
    throw new Error('User Not Found');
  }
});

// Get Login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  // Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

// Update User
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { walletAddress, email, pics, phone, role } = user;
    user.email = email;
    user.walletAddress = req.body.walletAddress || walletAddress;
    user.phone = req.body.phone || phone;
    user.role = req.body.role || role;
    user.pics = req.body.pics || pics;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      walletAddress: updatedUser.walletAddress,
      email: updatedUser.email,
      pics: updatedUser.pics,
      phone: updatedUser.phone,
      role: updatedUser.role,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// Get All Users Data
const getAllUsers = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user.role === 'Admin') {
    res.json(await User.find({ role: 'User' }));
  }
});

//====={Consider keeping}=========
const getTransactions = asyncHandler(async (req, res) => {
  const { _id } = req.user; // sending user as an object
  validateMongoDbId(_id);
  try {
    const userTransactions = await Transaction.findOne({ Transactionby: _id })
      .populate('user')
      .populate('manager')
      .populate('messages')
      .exec();
    res.json(userTransactions);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllTransactions = asyncHandler(async (req, res) => {
  try {
    const alluserTransactions = await Transaction.find()
      .populate('user')
      .populate('manager')
      .populate('messages')
      .exec();
    res.json(alluserTransactions);
  } catch (error) {
    throw new Error(error);
  }
});
const getTransactionByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const userTransactions = await Transaction.findOne({ Transactionby: id })
      .populate('user')
      .populate('manager')
      .populate('messages')
      .exec();
    res.json(userTransactions);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  allUsers,
  registerUser,
  authUser,
  usersAdmin,
  adminLogin,
  getUser,
  loginStatus,
  updateUser,
  getAllUsers,
  getTransactions,
  getTransactionByUserId,
};
