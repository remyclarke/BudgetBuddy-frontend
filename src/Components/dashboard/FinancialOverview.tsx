import React, { useEffect, useState } from 'react';
import { Paper, Typography, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';
import { useUser } from '../../../helpers/UserContext';  // Adjust path as necessary

const FinancialOverview = () => {
  const [financialData, setFinancialData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useUser();  // Using global user context directly

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.id) {
        setLoading(true);
        try {
          const response = await axios.get(`/api/financial-health/${user.id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`  // Assuming token is stored in localStorage
            }
          });
          setFinancialData(response.data);
          setError(null);
        } catch (err) {
          console.error("Failed to fetch financial data:", err);
          setError("Failed to fetch financial data");
          setFinancialData(null);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  // Handling the display of financial data
  const renderFinancialData = () => {
    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;
    if (!financialData) return <Typography>No financial data available.</Typography>;

    return Array.isArray(financialData) ?
      financialData.map((item, index) => (
        <Typography key={index}>
          Score on {new Date(item.calculation_date).toLocaleDateString()}: {item.score}
        </Typography>
      )) :
      <Typography>
        Score on {new Date(financialData.calculation_date).toLocaleDateString()}: {financialData.score}
      </Typography>;
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Financial Overview</Typography>
      {renderFinancialData()}
    </Paper>
  );
};

export default FinancialOverview;
