import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../componentsReuse/BasicCard1'

export default function BasicCard() {
  return (
    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: '#0072b1', fontSize: 14 }}>
        Technologies you use to create the user interface
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="h5" component="div">
        Front-End Development
        </Typography>
        <Typography sx={{ color: '#0072b1', mb: 1.5 }}>Skills</Typography>
        <Typography sx={{color:'#0072b1'}} variant="body2">
        HTML5 : Markup for building structure <br/>
        CSS3 : Styling web pages, Flexbox, and Grid<br/>
        JavaScript : Core scripting language<br/>
        React.js : Building dynamic UIs, component-based development<br/>
        Redux : State management in React <br />
        Responsive Design : Ensuring your apps work on all devices <br />
        Bootstrap/Tailwind CSS : CSS frameworks for rapid UI development
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
