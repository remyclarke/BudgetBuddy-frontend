import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box, Button, Card, CssBaseline, TextField, Typography, ThemeProvider, createTheme, Link
} from '@mui/material';
import getSignUpTheme from './sign-up/getSignUpTheme'; // Adjust the path as necessary
import { useUser } from '../../helpers/UserContext'; // Import the useUser hook

const URL = import.meta.env.VITE_BASE_URL;

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useUser(); // Use the useUser hook to get setUser
  const [registerUser, setRegisterUser] = useState({ username: '', email: '', password: '' });
  const [mode, setMode] = React.useState('light');
  const theme = React.useMemo(() => createTheme(getSignUpTheme(mode)), [mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerUser),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Could not register user.');

      localStorage.setItem('token', data.token); // Store the token in localStorage
      setUser(data.user); // Set user in the global context
      navigate('/dashboard'); // Redirect user to the dashboard
    } catch (error) {
      console.error('Registration error:', error);
      alert("Registration failed. Please check your details and try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ p: 4, minWidth: 300 }}>
          <Typography variant="h5" component="h1" gutterBottom>Sign Up</Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={registerUser.username}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={registerUser.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={registerUser.password}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            <Link component={RouterLink} to="/login" variant="body2" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
              Already have an account? Sign in
            </Link>
          </form>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
