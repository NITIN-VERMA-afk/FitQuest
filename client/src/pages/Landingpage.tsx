import { Box, Typography, Button, Paper, Container,Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarRateIcon from "@mui/icons-material/StarRate";
import Reviews from "../componets/Reviews";
import FlagIcon from "@mui/icons-material/Flag";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LandingPageCard from "../componets/LandingPageCard";

const LandingPage = () => {
  const starNumber: number = 4;
  const Stars: React.ReactElement[] = [];
  for (let i = 0; i <= starNumber; i++) {
    Stars.push(<StarRateIcon key={i.toString()} />);
  }

  return (
    <>
      <Paper>
        <Box
          sx={{
            display: { sm: "flex"},
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "500px",
             
        

            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6"># 1 fitness tracking app</Typography>
            <Typography
              sx={{ typography: { sm: "body1", xs: "body2" } }}
              variant="h3"
            >
              Reach your goals
            </Typography>

            <Typography
              sx={{ typography: { sm: "body1", xs: "body2" } }}
              variant="h3"
            >
              with Fitquest
            </Typography>
            <Typography
              sx={{ typography: { sm: "body1", xs: "body2" } }}
              variant="h6"
            >
              Build healthy habits with the all-in-one food, exercise, and
              calorie tracker.
            </Typography>
            <Button variant="contained">
              Start today <ArrowForwardIcon />
            </Button>
          </Box>
          <Box sx={{ maxWidth: '100%', height: 'auto' }}>
            <img
              src="images/landingPhoto.jpg"
              alt="Landingpagepng"
              width="250"
              height="auto"
            />
          </Box>
        </Box>
      </Paper>
      {/* reviews section starting */}
      <Paper
        sx={{
          height:"400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1976D2",
        }}
      >
        <Box sx={{ color: "yellow" }}>{Stars}</Box>
        <Typography
          sx={{ typography: { sm: "body1", xs: "body2" } }}
          variant="h1"
        >
          3.5 million 5-Star-Reviews
        </Typography>
        <Reviews />
      </Paper>
      {/* goal selction start */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <Paper>
       <Typography sx={{ textAlign: "center" }}>
            <FlagIcon />
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h3">
            Hit your health goals in 1-2-3
          </Typography>

       </Paper>
         
          <Paper>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: {  xs: 'column', sm: 'row' },
            }}
          >
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-large.92122bef.png&w=512&q=75"
              alt="goal-1"
              style={{ maxWidth: '100%', height: 'auto' }}
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
        </Grid>

        {/* Second Section */}
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: { xs: 'column-reverse', sm: 'row' },
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
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>

        {/* Third Section */}
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchange-your-habits-large.1cf58b0c.png&w=512&q=75"
              alt="goal-3"
              style={{ maxWidth: '100%', height: 'auto' }}
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
        </Grid>
      </Grid>
    </Paper>
        {/* apps and device section  */}
        <Paper>
      <Grid container>
        {/* Left Box */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              paddingTop: { xs: '4%', md: '0' }, // Adjust padding for different screen sizes
            }}
          >
            <Container>
              <Typography variant="h5">35+ apps and devices</Typography>
              <Typography variant="h3">Sync steps, weight, workouts & more</Typography>
            </Container>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} sm={6}>
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fapp-integrations-large.png&w=512&q=75"
            alt="apps"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Paper>
        
       
        {/* search food catagry */}
        <Paper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1976D2",
              width: "100vw",
              padding: "10px",
              
            }}
          >
            <Typography>
              <MenuBookIcon />
            </Typography>
            <Typography
              sx={{ typography: { sm: "body1", xs: "body2" } }}
              variant="h1"
            >
              If its edible, its in here
            </Typography>
            <Typography
              sx={{ typography: { sm: "body1", xs: "body2" } }}
              variant="h4"
            >
              Food tracking app with 18 million global foods
            </Typography>
            <Button variant="contained">
              search food catagorys <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Paper>
        {/* get result there is proof */}
        <Paper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">get results</Typography>
            <Typography
              sx={{ typography: { sm: "body1", xs: "body2" } }}
              variant="h3"
            >
              Nutrition tracking works, here's the proof
            </Typography>
            <Reviews />
          </Box>
          <Box sx={{ display: "flex" }}>
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuccess-users-left-desktop.e9cc5aaf.png&w=640&q=75"
              alt=""
            />

          
          </Box>
        </Paper>

        {/* daily plain section */}
        <Paper>
          <Box sx={{ textAlign: "center", width: "100vw" }}>
            <Box>
              <Typography variant="h5">Have 2 mins?</Typography>
              <Typography variant="h3">
                Get your personalized daily plan
              </Typography>
              <Button>
                Take the quiz <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* phelosiphy page */}
        <Paper
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frunning-full.47a28cc6.png&w=256&q=75"
              alt=""
            />
          </Box>
          <Box>
            <Typography variant="h6">Our Philosophy</Typography>
            <Typography variant="h4">Knowledge is power</Typography>
            <Typography variant="body1">
              “Studies show people who keep a food diary are more likely to hit
              their goals. fitquest simplifies nutrition and calorie tracking,
              provides the data you want, and helps you make sense of it all.
            </Typography>
            <Typography variant="body1">
              Healthy eating is a continuous journey of self-discovery. And the
              more you track, the more empowered you’ll become to make healthy
              choices that support your goals
            </Typography>
            <Typography variant="h6">dadi ji ke nuske</Typography>
          </Box>
        </Paper>
        {/* from our expert */}
        <Paper>
          <LandingPageCard />
        </Paper>
      </Box>
    </>
  );
};

export default LandingPage;
