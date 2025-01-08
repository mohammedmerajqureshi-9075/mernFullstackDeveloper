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
        Technologies
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="h5" component="div">
        Additional Tools
        </Typography>
        <Typography sx={{ color: "#0072b1", mb: 1.9 }}>
          Skills
        </Typography>
        <Typography sx={{color:'#0072b1'}} fontSize="12px" variant="body2">
          Git: Proficient in using Git for source code management, including
          branching, merging, and maintaining a clean commit history.<br/>
          GitHub/GitLab: Experienced in remote repositories, collaboration
          through pull requests, and issue tracking for team projects.
          <br/>
          Workflows: Familiar with branching strategies (Git Flow, GitHub Flow)
          and advanced Git operations like rebasing and cherry-picking.
          <br/>
           CI/CD:
          Knowledge of integrating Git with CI/CD pipelines (GitHub Actions,
          GitLab CI) for automated testing and deployment.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
