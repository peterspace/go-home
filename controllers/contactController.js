const asyncHandler = require('express-async-handler');
const sendEmail = require('../utils/sendEmail');


const contactAutoReply = asyncHandler(async (req, res) => {
  const { email, name } = req.body;

  if (!email) throw new Error('Sender not found with this email');

  const subject = 'Request Receieved';

  // Delete token if it exists in DB

  // Reset Email
  const message = `
<h2>Hello ${name}</h2>
<p>Thank you for choosing Govercity</p>  
<p>Your request has been receieved and would be processed shortly.</p>

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

const orderConfirmation = asyncHandler(async (req, res) => {
  // const { email, txId } = req.body;

  const { email, txId, orderType, fromToken, toToken, fromAmount, toAmount } =
    req.body;

  if (!email) throw new Error('Sender not found with this email');
  if (!txId) throw new Error('Order number not found');

  const subject = 'Order Confirmation';
  // const telegramGroupLink = `${process.env.FRONTEND_URL}/account`;

  const telegramGroupLink = `${process.env.FRONTEND_URL}/telegram`; // create telegram chatroom with botFather and use link

  //====={Testing}===============
  // const message = `
  // <h2>Hello ${email}</h2>

  // <p>Your request has been receieved and would be processed shortly</p>
  // <p>Please find your order number: ${txId} and click on the link to continue</p>
  // <a href=${telegramGroupLink} clicktracking=off>${telegramGroupLink}</a>
  // <p>Thank you for choosing Govercity</p>

  // <p>Regards...</p>
  // <p>Govercity Team</p>
  // `;

  //====={Production}===============

    const message = `
  <h2>Hello ${email}</h2>

  <p>Your ${orderType} request to exchange ${fromAmount}${fromToken?.symbol} to ${toAmount}${toToken?.symbol} has been receieved and would be processed shortly</p>
  <p>Please find your order number: ${txId} and click on the link below to continue your transaction</p>
  <a href=${telegramGroupLink} clicktracking=off>${telegramGroupLink}</a>
  <p>Thank you for choosing Govercity</p>

  <p>Regards...</p>
  <p>Govercity Team</p>
  `;

//   const messageExample = `
// <h2>Hello User</h2>

// <p>Your Buy Crypto request to exchange 5USD  to 4.9USDT has been receieved and would be processed shortly</p>
// <p>Please find your order number: 204 and click on the link below to continue your transaction</p>
// <a href="https://www.telegram.com/goBuy" clicktracking=off>"https://www.telegram.com/goBuy"</a>
// <p>Thank you for choosing Govercity</p>  

// <p>Regards...</p>
// <p>Govercity Team</p>
// `;

  const emailTest = 'peter.space.io@gmail.com';

  // const send_to = email; // live production
  const send_to = emailTest; // testing
  const sent_from = process.env.EMAIL_USER;
  //  const sent_from = 'noreply@govercity.com',

  await sendEmail(subject, message, send_to, sent_from);
  res.status(200).json({ success: true, message: 'Email sent' });
});

const orderCompleted = asyncHandler(async (req, res) => {
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

const supportTicket = asyncHandler(async (req, res) => {
  const { email, ticketNo, managerCrmId } = req.body;

  if (!email) throw new Error('Sender not found with this email');
  if (!ticketNo) throw new Error('Ticket number not found');
  if (!managerCrmId) throw new Error('CRM number not found');

  //====================================={Example Block}=====================================================
  const subjectExample = `Your request 220608261093181 is being processed CRM:072617701034`;

  const messageExample = `Hello maxwellx@yahoo.com ,

  Thank you for contacting us. 
  
  Your complaint, with ticket number:220608261093181  is being processed.
  
   
  
  If you are not satisfied with the resolution after the time frame provided for this request, please visit our Help Centre and fill the Escalation Form: https://www.govercity.com/ >> Help Centre >> Contact us >> Online Enquiry/Complaint Form>>Complaint Handling Policy
  
  Thank you for banking with us.
  
  
  Govercity Team
  `;

  //========================================================================================================
  const subject = `Your request ${ticketNo}is being processed CRM:${managerCrmId}`;
  const message = `
  <h2>Hello ${email}</h2>

  <p>Thank you for contacting us. </p>
  
  <p>Your complaint, with ticket number:${ticketNo}  is being processed.</p>
  

  <p>If you are not satisfied with the resolution after the time frame provided for this request, please visit our Help Centre and fill the Escalation Form: https://www.govercity.com/ >> Help Centre >> Contact us >> Online Enquiry/Complaint Form>>Complaint Handling Policy</p>
  
  <p>Thank you for banking with us.</p>
  
  
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
  contactAutoReply,
  orderConfirmation,
  orderCompleted,
};
