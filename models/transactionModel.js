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
    orderNo: Number,
    //========={Transaction}==================
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
    age: {
      type: Date,
    },
    //======================={live chat}==================
    message: { type: mongoose.Schema.Types.ObjectId, ref: 'Messages' }, // chat history
    //======================={Admin}==================
    // managerId:String,
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // responsible admin
    managerPrevious: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // responsible admin
    managerChanged: {
      type: Boolean,
      default: false,
    },
    managersInfo: Number, // if manager was changed on a trasaction, we should know the number of managers
    status: { type: String, default: 'Pending' }, // Pending, Paid, Completed, Cancel, Active, inActive
    //============{Both Transactions}========================
    //============{delivery location}========================
    telegram: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
