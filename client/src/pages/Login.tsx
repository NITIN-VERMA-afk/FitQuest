import { Box, Typography, Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

type UserType = {
  _id: string;
  email:string;
  
  
};

type SetLoginUser = (user: UserType) => void;

type FormValues = {
  email: string;
  password: string;
};

function Login({ setLoginUser }: { setLoginUser: SetLoginUser }) {
  const Navigate = useNavigate();

  const loginUser = (user: UserType) => {
    axios
      .post("http://localhost:8000/api/v1/users/login", user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        Navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
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
    const user: UserType = {
      _id: "",
      email: data.email,
      password: data.password
    };
    loginUser(user);
  };

  return (
    <>
      <div>
        <Paper>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundImage: `url('https://i.pinimg.com/236x/9d/7c/af/9d7caf002efa649234adcec4aadb96fc.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
                action="post"
              >
                <Typography variant="h4">Member Login</Typography>
                <TextField
                  sx={{ width: "300px", marginBottom: "20px" }}
                  label="Email Address"
                  variant="filled"
                  {...register("email", {
                    required: "please enter your email address",
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  sx={{ width: "300px", marginBottom: "20px" }}
                  label="Password"
                  variant="filled"
                  {...register("password", {
                    required: "please enter your password",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <Typography variant="body2">forget possword?</Typography>
                <Button
                  type="submit"
                  sx={{ width: "100%" }}
                  variant="contained"
                  size="large"
                >
                  Log in
                </Button>
                <Typography>or</Typography>
                <Button
                  sx={{ width: "100%", marginBottom: "6%" }}
                  variant="contained"
                >
                  <GoogleIcon /> Continue with google
                </Button>
                <Button
                  type="submit"
                  sx={{ width: "100%" }}
                  variant="contained"
                  size="medium"
                >
                  <FacebookIcon /> Continue with Facebook
                </Button>
              </form>
            </Box>
            <Box sx={{ alignItems: "center" }}>
              not a member yet?
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/signup"
              >
                sign up now!
              </Link>
            </Box>
          </Box>
          <DevTool control={control} />
        </Paper>
      </div>
    </>
  );
}

export default Login;

