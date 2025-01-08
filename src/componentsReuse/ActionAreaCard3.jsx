import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import img3 from "../assets/images/0_RfvInMt7Z1TSCa8N.png";
import "../componentsReuse/ActionAreaCard3.css";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img3}
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
            My Tech Stack:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#0072b1", // Text color
              fontSize: "12px",
            }}
          >
            <ul className="ul-card">
              <li>
                Frontend: React, Redux, React Router, Tailwind CSS, Material-UI
              </li>
              <li>Backend: Node.js, Express.js, RESTful API development</li>
              <li>Database: MongoDB, Mongoose</li>
              <li>Version Control: Git, GitHub</li>
              <li>Deployment: Heroku, Vercel, Docker</li>
              <li>
                Other Tools: JWT Authentication, Postman, Jest, Docker,
                Git/GitHub, CI/CD Pipelines, OAuth, and GraphQL.
              </li>
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
