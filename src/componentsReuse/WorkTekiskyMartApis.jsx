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
          Backend
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="h5" component="div">
          Tekisky Mart APIs
        </Typography>
        <Typography sx={{ color: "#0072b1", mb: 4 }}>
          Tech: Node.js, Express, MongoDB
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="body2">
          Description: Developing APIs for Tekisky Mart to manage user
          authentication, product data, order management, and payment
          processing.<br/> The APIs are designed for integration with the front-end
          e-commerce platform.<br/> Tech Stack: Node.js, Express, MongoDB <br/> Role:
          Backend Developer <br/> Status: In Progress
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
