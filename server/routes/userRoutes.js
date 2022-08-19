const express = require('express');
const router = express.Router();
const {registerUser, loginUser, userAccount} = require('../controllers/userController');

const {protectedRoute} = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser)
router.get('/user/account', protectedRoute, userAccount)

module.exports = router