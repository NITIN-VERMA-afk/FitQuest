import { Box, Typography, Button,Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarRateIcon from "@mui/icons-material/StarRate";
import Reviews from "../componets/Reviews";


const LandingPage = () => {
  const starNumber: number = 4;
  const Stars: React.ReactElement[] = [];
  for (let i = 0; i <= starNumber; i++) {
    Stars.push(<StarRateIcon key={i.toString()} />);
  }

  return (
    <>
      <Paper sx={{width:"100", height: "100vh" }}>
        <Box
          sx={{
            display: "flex", justifyContent: "flex-start",
            alignItems: "center",
            padding: 12,

            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6"># 1 fitness tracking app</Typography>
            <Typography variant="h3">Reach your goals</Typography>
           
            <Typography variant="h3">with Fitquest</Typography>
            <Typography variant="h6">
              Build healthy habits with the all-in-one food, exercise, and
              calorie tracker.
            </Typography>
            <Button variant="contained">
              Start today <ArrowForwardIcon />
            </Button>
          </Box>
          <Box>
            <img
              src="images/landingPhoto.jpg"
              alt="Landingpagepng"
              width="250"
              height="400"
            />
          </Box>
        </Box>
      </Paper>
      {/* reviews section starting */}
      <Paper
        sx={{
          
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#4942E4"
        }}
      >
        <Box sx={{color:"yellow"}}>{Stars}</Box>
        <Typography variant="h1">3.5 million 5-Star-Reviews</Typography>
        <Reviews />
      </Paper>
    </>
  );
};

export default LandingPage;
