const express = require('express');
const router = express.Router();
const {getUsers , setUser, updateUser, deleteUser} = require('../controllers/userController');

router.route('/').get(geetUsers).post(setUser);
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router