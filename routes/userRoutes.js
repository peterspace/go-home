const express = require('express');
const {
  registerUser,
  registerAdmin,
  login,
  allUsers,
  usersAdmin,
  getUser,
  updateUser,
  getUserById,
} = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, allUsers);
router.route('/register').post(registerUser);
router.route('/registerAdmin').post(registerAdmin);
router.route('/login').post(login); // New
router.route('/adminUsers').get(usersAdmin);
router.route('/getUser').get(protect, getUser);
router.route('/updateUser').patch(protect, updateUser);
router.route('/getUserById/:userId').get(getUserById);
//

module.exports = router;
