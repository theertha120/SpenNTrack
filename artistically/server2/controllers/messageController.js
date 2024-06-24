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

const getContactId = (req, res) => {
    const { contactEmail } = req.params;

    if (!contactEmail) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const query = 'SELECT id FROM users WHERE email = ?';
    connection.query(query, [contactEmail], (err, results) => {
        if (err) {
            console.error('Error fetching user ID:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ id: results[0].id });
    });
}


module.exports = {
    sendMessage,
    getMessages,
    getContactId
};
