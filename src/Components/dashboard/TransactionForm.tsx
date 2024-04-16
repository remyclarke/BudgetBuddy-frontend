import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import axios from 'axios';

const TransactionForm = ({ user }) => {
  const [transaction, setTransaction] = useState({
    amount: '',
    description: '',
    type: '',
    category_id: ''
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user.token) {
      alert("No user logged in");
      return;
    }
    try {
      const response = await axios.post('/api/transactions', transaction, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      console.log(response.data);
      alert('Transaction added successfully.');
    } catch (err) {
      console.error(err);
      alert('Failed to add transaction.');
    }
  };

  return (
    <Paper style={{ padding: 16 }}>
      <form onSubmit={handleSubmit}>
        <TextField name="amount" label="Amount" fullWidth required onChange={handleChange} />
        <TextField name="description" label="Description" fullWidth required onChange={handleChange} />
        <TextField name="type" label="Type" fullWidth required onChange={handleChange} />
        <TextField name="category_id" label="Category ID" fullWidth required onChange={handleChange} />
        <Button type="submit" color="primary" variant="contained" style={{ marginTop: 16 }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default TransactionForm;
