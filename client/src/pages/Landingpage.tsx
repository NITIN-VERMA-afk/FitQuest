import { Box, Typography, Button, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarRateIcon from "@mui/icons-material/StarRate";
import Reviews from "../componets/Reviews";
import FlagIcon from "@mui/icons-material/Flag";

const LandingPage = () => {
  const starNumber: number = 4;
  const Stars: React.ReactElement[] = [];
  for (let i = 0; i <= starNumber; i++) {
    Stars.push(<StarRateIcon key={i.toString()} />);
  }

  return (
    <>
      <Paper sx={{ width: "100%", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
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
          backgroundColor: "#4942E4",
        }}
      >
        <Box sx={{ color: "yellow" }}>{Stars}</Box>
        <Typography variant="h1">3.5 million 5-Star-Reviews</Typography>
        <Reviews />
      </Paper>
      {/* goal selction start */}
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper>
          <Typography sx={{ textAlign: "center" }}>
            <FlagIcon />
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h3">
            Hit your health goals in 1-2-3
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-large.92122bef.png&w=512&q=75"
              alt="goal-1"
            />
            <Box>
              <Typography variant="h1">1</Typography>
              <Typography variant="h2">
                Track food, fitness & fasting
              </Typography>
              <Typography variant="h4">
                Tracking calories and macros is easy with our barcode scanner
                and device integration.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h1">2</Typography>
              <Typography variant="h2">Learn what works</Typography>
              <Typography variant="h4">
                Personalized nutrition insights reveal what's working so you can
                make smarter choices.
              </Typography>
            </Box>

            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn-what-works-large.e541991a.png&w=512&q=75"
              alt="goal-2"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchange-your-habits-large.1cf58b0c.png&w=512&q=75"
              alt="goal-3"
            />
            <Box>
              <Typography variant="h1">3</Typography>
              <Typography variant="h2">
                Change your habits and reach your goals
              </Typography>
              <Typography variant="h4">
                Now you have the tools and knowledge to build healthy habits for
                life.
              </Typography>
            </Box>
          </Box>
        </Paper>
        {/* apps and device section  */}
        <Box>
          <Paper>
            
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
