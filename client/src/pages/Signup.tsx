import { Box, Typography, Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};

function Signup() {
  const backgroundImageUrl =
    "https://i.pinimg.com/474x/cd/a7/0a/cda70a94ea9fb1293a52beb49c5232b8.jpg";
    
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;


  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

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
              background: `url(${backgroundImageUrl}) center/cover no-repeat`,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
              padding: "5%",
            }}
          >
            <form
             onSubmit={handleSubmit(onSubmit)}
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
                {...register}
              />
              <TextField
                sx={{ width: "300px", marginBottom: "20px" }}
                label="Password"
                variant="filled"
                {...register}

                error={!!errors.password}
              />
              <Typography variant="body2"></Typography>
              <Button sx={{ width: "100%" }} variant="contained" size="large">
                Signup
              </Button>
              <Typography>or</Typography>
              <Button
                sx={{ width: "100%", marginBottom: "6%" }}
                variant="contained"
              >
                <GoogleIcon /> Continue with google
              </Button>
              <Button sx={{ width: "100%" }} variant="contained" size="medium">
                <FacebookIcon /> Continue with Facebook
              </Button>
            </form>
          </Box>
          <Box sx={{ alignItems: "center" }}>
            already a user?
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Login"
            >
              Login now!
            </Link>{" "}
          </Box>
        </Box>
        <DevTool control={control} />
      </Paper>
    </>
  );
}

export default Signup;
