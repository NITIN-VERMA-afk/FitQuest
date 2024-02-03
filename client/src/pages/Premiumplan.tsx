import { Paper, Typography, Box,Button } from "@mui/material";
import PremiumPlanCard from "../componets/PremiumPlanCard"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Grid from "@mui/material/Grid";




const Plans = [
  {
    id: 1,
    Heading:"Basic plan",
    pricing:"$9.99",
    sub:"get started with out basic plan kickstart your fitness journey",
    plan:"basicplan"
  },
  {
    id: 2,
    Heading:"premium-plan",
    pricing:"$19.99",
    sub:"premium plan for a compreshensive fitness expreriance ",
    plan:"Preplan"
  },
  {
    id: 3,
    Heading:"vip-plan",
    pricing:"$29.99",
    sub:"go pro and take your fitness to next level with personalized choching",
    plan:"vipplan"
  },
 
];
const basicplan = [
  {
    id: 1,
    plan: "wide range of workout video",
  },
  {
    id: 2,
    plan: "baisc progress tracking",
  },
  {
    id: 3,
    plan: "Limited ad-free experiance",
  },
];

const Preplan = [
  {
    id: 1,
    plan: "all basic benifit",
  },
  {
    id: 2,
    plan: "Expended library of workouts",
  },
  {
    id: 3,
    plan: "personalized workout plans",
  },
  {
    id: 4,
    plan: "add free experiance",
  },
  {
    id: 5,
    plan: "Live classes and expert-led sessions",
  },
];

const vipplan = [
  {
    id: 1,
    plan: "All premium benifit",
  },
  {
    id: 2,
    plan: "one on one seasion with trainers",
  },
  {
    id: 3,
    plan: "Advance analytics",
  },
  {
    id: 4,
    plan: "in-depth progress tracking",
  },
  {
    id: 5,
    plan: "fitness challenges and competitions",
  },
  {
    id: 6,
    plan: "peoprty customer support",
  },
];

const Premiumplan = () => {
  return (
    <>
      <Paper>
      <Box sx={{paddingTop:"5%"}}>
        <Typography variant="h3">Say hello to your best self</Typography>
        <Typography>Members are up to 65% more likely to reach their goals with premium.</Typography>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingTop:"10%"}}>
          <Typography variant="h5"> <WorkspacePremiumIcon/>Custom Macro Tracking:Find your balance of carbs,protein & fat  </Typography>
          <Typography variant="h5"> <WorkspacePremiumIcon/> Zero Ads:Track and reach your goals,distraction-free </Typography>
          </Box>

        </Box>
        <Box>
          <Typography variant="h2" textAlign={"center"}>Unlock Fitness Excellence With Premium</Typography>
          <Grid container spacing={2}>
          {Plans.map((item: any) => (
            <Grid item key={item.id} xs={12} sm={12} md={6} lg={4}>
            <PremiumPlanCard  key={item.id} Heading={item.Heading}  pricing={item.pricing} sub={item.sub}  plan={item.plan === "basicplan" ? basicplan : (item.plan === "Preplan" ? Preplan : vipplan)}/>
            </Grid>
          ))}

          </Grid>
         
        </Box>
        <Box>
          <Button sx={{margin: '0 auto', display: "flex"}}>start 1-Month Free Trial</Button>
        </Box>
      </Paper>
    </>
  );
};

export default Premiumplan;
