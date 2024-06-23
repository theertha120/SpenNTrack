const express = require('express');
const mysql = require('mysql2');
const authRoutes = require('./routes/authroutes'); // Import authentication routes
const messageRoutes = require('./routes/messageRoutes'); // Import message routes
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001; // Set port number

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'artistically',

});

// Connect to MySQL databasẻ
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Use authentication routes
app.use('/auth', authRoutes);
// Use message routes
app.use('/messages', messageRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
