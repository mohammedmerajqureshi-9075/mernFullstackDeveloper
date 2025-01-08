import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import img1 from "../assets/images/photo-1536825211030-094de935f680 (1).avif";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img1}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#0072b1", // Text color
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Font family
              fontWeight: "bolder", // Font weight
            }}
          >
            My Journey as a Developer
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#0072b1", // Text color
              fontSize: "14px",
            }}
          >
            I’m passionate about technology and problem-solving. My journey
            began with web development, and I found my focus in the MERN stack.
            I love creating responsive front-end interfaces with React and
            scalable back-end APIs with Node.js, Express, and MongoDB,
            delivering seamless, user-friendly. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
