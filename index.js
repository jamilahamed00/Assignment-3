const express = require('express');
const helloRoutes = require('./helloRoutes');
const authRoutes = require('./authRoutes');

const router = express.Router();

router.use('/hello', helloRoutes);
router.use('/auth', authRoutes);

module.exports = router;
