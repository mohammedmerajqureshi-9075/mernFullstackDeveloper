import { Button, Box, Typography } from '@mui/material';
import './ContactWhatsapp.css'

const ContactWhatsapp = () => {
  // WhatsApp API URL
  const whatsappURL = 'https://api.whatsapp.com/send?phone=+919075254327&text=Hello%20Meraj%20Qureshi%F0%9F%91%8B!';

  return (
    <Box className="contact-form-container">
      <Typography variant="h4" sx={{color:'#0072b1'}} className="header-text">WhatsApp Message Link</Typography>
      <Typography variant="body1" sx={{color:'#0072b1'}} className="description-text">
        Click the button to open WhatsApp and send a message to Meraj Qureshi.
      </Typography>
      
      <form className="contact-form">
       
        <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
          <Button 
            variant="contained" 
            color="primary" 
            className="whatsapp-button"
          >
            Send Message
          </Button>
        </a>
      </form>
    </Box>
  );
}

export default ContactWhatsapp;
