import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Fade, Slide } from "@mui/material";

// Function to format WhatsApp URL
const createWhatsAppMessage = (name, email, message) => {
  const text = `
  *New Contact Form Submission:*

  *Name:* ${name}
  *Email:* ${email}
  *Message:* ${message}
  `;
  return `https://wa.me/9075254327?text=${encodeURIComponent(text)}`;
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    console.log("Form submitted:", formData);

    const whatsappUrl = createWhatsAppMessage(name, email, message);

    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 600, // Form width
        margin: "50px auto",
        padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        backgroundColor: "#FFFFFF",
        borderRadius: 3,
        boxShadow: 4, // Enhanced box shadow
        '@media (max-width: 600px)': {
          margin: "20px auto", // Margin adjustment on mobile screens
        },
      }}
    >
      {/* Fade In the Form */}
      <Fade in={showForm} timeout={1000}>
        <Box>
          <Slide direction="left" in={showForm} timeout={1000}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                marginBottom: 3,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                fontWeight: "bold", // Font weight for better readability
                color: "#0072b1", // Dark color for contrast
              }}
            >
              Write Me Your Message
            </Typography>
          </Slide>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, }}>
              {/* Full Name Field */}
              <TextField
                label="Full Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: { xs: "0.875rem", sm: "1rem" }, 
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: "8px", // Rounded borders for input fields
                    backgroundColor: "#f7f7f7", // Light background for inputs
                  },
                }}
              />

              {/* Email Address Field */}
              <TextField
                label="Email Address"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: "8px",
                    backgroundColor: "#f7f7f7",
                  },
                }}
              />

              {/* Message Field */}
              <TextField
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                fullWidth
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: "8px",
                    backgroundColor: "#f7f7f7",
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: 2,
                  padding: "12px 24px",
                  borderRadius: 2,
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#0072b1",
                  },
                  fontSize: { xs: "0.875rem", sm: "1rem" }, 
                  boxShadow: 3, // Button shadow for a modern look
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </Box>
  );
};

export default ContactForm;
