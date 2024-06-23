import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Messages.css'; // Import CSS file for styling

const Messages = ({ userId, contactId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/messages/${userId}/${contactId}`);
                console.log('Fetch messages response:', response.data); // Log the response data
                console.log(userId)
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
                // Handle error (e.g., show error message to user)
            }
        };
        fetchMessages();
    }, [userId, contactId]);

    const sendMessage = async () => {
        try {
            // Send message to backend
            await axios.post('http://localhost:3001/messages/send', {
                senderId: userId,
                receiverId: contactId,
                message: newMessage
            });
            console.log('Message sent successfully:', newMessage); // Log the successfully sent message
            // Update messages state with new message
            const newMessageObj = {
                id: Date.now(), // Generate a unique temporary ID (replace with actual ID from server)
                senderId: userId,
                receiverId: contactId,
                message: newMessage
            };

            setMessages([...messages, newMessageObj]); // Add new message to existing messages array
            setNewMessage(''); // Clear input field after sending
        } catch (error) {
            console.error('Error sending message:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <div className="messages-container">
            <div className="messages-list">
                {messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.senderId === userId ? 'sent' : 'received'}`}>
                        <strong>{msg.senderId === userId ? 'You' : 'Contact'}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messages;
