const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expenditureRoutes = require('./routes/expenditures'); // Ensure this path is correct

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/expenditures', expenditureRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
