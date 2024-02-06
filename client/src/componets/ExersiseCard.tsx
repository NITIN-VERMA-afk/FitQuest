import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ExerciseCard({
  name,
  instructions,
  type,
  muscle,
  equipment,
  difficulty,
  key,
}: any) {
  return (
    <Card id={key} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-photo/high-angle-bottle-dumbbells_23-2149872130.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais"
        title="exersise"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography>Exercise for {type}</Typography>
        <Typography>Targets:{muscle}</Typography>
        <Typography>Difficulty Level:{difficulty}</Typography>
        <Typography>
          Equipment Needed:{equipment ? equipment : "none"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Instructions: {instructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Know more</Button>
      </CardActions>
    </Card>
  );
}
