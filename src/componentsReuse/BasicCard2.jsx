import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../componentsReuse/BasicCard2'

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className='Typography-technologies-1' gutterBottom sx={{ color: '#0072b1', fontSize: 14 }}>
        Technologies for server-side logic
        </Typography>
        <Typography sx={{color:'#0072b1'}} className='Typography-development-1' variant="h5" component="div">
        Back-End Development 
        </Typography>
        <Typography className='Typography-skill-1' sx={{ color: '#0072b1', mb: 2.5 }}>Skills</Typography>
        <Typography sx={{color:'#0072b1'}} className='Typography-skillss-1'  fontSize='12.25px' variant="body2">
        Node.js : JavaScript runtime for building server-side apps <br />
Express.js : Framework for building web APIs with Node.js<br />
Python : Programming language for backend development<br />
Flask : Lightweight Python web framework for APIs and apps<br />
RESTful APIs : Designing and building APIs using HTTP methods<br />
JWT & OAuth : Authentication and authorization methods<br />
NoSQL : Databases like MongoDB
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
