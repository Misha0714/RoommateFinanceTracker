import React from 'react';
import { Link } from "react-router-dom";
import { Box, Button, Container } from '@mui/material';
import { Typography } from '@mui/material';
import backgroundImage from '../images/background.jpg'; 
function LandingPage() {
    return (
      <>
        {/* Set the entire document's title */}
  
        {/* Main Container with the background image */}
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: '20px'
          }}
        >
          {/* Page Title */}
          <Typography variant="h1" 
          sx={{ 
            mb: 2, 
            color: 'gray',
            
            fontSize: '3rem',
            fontWeight: 'bold',
            fontFamily: 'Libre Baskerville, serif', // Set the font style
          }}>
            Manage Your Finances With Others Easily! 
          </Typography>
          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: 3, mt: 2, flexDirection: 'column', paddingTop: '40px', alignItems: "center", justifyContent: "center"}}>
            <Link to="/dashboard" style={{ 
              textDecoration: "none", 
              color: "white", 
              width: "100%"
              }}>
              <Button 
                variant="contained"
                sx={{ 
                  backgroundColor: '#433B6B',
                  color: 'white',
                  padding: '20px 20px',
                  fontSize: '1rem',
                  fontFamily: 'Libre Baskerville, serif', 
                  width: "100%"
                }}
                onClick={() => alert('Button 1 clicked!')}
              >
                Utilize our Budgeting And Expense-Splitting Dashboard
              </Button>
            </Link>
            
            <Link to="/blog" style={{ textDecoration: "none", color: "#333", width: "100%" }}>
              <Button 
                variant="outlined"
                sx={{ 
                  backgroundColor: 'white',
                  borderColor: 'white',
                  padding: '20px 20px',
                  fontSize: '1rem',
                  fontFamily: 'Libre Baskerville, serif', 
                }}
                onClick={() => alert('Button 2 clicked!')}
              >
                See our Budgeting Tips!
              </Button>
            </Link>
          </Box>
        </Box>
      </>
    );
  }
  export default LandingPage; 