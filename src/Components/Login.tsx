import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box, Button, Card, CssBaseline, TextField, Typography, ThemeProvider, createTheme, Link
} from '@mui/material';
import getSignInTheme from './sign-in/getSignInTheme';
import { useUser } from '../../helpers/UserContext';  // Import the useUser hook from the context

const URL = import.meta.env.VITE_BASE_URL;

export default function SignIn() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [mode, setMode] = useState('light');
  const { setUser } = useUser();  // Use the useUser hook to get the setUser function

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken();
    }
  }, [navigate]);

  const validateToken = async () => {
    try {
      const response = await fetch(`${URL}/api/auth/check-auth`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (response.ok) {
        navigate("/dashboard");
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Token validation error:", error);
    }
  };

  const handleChange = (event) => {
    setLoginUser({ ...loginUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loginUser.username || !loginUser.password) {
      alert("You must enter a username and password");
      return;
    }
    try {
      const response = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Authentication failed.");
      localStorage.setItem("token", data.token);
      setUser(data.user);  // Set user in the global context
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const signInTheme = createTheme(getSignInTheme(mode));

  return (
    <ThemeProvider theme={signInTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ p: 4, minWidth: 300 }}>
          <Typography variant="h5" component="h1" gutterBottom>Login</Typography>
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
              value={loginUser.username}
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
              autoComplete="current-password"
              value={loginUser.password}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Login</Button>
            <Link component={RouterLink} to="/register" variant="body2">
              Don't have an account? Register
            </Link>
          </form>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
