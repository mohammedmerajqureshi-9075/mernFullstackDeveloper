import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { colors } from "@mui/material";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "#0072b1", fontSize: 14 }}>
          Database Management:
        </Typography>
        <Typography sx={{color:'#0072b1'}} variant="h5" component="div">
          Database Management
        </Typography>
        <Typography sx={{ color: "#0072b1", mb: 3 }}>
          Skills
        </Typography>
        <Typography sx={{color:'#0072b1'}} fontSize="12px" variant="body2">
          MongoDB: NoSQL database for flexible, schema-less data storage, ideal
          for handling large volumes of unstructured or semi-structured data.
          Expertise in designing collections, managing schema-less data, and
          utilizing the aggregation framework for complex queries and
          transformations.
          <br/>
           Mongoose: ODM (Object Data Modeling) library for
          MongoDB in Node.js. Simplifies database interactions with features
          like schema definitions, validation, querying, and population for
          handling relationships between documents.
          <br/>
           SQL Databases (PostgreSQL,
          MySQL): Relational databases for structured data management using SQL.
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
