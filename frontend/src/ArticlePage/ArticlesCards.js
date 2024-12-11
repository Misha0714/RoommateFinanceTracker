import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg'; 

// Sample articles array
const articles = [
  {
    media_name: '10 steps to save for your future',
    media_img: image1,
    description: 'Description for Article 1',
    link: 'https://www.investopedia.com/articles/investing/100615/10-ways-effectively-save-future.asp'
  },
  {
    media_name: 'W-4: How to Fill Out The 2024 Tax Withholding Form',
    media_img: image2,
    description: 'Description for Article 2',
    link: 'https://www.investopedia.com/articles/personal-finance/081214/filling-out-your-w4-form.asp'
  },
  {
    media_name: 'The beginner’s guide to credit scores: How to understand and improve your credit score',
    media_img: image3,
    description: 'Description for Article 3',
    link: 'https://www.cnbc.com/select/guide/credit-scores-for-beginners/#what-is-a-good-credit-score'
  },
  {
    media_name: 'How to Start a Roth IRA: A Guide for Beginners', 
    media_img: image4, 
    link: 'https://www.businessinsider.com/personal-finance/investing/how-to-open-ira'
  }
];

// Define the component
const ArticlesCards = () => {
  return (
    <Box sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 35, display: 'flex', gap: 5 }}>
      {articles.map((article, index) => (
        <Card key={index} sx={{ p:0, maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 100 }}
            image={article.media_img} // Correct access
            title={article.media_name || 'Default Name'} // Correct access
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h6" 
              component="div" 
              sx={{ fontSize: '0.7rem', marginBottom: 0 }} // Adjust size and spacing
            >
              {article.media_name}
            </Typography>
          </CardContent >
          <CardActions sx={{p:0}} >
            <Button 
            size="small"
            sx={{fontSize: '0.6rem', marginTop: 0}}
            href={article.link} 
            >
            See More...
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ArticlesCards;
