import { Button, Box, Typography } from '@mui/material';

const ContactInstagram = () => {
  
  // Instagram URL format with username
  const generateInstagramLink = () => {
    const instagramUsername = 'mr.meraj.404'; // Replace with the desired Instagram username
    
    return `https://www.instagram.com/${instagramUsername}/`;
  };

  return (
    <Box sx={{backgroundColor: 'white'}} className="contact-form-container">
      <Typography variant="h4" sx={{color:'#0072b1'}} className="header-text">Contact Us on Instagram</Typography>
      <Typography variant="body1" sx={{color:'#0072b1'}} className="description-text">
        Click the button to open our Instagram profile.
      </Typography>

      <form className="contact-form">
        <a href={generateInstagramLink()} target="_blank" rel="noopener noreferrer">
          <Button 
            variant="contained" 
            color="primary" 
            className="instagram-button"
          >
            Visit Instagram
          </Button>
        </a>
      </form>
    </Box>
  );
}

export default ContactInstagram;
