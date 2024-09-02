const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'artistically'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

const getExpenditures = (req, res) => {
  connection.query('SELECT * FROM expenditures', (err, results) => {
    if (err) {
      console.error('Error fetching expenditures:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
};

const addExpenditure = (req, res) => {
  const { category, name, cost } = req.body;
  connection.query(
    'INSERT INTO expenditures (category, name, cost) VALUES (?, ?, ?)', 
    [category, name, cost], 
    (err) => {
      if (err) {
        console.error('Error adding expenditure:', err);
        res.status(500).send('Server error');
        return;
      }
      res.status(201).send('Expenditure added');
    }
  );
};

module.exports = { getExpenditures, addExpenditure };
