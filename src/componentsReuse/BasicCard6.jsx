import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "#0072b1", fontSize: 14 }}>
          Soft
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="h5" component="div">
          Soft Skills:
        </Typography>
        <Typography sx={{ color: "#0072b1", mb: 6.2 }}>
          Skills
        </Typography>
        <Typography sx={{color:'#0072b1'}} fontSize="12px" variant="body2">
          Problem Solving: Analytical mindset to debug and optimize complex
          systems.<br/>
           Team Collaboration: Experience working in agile teams,
          participating in code reviews, and collaborating with designers,
          project managers, and other developers.<br/>
           Communication: Clear
          communication with clients and team members, ability to explain
          complex technical concepts to non-technical stakeholders.<br/>
           Continuous Learning : Always staying up to date with the latest web technologies,
          tools, and trends.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
