// messageRoutes.js

const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, getContactId } = require('../controllers/messageController');

// Route to send a message
router.post('/send', sendMessage);

// Route to get messages between two users
router.get('/:userId/:contactId', getMessages);

router.get('/:contactEmail', getContactId)

module.exports = router;
