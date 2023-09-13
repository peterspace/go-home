const express = require('express');
const {
  contactAutoReply,
  orderConfirmation,
  orderCompleted,
} = require('../controllers/contactController');
const router = express.Router();
router.post('/autoreply', contactAutoReply);
router.post('/orderConfirmation', orderConfirmation);
router.post('/orderCompleted', orderCompleted);

module.exports = router;
