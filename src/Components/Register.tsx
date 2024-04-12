import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  Stack,
  ThemeProvider,
  createTheme,
  Divider,
  Link
} from '@mui/material';
import getSignUpTheme from './sign-up/getSignUpTheme'; // Adjust the path as necessary
import ToggleColorMode from './sign-up/ToggleColorMode'; // Adjust the path as necessary
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './sign-up/CustomIcons'; // Adjust the path as necessary

// Assuming the environment variable for your backend URL is correctly set up
const URL = import.meta.env.VITE_BASE_URL;

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [mode, setMode] = React.useState('light');
  const theme = React.useMemo(() => createTheme(getSignUpTheme(mode)), [mode]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Could not register user.');

      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // Redirect user to the dashboard
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const toggleTheme = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

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
              value={user.username}
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
              value={user.email}
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
              value={user.password}
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
