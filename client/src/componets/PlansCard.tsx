
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button } from '@mui/material';







export default function ActionAreaCard(props:any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.duration}
          </Typography>
          <Button>Buy plan</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}