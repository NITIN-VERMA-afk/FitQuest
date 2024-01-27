import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cardData = [
  {
    id: 1,
    img: "https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fwp-content%2Fuploads%2F2021%2F01%2FEssential-Guide-to-Food-Logging-featured.jpg&w=1920&q=75",
    dec: "Whether your goal is to lose weight, build strength, perform at your peak or improve your overall health, keeping an accurate food journal of what you eat and drink is essential. It provides valuable insight into your nutrition habits, so you can see trends and make adjustments as needed.",
    heading:"Essansial guide to food loging",
  },
  {
    id: 2,
    img: "https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fwp-content%2Fuploads%2F2016%2F01%2FThingsYoullLearn.jpg&w=1920&q=75",
    dec: "There’s no easier way to track your food, activity, steps, water, weight and measurements than MyFitnessPal. That’s why more than 200 million people use the app to to achieve their health and fitness goals.",
    heading:"11 things u learn using fit quest"
  },
  {
    id: 3,
    img: "https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fwp-content%2Fuploads%2F2017%2F12%2FEssential-Guide-to-Healthy-Eating-2.png&w=1920&q=75",
    dec: "When you start learning more about nutrition, it can seem overwhelming. For people who are interested, there is definitely a lot to learn and explore, but, in the end, basic nutrition is quite simple. It’s so simple, in fact, that we know you can eat better by focusing on these eight things.",
    heading:"Essansial guide to Healtthy eating"
  },
];

export default function MediaCard() {
  return (
    cardData.map((items)=>{
        return(
            <Card sx={{ maxWidth: 800 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={items.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {items.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {items.dec}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read more</Button>
           
            </CardActions>
          </Card>

        )
    })
   
  );
}
