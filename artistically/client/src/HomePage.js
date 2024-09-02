import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const HomePage = () => {
  const [expenditures, setExpenditures] = useState([]);
  const [categories, setCategories] = useState([
    'Food', 'Entertainment', 'Utilities', 'Transportation', 'Other'
  ]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    const fetchExpenditures = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expenditures');
        setExpenditures(response.data);
      } catch (error) {
        console.error('Error fetching expenditures:', error);
      }
    };

    fetchExpenditures();
  }, []);

  const addExpenditure = async () => {
    try {
      if (!category || !name || !cost) {
        alert('Please fill all fields');
        return;
      }

      await axios.post('http://localhost:5000/api/expenditures', {
        category,
        name,
        cost
      });

      setCategory('');
      setName('');
      setCost('');

      // Fetch updated expenditures
      const updatedExpenditures = await axios.get('http://localhost:5000/api/expenditures');
      setExpenditures(updatedExpenditures.data);
    } catch (error) {
      console.error('Error adding expenditure:', error);
    }
  };

  const deleteExpenditure = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenditures/${id}`);
      
      // Fetch updated expenditures
      const updatedExpenditures = await axios.get('http://localhost:5000/api/expenditures');
      setExpenditures(updatedExpenditures.data);
    } catch (error) {
      console.error('Error deleting expenditure:', error);
    }
  };

  const getPieData = () => {
    const data = {
      labels: categories,
      datasets: [{
        data: categories.map(cat => 
          expenditures
            .filter(exp => exp.category === cat)
            .reduce((sum, exp) => sum + parseFloat(exp.cost), 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }]
    };
    return data;
  };

  const groupByCategory = () => {
    return expenditures.reduce((acc, expenditure) => {
      if (!acc[expenditure.category]) {
        acc[expenditure.category] = [];
      }
      acc[expenditure.category].push(expenditure);
      return acc;
    }, {});
  };

  return (
    <div>
      <h1>SpendNTrack!</h1>
      
      <input
        type="text"
        placeholder="Expenditure Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <button onClick={addExpenditure}>Add Expenditure</button>
      
      
      <Pie data={getPieData()} />
      
      <br></br>
      <h2>Expenditure Table</h2>
      {Object.entries(groupByCategory()).map(([cat, items]) => (
        <div key={cat}>
          <h3>{cat} - Total: ${items.reduce((sum, item) => sum + parseFloat(item.cost), 0).toFixed(2)}</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.cost}</td>
                  <td>
                    <button onClick={() => deleteExpenditure(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
