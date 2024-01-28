import { Box, Typography, Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function Signup() {
    const backgroundImageUrl = 'https://i.pinimg.com/474x/cd/a7/0a/cda70a94ea9fb1293a52beb49c5232b8.jpg';


  return (
    <>
      <Paper>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
           

           
          }}
        >
          <Box
            sx={{
              width: "35%",
              background: `url(${backgroundImageUrl}) center/cover no-repeat`,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
              padding: "5%",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              action=""
            >
              <Typography variant="h4">create new account</Typography>
              <TextField
                sx={{ width: "300px", marginBottom: "20px" }}
                label="Email Address"
                variant="filled"
              />
              <TextField
                sx={{ width: "300px", marginBottom: "20px" }}
                label="Password"
                variant="filled"
              />
              <Typography variant="body2"></Typography>
              <Button sx={{width:"100%"}} variant="contained" size="large">
                Signup{" "}
              </Button>
              <Typography>or</Typography>
              <Button sx={{width:"100%",marginBottom:"6%"}} variant="contained">
                <GoogleIcon /> Continue with google
              </Button>
              <Button sx={{width:"100%"}} variant="contained" size="medium">
                {" "}
                <FacebookIcon /> Continue with Facebook
              </Button>
            </form>
          </Box>
          <Box sx={{ alignItems: "center" }}>already a user?loginin up now!</Box>
        </Box>
      </Paper>
    </>
  );
}

export default Signup;
