const express = require('express');
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getallEnquiry,
  supportTicket,
  contactAutoReply,
  orderConfirmation,
  orderCompleted,
} = require('../controllers/enquiryController');
const router = express.Router();
router.post('/autoreply', contactAutoReply);
router.post('/orderConfirmation', orderConfirmation);
router.post('/orderCompleted', orderCompleted);

router.post('/', createEnquiry);

module.exports = router;
