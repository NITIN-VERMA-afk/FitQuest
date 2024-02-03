import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';



export default function PremiumPlanCard(props: any) {
  return (
    <Card sx={{ maxWidth: 345, height: 650 }}>
    <CardMedia
      sx={{ height: 250 }}
      image="/images/premium.jpg"
      title="premium"
    />
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography gutterBottom variant="h5" component="div">
        {props.Heading}
      </Typography>
      <Typography align="center" variant="h4" color="text.secondary">
        {props.pricing}/Month
      </Typography>
      <Typography>{props.sub}</Typography>
      <hr />
      <Box sx={{ flexGrow: 1 }}>
        {props.plan.map((item: any) => (
          <Box key={item.id}>
            <CheckIcon/> {item.plan}
          </Box>
        ))}
      </Box>
      <CardActions sx={{ marginTop: '5%' }}>
        <Button sx={{ margin: '0 auto', display: 'flex' }} size="small">
          Go premium
        </Button>
      </CardActions>
    </CardContent>
  </Card>
  );
}
