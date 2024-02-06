import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function ExerciseCard({
  name,
  instructions,
  type,

  equipment,
  difficulty,
  key,
}: any) {
  return (
    <Card id={key} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-vector/training-home-concept_23-2148497410.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=country_rows_v1"
        title="exersise"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography>Exercise for: {type}</Typography>

        <Typography>Difficulty Level:{difficulty}</Typography>
        <Typography>
          Equipment Needed:{equipment ? equipment : "none"}
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Instructions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{instructions}</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
