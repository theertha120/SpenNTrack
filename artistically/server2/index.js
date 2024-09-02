const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expenditureRoutes = require('./routes/expenditures'); // Ensure this path is correct

const app = express();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route handler for expenditures (GET, POST, DELETE)
app.use('/api/expenditures', expenditureRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
