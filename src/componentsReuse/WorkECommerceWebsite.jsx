import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "#0072b1", fontSize: 14 }}>
          FullStack
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="h5" component="div">
          E-commerce Website
        </Typography>
        <Typography sx={{ color: "#0072b1", mb: 1.5 }}>
          Tech: React, Node.js, Express, MongoDB
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="body2">
          Description: Building a full-stack e-commerce platform from scratch to
          provide seamless shopping experiences. <br/> The project includes features
          like product listing, user authentication, cart management, and order
          processing.<br/> Tech Stack: React, Node.js, Express, MongoDB <br/> Role:
          Full-Stack Developer<br/> Status: In Progress 
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
