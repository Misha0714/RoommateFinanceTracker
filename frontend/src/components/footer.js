import React from 'react';
import { Box, Typography, Link } from '@mui/material';

//Author: Ford C (napip03)
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8bbd0',
        color: '#333',
        padding: '20px',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
            Brainpower Budgeting
        <br />
            Office 53B, 2525 Broadway, Metropolis, XX 10025
        <br />
            <Link href="mailto:contact@mail.com">contact@mail.com</Link>
        <br />
            000-000-0000
      </Typography>
      <Box mt={2}> 
        <Typography variant="body2">
          <Link href="/about" color="inherit">
            About
          </Link>
          {' | '} 
          <Link href="/blog" color="inherit">
            Blog
          </Link>
          {' | '}
          <Link href="/signin" color="inherit">
            Login 
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;