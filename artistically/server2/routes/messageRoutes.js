// messageRoutes.js

const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');

// Route to send a message
router.post('/send', sendMessage);

// Route to get messages between two users
router.get('/:userId/:contactId', getMessages);

module.exports = router;
