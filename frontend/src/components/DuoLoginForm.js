import React, { useState } from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import LoginPage from './LoginForm';
import RegistrationForm from './registrationForm';

//Author Ford C. (napip03)
const DuoLoginForm = () => {
  const [showFirstElement, setShowFirstElement] = useState(true);

  const handleButtonClick = () => {
    setShowFirstElement(!showFirstElement);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={1} sx={{ padding: 3, width: 300, textAlign: 'center' }}>
        {showFirstElement ? (
          <LoginPage/>
        ) : (
          <RegistrationForm/>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleButtonClick}
        >
          Switch to Registration / Login
        </Button>
      </Paper>
    </Box>
  );
};

export default DuoLoginForm;
