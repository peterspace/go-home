const express = require('express');
const {
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
  updateTransactionById,
  getUserTransactionById,
  getUserInactiveTransactions,
  getUserActiveTransactions,
  getManagerActiveTransactions,
} = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// router.route('/createTransaction').post(protect, createTransaction);
router.route('/createTransaction').post(createTransaction);
router.route('/getUserTransactions').get(protect, getUserTransactions);
router.route('/getOneUserTransaction').get(protect, getOneUserTransaction);
router
  .route('/getAllTransactionsByUser')
  .get(protect, getAllTransactionsByUser);
router.route('/updateUserTransaction').patch(protect, updateUserTransaction);
router
  .route('/updateTransactionsAutomatically')
  .patch(updateTransactionsAutomatically);

router
  .route('/getMyUserTransactionById/:userId')
  .get(protect, getMyUserTransactionById);
router.route('/getMyTransactions').get(protect, getMyTransactions);
// router.route('/getMyTransactions/:id').get(getMyTransactions);
router
  .route('/getMyUserTransactionById/:managerId')
  .get(protect, getMyManagersTransactionById);
router
  .route('/getOneManagersTransactionByAdmin/:id/:managerId')
  .get(protect, getOneManagersTransactionByAdmin);
router
  .route('/getAllManagersTransactionByAdmin/:managerId')
  .get(protect, getAllManagersTransactionByAdmin);
router.route('/getAllTransactions').get(protect, getAllTransactions);
router.route('/registrationConfirmation').post(registrationConfirmation);
router.route('/transactionConfirmation').post(transactionConfirmation);
router.route('/transactionCompleted').post(transactionCompleted);
router.route('/getTransactionByTxId/:txId').get(getTransactionByTxId);
router.route('/updateTransactionById').patch(updateTransactionById);
router.route('/getUserTransactionById/:id').get(getUserTransactionById);
router
  .route('/getUserInactiveTransactions')
  .get(protect, getUserInactiveTransactions);

router
  .route('/getUserActiveTransactions')
  .get(protect, getUserActiveTransactions);

router
  .route('/getManagerActiveTransactions')
  .get(protect, getManagerActiveTransactions);

module.exports = router;
