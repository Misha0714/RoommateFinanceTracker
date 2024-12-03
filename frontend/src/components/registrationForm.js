import React, { useState } from "react";
import { Paper, TextField, Button, Grid, Container, Typography, Box , InputAdornment, } from "@mui/material";
import {
    Face as UserIcon,
    Lock as LockIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
    Mail as MailIcon,
} from '@mui/icons-material';
  


//Author Ford C. (napip03)
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {}; 

    if (!formData.username) {
      isValid = false;
      errors.username = "Account Name is required";
    }

    if (!formData.email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = "Email address is invalid";
    }

    if (!formData.password) {
      isValid = false;
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      isValid = false;
      errors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      // You can make API calls or handle form submission here
    }
  };

  return (
    <Container maxWidth="xs" component="main">
     <Box
     sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
     <Paper
     elevation={3}
     sx={{
       padding: 4,
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       width: '100%'
     }}>
      <Typography variant="h4" gutterBottom>
        Create an Account
      </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                label="Username"
                variant="outlined"
                fullWidth
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={Boolean(errors.username)}
                helperText={errors.username}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserIcon />
                      </InputAdornment>
                    )
                  }}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    )
                  }}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    )
                  }}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon/>
                      </InputAdornment>
                    )
                  }}
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                >
                Register
                </Button>
            </Grid>
            </Grid>
        </form>
      </Paper> 
      </Box>
    </Container>
  );
};

export default RegistrationForm;
