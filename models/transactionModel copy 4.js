const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    //====={user}==================
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    country: String,
    state: String,
    city: String,
    walletAddress: String,
    txId: Number,
    orderNo: Number,
    //========={Transaction}==================
    chainId: {
      type: String,
    },
    fromAddress: {
      type: String,
    },
    fromAddress: {
      type: String,
    },
    toAddress: {
      type: String,
    },
    fromSymbol: {
      type: String,
    },

    toSymbol: {
      type: String,
    },
    fromDecimals: {
      type: String,
    },
    toDecimals: {
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
      // required: true,
    },
    //======================={live chat}==================
    message: { type: mongoose.Schema.Types.ObjectId, ref: 'Messages' }, // chat history
    //======================={Admin}==================
    // managerId:String,
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // responsible admin
    managerWalletAddress: String,
    managerPrevious: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // responsible admin
    managerChanged: {
      type: Boolean,
      default: false,
    },
    managersInfo: Number, // if manager was changed on a trasaction, we should know the number of managers
    status: { type: String, default: 'Pending' }, // pending, paid, completed, cancel, active, inActive
    //============{Both Transactions}========================
    completed: {
      type: Boolean,
      default: false,
    },
    //============{getCrypto pay Cash Transactions}========================
    clientPaidCash: {
      type: Boolean,
      default: false,
    },
    bankReceivedCash: {
      type: Boolean,
      default: false,
    },
    bankPaidCrypto: {
      type: Boolean,
      default: false,
    },
    clientReceivedCrypto: {
      type: Boolean,
      default: false,
    },
    //============{getCash pay Crypto Transactions}========================
    clientPaidCrypto: {
      type: Boolean,
      default: false,
    },
    bankPaidCash: {
      type: Boolean,
      default: false,
    },
    clientReceivedCash: {
      type: Boolean,
      default: false,
    },
    bankReceivedCrypto: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
