import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import axios from 'axios';

const InvestmentForm = ({ user }) => {
  const [investment, setInvestment] = useState({ amount: '', date: '', type: '' });

  const handleChange = (e) => {
    setInvestment({ ...investment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/investments', investment, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      console.log(response.data);
      alert('Investment added successfully.');
    } catch (err) {
      console.error(err);
      alert('Failed to add investment.');
    }
  };

  return (
    <Paper style={{ padding: 16 }}>
      <form onSubmit={handleSubmit}>
        <TextField name="amount" label="Amount" fullWidth required onChange={handleChange} />
        <TextField name="date" type="date" label="Date" fullWidth required InputLabelProps={{ shrink: true }} onChange={handleChange} />
        <TextField name="type" label="Type" fullWidth required onChange={handleChange} />
        <Button type="submit" color="primary" variant="contained" style={{ marginTop: 16 }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default InvestmentForm;
