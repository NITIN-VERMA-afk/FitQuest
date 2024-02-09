import { Box, Typography, Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};

function Signup() {
  const [user, setuser] = useState({ email: "", password: "" });

  const Register = () => {
    const { email, password } = user;
    if (email && password) {
      axios
        .post("http://localhost:8000/Register", { email, password })
        .then((res) => {
          console.log("Registration successful:", res.data);
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
    } else {
      alert("Invalid user");
    }
  };

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
    setuser(data);
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
              action="get"
            >
              <Typography variant="h4">Create New Account</Typography>
              <TextField
                sx={{ width: "300px", marginBottom: "20px" }}
                label="Email Address"
                variant="filled"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <Typography variant="body2" color="error">
                  {errors.email.message}
                </Typography>
              )}
              <TextField
                sx={{ width: "300px", marginBottom: "20px" }}
                label="Password"
                variant="filled"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
              />
              <Typography variant="body2" color="error">
                {errors.password && "Password is required"}
              </Typography>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                size="large"
                type="submit"
              >
                Signup
              </Button>
              <Typography>or</Typography>
              <Button
                sx={{ width: "100%", marginBottom: "6%" }}
                variant="contained"
              >
                <GoogleIcon /> Continue with Google
              </Button>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                size="medium"
                type="submit"
              >
                <FacebookIcon /> Continue with Facebook
              </Button>
            </form>
          </Box>
          <Box sx={{ alignItems: "center" }}>
            Already a user?
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
