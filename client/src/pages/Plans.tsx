import { Paper, Typography, Box } from "@mui/material";
import PlanCard from "../componets/PlansCard";
import Grid from "@mui/material/Grid";

const PlanCardData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/person-sport-gym-using-kettlebells_23-2149255819.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Progressive Dumbbell",
    duration: "14 days*6x a week",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/side-view-people-doing-sport-with-stats_23-2150040508.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Intro to Macro Tracking",
    duration: "28 days*Daily",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/young-fitness-woman-sportswear-with-headband-holding-speech-bubble-sign-with-word-idea-pointing-up-with-index-finger-looking-surprised-happy-standing-white-wall_141793-49922.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "myfitness quest",
    duration: "7 days*Daily",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/young-smiling-attractive-slim-woman-doing-sports-morning-sunrise-jumping-sea-beach-sports-wear-healthy-lifestyle-listening-music-earphones-wearing-pink-windbreaker-jacket-having-fun_285396-5632.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "jumpstart your health",
    duration: "14 days*Daily",
  },
  {
    id: 5,
    img: "https://img.freepik.com/premium-photo/pregnant-woman-eating-salad-couch_107420-6715.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Eating for pregnancy",
    duration: "7 days*Daily",
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-photo/long-haired-woman-eating-sweets-white-sheet_1398-2976.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Eat Right,sleep Tight",
    duration: "5 days*5x a weeek",
  },
  {
    id: 7,
    img: "https://img.freepik.com/free-photo/business-woman-with-salad_1303-3889.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Eat Green",
    duration: "14 days*Daily",
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-photo/man-throwing-vegetables-from-pan_114579-30544.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Eat to compete",
    duration: "6 days*Daily",
  },
  {
    id: 9,
    img: "https://img.freepik.com/free-photo/hand-gesture-presenting-medical-tech-hologram_53876-105160.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Core plus",
    duration: "28days*2-4x a week",
  },
  {
    id: 10,
    img: "https://img.freepik.com/free-photo/top-view-quail-eggs-female-hands-dark-table_140725-136408.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Building Healthy habits",
    duration: "28days*Daily",
  },
  {
    id: 11,
    img: "https://img.freepik.com/free-vector/reach-success_1300-298.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "9,000 steps a Day",
    duration: "28days*Daily",
  },
  {
    id: 12,
    img: "https://img.freepik.com/free-photo/woman-red-sweatshirt-showing-her-fist-meaning-her-power_144627-59485.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Low impact strenght",
    duration: "28 days.3* a week",
  },
  {
    id: 13,
    img: "https://img.freepik.com/free-photo/medium-shot-woman-with-vegetables-water_23-2148996316.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Reaching your calorie goal",
    duration: "28 days.Daily",
  },
  {
    id: 14,
    img: "https://img.freepik.com/free-vector/isometric-infographic-steps-concept_23-2148034671.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "6,0000 steps a day",
    duration: "28 days.Daily",
  },
  {
    id: 15,
    img: "https://img.freepik.com/free-photo/picture-funny-happy-man-with-fake-muscle-arms_176420-2928.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Total body power",
    duration: "28 days.4x a week",
  },
  {
    id: 16,
    img: "https://img.freepik.com/free-photo/young-smiling-attractive-slim-woman-doing-sports-morning-sunrise-jumping-sea-beach-sports-wear-healthy-lifestyle-listening-music-earphones-wearing-pink-windbreaker-jacket-having-fun_285396-5629.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Healthy kickstart",
    duration: "28 days.Daily",
  },
  {
    id: 17,
    img: "https://img.freepik.com/free-photo/girl-grey-sweater-showing-her-arm-muscles_144627-64411.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Support your immune system",
    duration: "14 days.Daily",
  },
  {
    id: 18,
    img: "https://img.freepik.com/free-photo/woman-trying-eat-healthy-home_23-2149229138.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Eating for impact",
    duration: "7 days.Daily",
  },
  {
    id: 19,
    img: "https://img.freepik.com/free-photo/search-engine-marketing-concept_23-2150834424.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "small steps",
    duration: "7 days.Daily",
  },
  {
    id: 20,
    img: "https://img.freepik.com/free-photo/ketogenic-low-carbs-diet-food-selection-white-wall_155003-27734.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "low Carb",
    duration: "28 days.Daily",
  },
  {
    id: 21,
    img: "https://img.freepik.com/free-photo/young-sporty-woman-with-long-hair-black-top_176474-90315.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Toned Upper Body",
    duration: "28 days.2-4x a week",
  },
  {
    id: 22,
    img: "https://img.freepik.com/free-photo/real-food-pyramid-arrangement-still-life_23-2150238916.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "high Protein",
    duration: "28 days.Daily",
  },
  {
    id: 23,
    img: "https://img.freepik.com/free-photo/low-angle-businesswoman-zen-pose_23-2148767041.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Mindful + Motivated",
    duration: "28 days.Daily",
  },
  {
    id: 23,
    img: "https://img.freepik.com/free-photo/smiling-curly-brunette-fitness-woman-holding-weighting-scales_171337-1845.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "progressive Bodyweight",
    duration: "28 days.6-7x a week",
  },
  {
    id: 24,
    img: "https://img.freepik.com/free-photo/assortment-different-types-sugar_144627-34010.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "Strong Glutes & Things",
    duration: "28 days.6-7x a week",
  },
  {
    id: 25,
    img: "https://img.freepik.com/free-photo/hands-holding-knife-fork-alarm-clock-plate-blue-background_169016-21525.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "intermittent Fasting",
    duration: "14 days.Daily",
  },
  {
    id: 26,
    img: "https://img.freepik.com/free-vector/business-concept-steps-succeed-isometric-illustration-man-stepping-idea-plan-work-promotion-success-blocks_126523-542.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais",
    Heading: "11,000 steps a Day",
    duration: "28 days.Daily",
  },
];

const Plans = () => {
  return (
    <>
      <Paper>
        <Box>
          <Typography variant="h3"> Find a Plan</Typography>
          <Typography variant="body1">
            Meal Plans,Workout Plans,and more.start a plan,follow along and
            reach your goals
          </Typography>
        </Box>
        <Typography variant="h1">Available Plans</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {PlanCardData.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <PlanCard
                  key={item.id}
                  img={item.img}
                  Heading={item.Heading}
                  duration={item.duration}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default Plans;
