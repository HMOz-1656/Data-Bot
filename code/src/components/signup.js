import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useNavigate, Link, Navigate } from "react-router-dom";
import API from "./api"
import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [msg, setmsg] = useState(null);
  const [open, setopen] = useState(false);
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const change = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      history("/homepage");
    }
  }, []);
  const submit = (e) => {
    e.preventDefault();

    if (data.password !== data.cpassword) {
      setmsg("Password Is Not Match");
      console.log("Password Is Not Match");
      setopen(true);

     
    } 
    else if(data.gender==""){
      setmsg("Select the gender.");
      
      setopen(true); 
    }
    else {
      // console.log(data);

      axios.post(`${API}/userregistration`, data).then((res) => {
        setmsg(res.data);
        //console.log(res.data)
        setopen(true);
        if (res.data == "User Registered") {
          history("/");
        }
      });
    }
  };
  if (localStorage.getItem("user")) {
    return <Navigate to="/homepage" replace />;
  }
  const handleClick = () => {
    setopen(false);
  };
  return (
    <Container component="main" maxWidth="xs">
     
      <div className={classes.paper}>
        <img src={logo} style={{ width: 110 }} />

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={submit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="Username"
                name="username"
                variant="outlined"
                required
                inputProps={{ maxLength: 25, minLength: 5 }}
                value={data.username}
                onChange={change}
                fullWidth
                id="username"
                label="Username"
                
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={data.email}
                onChange={change}
                id="email"
                label="Email Address"
                name="email"
                helperText="Formet: example@yahoo.com"
                type="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={data.password}
                onChange={change}
                fullWidth
                name="password"
                label="Password"
                type="password"
                inputProps={{ maxLength: 25, minLength: 9 }}
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={data.cpassword}
                onChange={change}
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                inputProps={{ maxLength: 25, minLength: 9 }}
                autoComplete="current-password"
              />
            </Grid>

            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={data.gender}
                onChange={change}
              >
                <Grid container>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="women"
                      control={<Radio />}
                      label="Female"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <FormControlLabel
                      value="men"
                      control={<Radio />}
                      label="Male"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                to="/"
                variant="body2"
                style={{ color: "#0A5995", textDecoration: "none" }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClick}>
        {msg == "User Registered" ? (
          <MuiAlert severity="success" elevation={6} variant="filled">
            {msg}
          </MuiAlert>
        ) : (
          <MuiAlert severity="error" elevation={6} variant="filled">
            {msg}
          </MuiAlert>
        )}
      </Snackbar>
      <br/>
      <br/>
      <br/>
    </Container>
  );
}
