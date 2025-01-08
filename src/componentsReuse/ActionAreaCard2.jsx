import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import img2 from "../assets/images/top-MERN-Stack.webp";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img2}
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
            Why MERN Fullstack Development?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#0072b1", // Text color
              fontSize: "12.61px",
            }}
          >
            The MERN stack offers a powerful combination of tools for building
            modern, scalable, and performant web applications. The fact that
            it's JavaScript-based across both the client and server side makes
            it easier for me to maintain a unified development process. Whether
            I’m working on dynamic, real-time features in React or designing
            flexible Apis
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
