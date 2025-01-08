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
          Fronted
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="h5" component="div">
          Tekisky Mart UI
        </Typography>
        <Typography sx={{ color: "#0072b1", mb: 1.5 }}>
          Tech: React, Redux, HTML/CSS
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="body2">
          Description: Creating a user-friendly and responsive UI for Tekisky
          Mart, using React and Redux for state management. <br/> This includes
          designing and implementing product pages, shopping carts, and checkout
          flows.<br/> Tech Stack: React, Redux, HTML/CSS<br/> Role: Frontend Developer<br/>
          Status: In Progress
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
