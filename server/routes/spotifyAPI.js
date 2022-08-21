const express = require('express');

const router = express.Router();

const { fetchData } = require('../controllers/libraryController');

router.get('/library', fetchData);

module.exports = router