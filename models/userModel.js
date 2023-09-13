const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: { type: 'String' },
    businessName: { type: 'String' }, // new
    email: { type: 'String', unique: true },
    password: { type: 'String' },
    pic: {
      type: 'String',
      // required: true,
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
    isAdmin: {
      type: Boolean,
      // required: true,
      default: false,
    },
    level: {
      type: Number,
      default: 0, //0 meanse user, admin begins from 1-5
    },
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // default:
    },
    role: {
      type: String,
      default: 'User', // "User" and "Admin"
      // default:
    },
    walletAddress: {
      type: String,
      default: 'Ox0',
    },
    country: String,
    state: String,
    city: String,
    tokens: [String], // token symbol: "USDT", "USDC", "DAI", "TUSD",
    fiat: [String], // fiat: "USD", "RUB", "GBP",
    // name: {
    //   type: String,
    //   required: true,
    // }
  },
  { timestaps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
