import { Button, Box,  Typography } from '@mui/material';


const ContactEmail = () => {
  
  
  // Email URL format with subject and body
  const generateMailtoLink = () => {
    const email = 'mohammedmerajqureshi9075@gmail.com'; // Replace with the desired email address
    

    return `mailto:${email}?subject=&body=`;
  };

  return (
    <Box sx={{backgroundColor:'white'}} className="contact-form-container">
      <Typography sx={{color:'#0072b1'}} variant="h4" className="header-text">Contact Us Email</Typography>
      <Typography sx={{color:'#0072b1'}} variant="body1" className="description-text">
        Click the button to open your email client with a pre-filled message.
      </Typography>

      <form className="contact-form">
       

        <a href={generateMailtoLink()}>
          <Button 
            variant="contained" 
            color="primary" 
            className="email-button"
          >
            Send Email
          </Button>
        </a>
      </form>
    </Box>
  );
}

export default ContactEmail;
