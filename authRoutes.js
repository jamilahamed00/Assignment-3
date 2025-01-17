const express = require('express');
const { generateToken, postResponse } = require('../controllers/authController');

const router = express.Router();

router.get('/token', generateToken);
router.post('/post-body', postResponse);

module.exports = router;
