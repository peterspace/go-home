const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv').config();

const User = require('../models/userModel');
// const Manager = require('../models/ManagerModel');

const Transaction = require('../models/transactionModel');
const sendEmail = require('../utils/sendEmail');

//============={HTML MESSAGE TEMPLATES}====================================================
// const confirmationMesssage = require('.htmlEmails/confirmationMesssage.html');
// const completionMesssage = require('.htmlEmails/completionMesssage.html');

/**************************************************************************************************************
 **************************************************************************************************************

                                          User Block
                      
 **************************************************************************************************************
 **************************************************************************************************************
 */

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

//====={Create new user if walletAddress does not exist}===================

const createTransaction = asyncHandler(async (req, res) => {
  const {
    txId,
    userId,
    managerId,
    country,
    city,
    walletAddress,
    chainId,
    fromSymbol,
    toSymbol,
    fromValue,
    toValue,
    service,
  } = req.body;

  let userData = {
    txId,
    userId,
    managerId,
    country,
    city,
    walletAddress,
    chainId,
    fromSymbol,
    toSymbol,
    fromValue,
    toValue,
    service,
  };
  console.log({ userData: userData });

  //===={Check if the transaction had already been created to avoid duplicates}====================
  let txExists = await Transaction.findOne({ txId: txId });
  console.log({ txExists: txExists });
  if (txExists) {
    return;
  }

  // const userExists = await User.findById({ _id: userId }); // verify user account
  const userExists = await User.findById(userId); // verify user account
  console.log({ userExists: userExists });
  let newTransaction;
  if (userExists) {
    newTransaction = new Transaction({
      txId,
      country,
      city,
      walletAddress,
      chainId,
      fromSymbol,
      toSymbol,
      fromValue,
      toValue,
      service,
      // user: req.user,
      user: userId,
      manager: managerId,
    });

    const savedTransaction = await newTransaction.save();
    console.log({ savedTransaction: savedTransaction });

    if (savedTransaction) {
      // console.log({ savedTransaction: savedTransaction });
      let response = {
        user: userExists,
        transaction: savedTransaction,
      };
      // res.json(response);
      res.status(200).json(response);
    }
    console.log('Transaction:', savedTransaction);
  }
});

// const createTransaction = asyncHandler(async (req, res) => {
//   const {
//     txId,
//     country,
//     city,
//     walletAddress,
//     chainId,
//     fromSymbol,
//     toSymbol,
//     fromValue,
//     toValue,
//     service,
//   } = req.body;

//   //===={Check if the transaction had already been created to avoid duplicates}====================
//   let txExists = await Transaction.findOne({ txId: txId });
//   if (txExists) {
//     return;
//   }

//   const userExists = await User.findById(req.user._id); // verify user account
//   let newTransaction;
//   if (userExists) {
//     newTransaction = new Transaction({
//       txId,
//       country,
//       city,
//       walletAddress,
//       chainId,
//       fromSymbol,
//       toSymbol,
//       fromValue,
//       toValue,
//       service,
//       // user: req.user,
//       user: req.user._id,
//     });

//     const savedTransaction = await newTransaction.save();

//     if (savedTransaction) {
//       let response = {
//         user: userExists,
//         transaction: savedTransaction,
//       };
//       res.json(response);
//     }
//     console.log('Transaction:', savedTransaction);
//   }
// });

// const createTransaction = asyncHandler(async (req, res) => {
//   const {
//     txId,
//     country,
//     city,
//     walletAddress,
//     chainId,
//     fromSymbol,
//     toSymbol,
//     fromValue,
//     toValue,
//     service,
//   } = req.body;

//   //===={Check if the transaction had already been created to avoid duplicates}====================
//   let txExists = await Transaction.findOne({ txId: txId });
//   if (txExists) {
//     return;
//   }

//   const userExists = await User.findById(req.user._id); // verify user account
//   let newTransaction;
//   if (userExists) {
//     newTransaction = new Transaction({
//       txId,
//       country,
//       city,
//       walletAddress,
//       chainId,
//       fromSymbol,
//       toSymbol,
//       fromValue,
//       toValue,
//       service,
//       user: req.user,
//     });

//     const savedTransaction = await newTransaction.save();

//     if (!savedTransaction) {
//       res.status(400).json({ message: 'Transaction unsucessful' });
//     }
//     console.log('Transaction:', savedTransaction);

//     let response = {
//       user: userExists,
//       transaction: savedTransaction,
//     };
//     res.json(response);
//   } else {
//     //====={Create new user since walletAddress does not exist}===================
//     const newUserExists = await User.create({
//       walletAddress,
//       email,
//     });

//     if (newUserExists) {
//       const { _id } = newUserExists;
//       //   Generate Token
//       const token = generateToken(_id);
//       if (token) {
//         newTransaction = new Transaction({
//           userId: newUserExists?._id,
//           country,
//           city,
//           email,
//           walletAddress,
//           chainId,
//           fromSymbol,
//           toSymbol,
//           fromValue,
//           toValue,
//           service,
//           user: newUserExists._id,
//         });

//         // Send HTTP-only cookie
//         res.cookie('token', token, {
//           path: '/',
//           httpOnly: true,
//           expires: new Date(Date.now() + 1000 * 86400), // 1 day
//           sameSite: 'none',
//           secure: true,
//         });

//         let userInfo = {
//           _id,
//           walletAddress,
//           email,
//           phone,
//           photo,
//           role,
//           token,
//         };

//         const savedTransaction = await newTransaction.save();

//         if (!savedTransaction) {
//           res.status(400).json({ message: 'Transaction unsucessful' });
//         }
//         console.log('Transaction:', savedTransaction);

//         let response = {
//           user: userInfo,
//           transaction: savedTransaction,
//         };
//         res.json(response);
//       }
//     }
//   }
// });

// Get all UserTransactions
const getUserTransactions = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  // res.json(await Transaction.find({ user: user._id }).populate('room'));
  res.json(await Transaction.find({ user: user._id }).populate('message'));
});

// Get all UserTransactions
const getOneUserTransaction = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); //user info
  const { id } = req.params; // transaction id

  res.json(
    await Transaction.findOne({ user: user._id, _id: id }).populate('message')
  );
});

// Get all UserTransactions
const getTransactionByTxId = asyncHandler(async (req, res) => {
  const { txId } = req.params; // transaction id

  console.log({ txId: txId });

  res.json(
    await Transaction.findOne({ txId: Number(txId) }).populate('message')
  );
});

// const getTransactionByTxId = asyncHandler(async (req, res) => {
//   const { txId } = req.params; // transaction id

//   console.log({ txId: txId });

//   const transaction = await Transaction.findOne({
//     txId: Number(txId),
//   }).populate('message');
//   if (transaction) {
//     const {
//       _id,
//       country,
//       city,
//       walletAddress,
//       chainId,
//       fromSymbol,
//       toSymbol,
//       fromValue,
//       toValue,
//       service,
//       user,
//       manager,
//     } = transaction;
//     res.status(200).json({
//       _id,
//       txId,
//       country,
//       city,
//       walletAddress,
//       chainId,
//       fromSymbol,
//       toSymbol,
//       fromValue,
//       toValue,
//       service,
//       user,
//       manager,
//     });
//   }
// });

// const { _id, walletAddress, email, pic, role } = user;
//     res.status(200).json({
//       _id,
//       walletAddress,
//       email,
//       pic,
//       role,
//     });

const getAllTransactionsByUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); // get managers userId from "protect middleware"
  const { userId } = req.params;
  if (user.role === 'User') {
    res.json(await Transaction.find({ userId: userId }).populate('user'));
  }
});

/**************************************************************************************************************
 **************************************************************************************************************

                                         Admin Block
                      
 **************************************************************************************************************
 **************************************************************************************************************
 */

/**========================Transaction Status============================
 * pending
 * active
 * completed
 *
 * paid
 * cancel
 */

// update Transactions status

//======={Level: 1 ======> Manager}================================
const updateUserTransaction = asyncHandler(async (req, res) => {
  const manager = await User.findById(req.user._id); // get managers userId from "protect middleware"
  const currentManagerId = manager._id;
  const { id, status } = req.body;

  const transactionDoc = await User.findById(id);

  let updatedTransaction;
  if (
    transactionDoc &&
    manager.role === 'Admin' &&
    // currentManagerId === transactionDoc?.manager.toString()){
    currentManagerId === transactionDoc?.manager
  ) {
    transactionDoc.status = status || transactionDoc.status;
    updatedTransaction = await transactionDoc.save();
  } else {
    //===={number of managers that have treated the transaction}=========
    const numberOfManagers = transactionDoc.managersInfo.length;
    //===={next manager count}=========
    let numberOfManager = numberOfManagers + 1;

    transactionDoc.status = status || transactionDoc.status;
    transactionDoc.manager = currentManagerId;
    transactionDoc.managerPrevious = transactionDoc.manager; // previos manager
    transactionDoc.managerChanged = true; // previos manager
    transactionDoc.managersInfo = {
      numberOfManager,
      managerId: currentManagerId,
    };
    updatedTransaction = await transactionDoc.save();
  }

  res.status(200).json({
    _id: updatedTransaction._id,
    user: updatedTransaction?.user,
    country: updatedTransaction?.country,
    city: updatedTransaction?.city,
    email: updatedTransaction?.email,
    walletAddress: updatedTransaction?.walletAddress,
    txId: updatedTransaction?.txId,
    chainId: updatedTransaction?.chainId,
    fromSymbol: updatedTransaction?.fromSymbol,
    toSymbol: updatedTransaction?.toSymbol,
    fromValue: updatedTransaction?.fromValue,
    toValue: updatedTransaction?.toValue,
    service: updatedTransaction?.service,
    tXHashId: updatedTransaction?.tXHashId,
    age: updatedTransaction?.age,
    message: updatedTransaction?.message,
    manager: updatedTransaction?.manager,
    managerPrevious: updatedTransaction?.managerPrevious,
    managerChanged: updatedTransaction?.managerChanged,
    managersInfo: updatedTransaction?.managersInfo,
    status: updatedTransaction?.status,
  });
});

const updateTransactionsAutomatically = asyncHandler(async (req, res) => {
  const {
    id, // new transaction mongodb id ==> transaction?._id
    country,
    city,
    email,
    walletAddress,
    chainId,
    fromSymbol,
    toSymbol,
    fromValue,
    toValue,
    service,
    status, // new status ==> // pending, paid, completed, cancel, active, inActive
  } = req.body;

  const transactionDoc = await Transaction.findById(id);

  transactionDoc.set({
    id, // new transaction mongodb id ==> transaction?._id
    country,
    city,
    email,
    walletAddress,
    chainId,
    fromSymbol,
    toSymbol,
    fromValue,
    toValue,
    service,
    status, // new status ==> // pending, paid, completed, cancel, active, inActive
  });
  await transactionDoc.save();
  res.json('ok');
});

// Get all UserTransactions
const getMyUserTransactionById = asyncHandler(async (req, res) => {
  const manager = await User.findById(req.user._id); // get managers userId from "protect middleware"
  const managerId = manager?._id; // manager's id
  const { id, userId } = req.params;
  if (manager.role === 'Admin') {
    res.json(
      await Transaction.find({ manager: managerId, user: userId })
        .populate('user')
        .populate('manager')
        .populate('messages')
        .exec()
    );
  }
});

/**
 * populate : to have access to the related schema and
 * explore the details because both "user and manger
 * are schemas with an array of data that can be expanded"
 *
 */

// Get all transaction by logged in manager
const getMyTransactions = asyncHandler(async (req, res) => {
  const manager = await User.findById(req.user._id); // get managers userId from "protect middleware"
  const managerId = manager?._id; // manager's id
  if (manager.role === 'Admin') {
    res.json(
      await Transaction.find({ manager: managerId })
        .populate('user')
        .populate('manager')
        .populate('messages')
        .exec()
    );
  }
});

/**************************************************************************************************************
 **************************************************************************************************************

                                         Supervisor Block
                      
 **************************************************************************************************************
 **************************************************************************************************************
 */

// Get all transaction between your manager and a single user
const getMyManagersTransactionById = asyncHandler(async (req, res) => {
  // const user = await Manager.findById(req.user._id); // protected route
  const supervisor = await User.findById(req.user._id); // get managers userId from "protect middleware"
  const { managerId } = req.params; // user's Id
  if (supervisor.role === 'Admin' && supervisor.level > 2) {
    // super admin also has this previledge
    //
    res.json(
      await Transaction.find({ manager: managerId })
        .populate('user')
        .populate('manager')
        .populate('messages')
        .exec()
    );
  }
});

/**************************************************************************************************************
 **************************************************************************************************************

                                          Super Admin Block
                      
 **************************************************************************************************************
 **************************************************************************************************************
 */

// Get all UserTransactions
const getOneManagersTransactionByAdmin = asyncHandler(async (req, res) => {
  // const user = await Manager.findById(req.user._id); // protected route
  const admin = await User.findById(req.user._id); // get managers userId from "protect middleware"
  const { id, managerId } = req.params;
  if (admin.role === 'Admin' && admin.level > 2) {
    // supervisors below do not have this previledge
    res.json(
      await Transaction.findOne({ manager: managerId, _id: id })
        .populate('user')
        .populate('manager')
        .populate('messages')
        .exec()
    );
  }
});

const getAllManagersTransactionByAdmin = asyncHandler(async (req, res) => {
  // const user = await Manager.findById(req.user._id); // protected route
  const admin = await User.findById(req.user._id); // get managers userId from "protect middleware"
  const { managerId } = req.params;
  if (admin.role === 'Admin' && admin.level > 2) {
    res.json(
      await Transaction.findOne({ manager: managerId })
        .populate('user')
        .populate('manager')
        .populate('messages')
        .exec()
    );
  }
});

// Get all Transactions general users
const getAllTransactions = asyncHandler(async (req, res) => {
  const admin = await User.findById(req.user._id); // get managers userId from "protect middleware"

  if (admin.role === 'Admin' && admin.level > 2) {
    res.json(
      await Transaction.find()
        .populate('user')
        .populate('manager')
        .populate('messages')
        .exec()
    );
  }
});

/**************************************************************************************************************
 **************************************************************************************************************

                                          Email System
                      
 **************************************************************************************************************
 **************************************************************************************************************
 */
//==========================={Registration Notifications}=========================
//======{Sent after registration is completed if first time walletAddress in the system}===========================
const registrationConfirmation = asyncHandler(async (req, res) => {
  const { email, walletAddress } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User does not exist');
  }

  // Delete token if it exists in DB

  const userLogin = `${process.env.FRONTEND_URL}/login`;

  // Reset Email
  const message = `
      <h2>Hello ${email}</h2>
      <p>Thank you for choosing Crib.com</p>  
      <p>Your registration was successful.</p>
      <p>Please login to your account by clicking on the link below</p>

      <a href=${userLogin} clicktracking=off>${userLogin}</a>

      <p>Regards...</p>
      <p>Crib Team</p>
    `;
  const subject = 'Registration Sucessful';

  const emailTest = 'peter.space.io@gmail.com';
  // const send_to = email;
  const send_to = emailTest;
  const sent_from = process.env.EMAIL_USER;

  console.log({ email: email, walletAddress: walletAddress });

  await sendEmail(subject, message, send_to, sent_from);
  res
    .status(200)
    .json({ success: true, message: 'your registration was sucessful' });
});

//==========================={Transaction Notifications}=========================

//=============================={Order started notification email on Transaction page}============================================================
const transactionConfirmation = asyncHandler(async (req, res) => {
  const { email, txId } = req.body;

  // const { email, txId, orderType, fromToken, toToken, fromAmount, toAmount } =
  //   req.body;

  if (!email) throw new Error('Sender not found with this email');
  if (!txId) throw new Error('Order number not found');

  const subject = 'Order Confirmation';
  // const telegramGroupLink = `${process.env.FRONTEND_URL}/account`;

  const telegramGroupLink = `${process.env.FRONTEND_URL}/telegram`; // create telegram chatroom with botFather and use link

  //====={Testing}===============
  const message = `
  <h2>Hello ${email}</h2>

  <p>Your request has been receieved and would be processed shortly</p>
  <p>Please find your order number: ${txId} and click on the link to continue</p>
  <a href=${telegramGroupLink} clicktracking=off>${telegramGroupLink}</a>
  <p>Thank you for choosing Govercity</p>

  <p>Regards...</p>
  <p>Govercity Team</p>
  `;

  //====={Production}===============

  //   const message = `
  // <h2>Hello ${email}</h2>

  // <p>Your ${orderType} request to exchange ${fromAmount}${fromToken?.symbol} to ${toAmount}${toToken?.symbol} has been receieved and would be processed shortly</p>
  // <p>Please find your order number: ${txId} and click on the link below to continue your transaction</p>
  // <a href=${telegramGroupLink} clicktracking=off>${telegramGroupLink}</a>
  // <p>Thank you for choosing Govercity</p>

  // <p>Regards...</p>
  // <p>Govercity Team</p>
  // `;

  const messageExample = `
<h2>Hello User</h2>

<p>Your Buy Crypto request to exchange 5USD  to 4.9USDT has been receieved and would be processed shortly</p>
<p>Please find your order number: 204 and click on the link below to continue your transaction</p>
<a href="https://www.telegram.com/goBuy" clicktracking=off>"https://www.telegram.com/goBuy"</a>
<p>Thank you for choosing Govercity</p>  

<p>Regards...</p>
<p>Govercity Team</p>
`;

  const emailTest = 'peter.space.io@gmail.com';

  // const send_to = email; // live production
  const send_to = emailTest; // testing
  const sent_from = process.env.EMAIL_USER;
  //  const sent_from = 'noreply@govercity.com',

  await sendEmail(subject, message, send_to, sent_from);
  res.status(200).json({ success: true, message: 'Email sent' });
});

//=============================={Order Completed notification email on Transaction page}============================================================
const transactionCompleted = asyncHandler(async (req, res) => {
  const { email, txId, orderType, fromSymbol, toSymbol, fromValue, toValue } =
    req.body;

  if (!email) throw new Error('Sender not found with this email');
  if (!txId) throw new Error('Order number not found');

  const subject = 'Order Completed';

  //====================================={Example Block}=====================================================

  const messageExample = `
   <h2>Hello User</h2>
 
   <p>Your Buy Crypto request to exchange 5USD  to 4.9USDT has been receieved  with order number: 204 has been completed sucessfully</p>
   <p>Thank you for choosing Govercity</p>
 
   <p>Regards...</p>
   <p>Govercity Team</p>
   `;

  //========================================================================================================

  //====={Production}===============
  const message = `
  <h2>Hello ${email}</h2>

  <p>Your ${orderType} request to exchange ${fromValue}${fromSymbol} to ${toValue}${toSymbol} with order number: ${txId} has been completed sucessfully</p>
  <p>Thank you for choosing Govercity</p>

  <p>Regards...</p>
  <p>Govercity Team</p>
  `;

  const emailTest = 'peter.space.io@gmail.com';

  // const send_to = email; // live production
  const send_to = emailTest; // testing
  const sent_from = process.env.EMAIL_USER;
  //  const sent_from = 'noreply@govercity.com',

  await sendEmail(subject, message, send_to, sent_from);
  res.status(200).json({ success: true, message: 'Email sent' });
});

module.exports = {
  createTransaction,
  getUserTransactions,
  getOneUserTransaction,
  updateUserTransaction,
  updateTransactionsAutomatically,
  getMyManagersTransactionById,
  getMyUserTransactionById,
  getMyTransactions,
  getAllTransactionsByUser,
  getOneManagersTransactionByAdmin,
  getAllManagersTransactionByAdmin,
  getAllTransactions,
  registrationConfirmation,
  transactionConfirmation,
  transactionCompleted,
  getTransactionByTxId,

  //=============================
};
