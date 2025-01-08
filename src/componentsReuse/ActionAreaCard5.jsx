import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import img5 from "../assets/images/photo-1592093947163-51f1d258d110.avif";
import "../componentsReuse/ActionAreaCard3.css";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img5}
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
            Get In Touch
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#0072b1", // Text color
              fontSize: "12.61px",
            }}
          >
            If you'd like to discuss potential collaborations, job
            opportunities, or just want to chat about the latest tech trends,
            feel free to reach out! I'm always open to connecting with
            like-minded individuals and teams.
            <ul className="ul-card">
              <li>Email: [your.email@example.com]</li>
              <li>LinkedIn: [your-linkedin-profile]</li>
              <li>GitHub: [your-github-profile]</li>
              <li>naukri: [your naukri]</li>
              <li>instagram: [your instagram]</li>
            </ul>
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
