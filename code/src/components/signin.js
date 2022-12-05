import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import API from "./api"
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  useRouteMatch,
  Redirect,
  useParams,
  useLocation,
  Switch,
} from "react-router-dom";
import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [msg, setmsg] = useState(null);
  const [open, setopen] = useState(false);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const history = useNavigate();

 

  const submit = (e) => {
    e.preventDefault();

    





    axios.post(`${API}/signin`, data).then((res) => {
      
      setmsg(res.data.msg);
      setopen(true);
      if (res.data.msg === "log In Successful") {
        localStorage.setItem("user",JSON.stringify(res.data.user))
        setmsg(res.data.msg);
        setopen(true);
        history("/homepage");
      } else {
        setmsg(res.data.msg);
        setopen(true);
      }
    });
  };

  const handleClick = () => {
    setopen(false);
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
     history("/homepage")
    }
  },[]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} style={{ width: 130 }} />

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={submit} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={data.email}
            onChange={change}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            // inputProps={{ pattern: "" }}

            autoComplete="email"
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={data.password}
            onChange={change}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container spacing={3}>
            <Grid item >
              <Link
                to="/signup"
                variant="body2"
                style={{ color: "#0A5995", textDecoration: "none" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
        
            <Grid item >
              <Link
                to="/forgetpassword"
                variant="body2"
                style={{ color: "#0A5995", textDecoration: "none" }}
              >
                {"Forget Password ?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClick}>
        {(() => {
          if (msg === "Incorrent Password") {
            return (
              <MuiAlert severity="error" elevation={6} variant="filled">
                {msg}
              </MuiAlert>
            );
          } else if (msg === "This Email is not registered") {
            return (
              <MuiAlert severity="error" elevation={6} variant="filled">
                {msg}
              </MuiAlert>
            );
          } else {
            return (
              <MuiAlert severity="success" elevation={6} variant="filled">
                {msg}
              </MuiAlert>
            );
          }
        })()}
      </Snackbar>
    </Container>
  );
}
