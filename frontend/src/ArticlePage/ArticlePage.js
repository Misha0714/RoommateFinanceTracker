import React from 'react';
import { Box, IconButton, Container } from '@mui/material';
import { Typography } from '@mui/material';
import ArticlesCards from './ArticlesCards'; 


function ArticlePage() {
  return (
    <>
      {/* Set the entire document's title */}
      {document.title = ""}

      {/* Main Container */}
      <Box sx={{
        color: "black",
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}>
        {/* Page Title */}
        <Typography variant="h4" sx={{}}>
          
        </Typography>
        
        {/* Centered Articles Section */}
        <ArticlesCards />
      </Box>
    </>
  );
}
export default ArticlePage; 