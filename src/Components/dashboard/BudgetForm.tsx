import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BudgetForm() {
    const [budget, setBudget] = useState({
        user_id: '',
        category_id: '',
        limit_amount: '',
        start_date: '',
        end_date: ''
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setBudget({...budget, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/budgets', budget);
            navigate('/dashboard');
        } catch (error) {
            alert('Failed to add budget');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">Create Budget</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField variant="outlined" margin="normal" required fullWidth id="category_id" label="Category ID" name="category_id" autoFocus value={budget.category_id} onChange={handleChange} />
                <TextField variant="outlined" margin="normal" required fullWidth name="limit_amount" label="Limit Amount" type="number" id="limit_amount" value={budget.limit_amount} onChange={handleChange} />
                <TextField variant="outlined" margin="normal" required fullWidth name="start_date" label="Start Date" type="date" InputLabelProps={{ shrink: true }} id="start_date" value={budget.start_date} onChange={handleChange} />
                <TextField variant="outlined" margin="normal" required fullWidth name="end_date" label="End Date" type="date" InputLabelProps={{ shrink: true }} id="end_date" value={budget.end_date} onChange={handleChange} />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Create Budget</Button>
            </Box>
        </Container>
    );
}

export default BudgetForm;
