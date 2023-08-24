import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Checkbox } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const defaultTheme = createTheme();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemeberMe, setIsRememberMe] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isRemeberMe") == "true") {
      let userToken = localStorage.getItem("userToken");
      if (userToken) {
        let decoded = jwtDecode(userToken);
        let expire = decoded.exp * 1000;
        if (new Date().getTime() < expire) {
          navigate("/dashboard");
        } else {
          localStorage.clear();
        }
      } else {
        localStorage.clear();
      }
    }
  }, []);

  const navigate = useNavigate();

  const login = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/login";
    console.log();

    fetch(url, {
      headers: {
        email: email,
        password: password,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.status === true) {
          if (isRemeberMe == true) {
            localStorage.setItem("userToken", data.token);
            localStorage.setItem("isRemeberMe", isRemeberMe);
          }
          navigate("/dashboard");
        } else {
          localStorage.clear();
          alert("Login failed!");
        }
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography color={"purple"} component="h1" variant="h1">
            FLIXXIT
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label>
            <Checkbox
              checked={isRemeberMe}
              onChange={(e) => setIsRememberMe(e.target.checked)}
            />
            Remember Me
          </label>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => login()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                variant="body2"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
