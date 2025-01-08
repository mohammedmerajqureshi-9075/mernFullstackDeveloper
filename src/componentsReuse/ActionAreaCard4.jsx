import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import img4 from "../assets/images/photo-1566423471547-2a37c9a39899.avif";
import "../componentsReuse/ActionAreaCard3.css";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img4}
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
            My Approach to Development
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#0072b1", // Text color
              fontSize: "12.61px",
            }}
          >
            {/* I believe in building applications with clean, maintainable code
            that is easy to scale. My approach to development revolves around a
            few core principles: */}
            <ul className="ul-card">
              <li>
                User-Centered Design: I always keep the end-user in mind,
                ensuring that applications are not only functional but intuitive
                and responsive across devices.
              </li>
              <li>
              Agile Workflow: I apply agile practices .
              </li>
              <li>
                Collaborative Mindset: I enjoy working in cross-functional teams
                and believe that collaboration is key to delivering exceptional
                results.
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
