const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    //====={user}==================
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    country: String,
    city: String,
    // email: { type: String },
    walletAddress: String,
    txId: Number,
    //========={Transaction}==================
    chainId: {
      type: String,
    },
    fromSymbol: {
      type: String,
    },
    toSymbol: {
      type: String,
    },
    fromValue: {
      type: String,
    },
    toValue: {
      type: String,
    },
    service: {
      type: String, // BUYCRYPTO, SELLCRYPTO,
    },
    tXHashId: String,
    age: {
      type: Date,
      required: true,
    },
    //======================={live chat}==================
    message: { type: mongoose.Schema.Types.ObjectId, ref: 'Messages' }, // chat history
    //======================={Admin}==================
    // managerId:String,
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager' }, // responsible admin
    managerPrevious: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager' }, // responsible admin
    managerChanged: {
      type: Boolean,
      default: false,
    },
    managersInfo: Number, // if manager was changed on a trasaction, we should know the number of managers
    status: { type: String, default: 'Pending' }, // pending, paid, completed, cancel, active, inActive
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
