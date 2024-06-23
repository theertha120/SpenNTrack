// messageController.js

const mysql = require('mysql');

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'artistically'
});

// Send a message
const sendMessage = (req, res) => {
    const { senderId, receiverId, message } = req.body;

    const insertMessageQuery = 'INSERT INTO messages (sender_id, receiver_id, message, timestamp) VALUES (?, ?, ?, NOW())';
    connection.query(insertMessageQuery, [senderId, receiverId, message], (err, results) => {
        if (err) {
            console.error('Error sending message:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(201).json({ message: 'Message sent successfully' });
    });
};

// Retrieve messages between two users
const getMessages = (req, res) => {
    const { userId, contactId } = req.params;

    const getMessagesQuery = 'SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?) ORDER BY timestamp';
    connection.query(getMessagesQuery, [userId, contactId, contactId, userId], (err, results) => {
        if (err) {
            console.error('Error fetching messages:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(200).json(results);
    });
};

module.exports = {
    sendMessage,
    getMessages
};
