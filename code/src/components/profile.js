import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Hidden} from '@material-ui/core';
import Header1 from './Header1'
import MuiAlert from "@material-ui/lab/Alert";
import {useNavigate} from "react-router-dom"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import API from "./api"

import {

  Snackbar,
} from "@material-ui/core";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Userupdate() {
  const classes = useStyles();
  const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));

  const [password, showpassword] = useState(false);
const [data, setuserdetails] = useState({
  email:loginuser.email,
  password:loginuser.password,
  cpassword:"",
  username:loginuser.username,
})
const [msg, setmsg] = useState(null);
const [open, setopen] = useState(false);
const handleClick = () => {
  setopen(false);
};
const history = useNavigate();
const updatedata=(e)=>{
  setuserdetails({
    ...data,[e.target.name]:e.target.value
  })
}
  const showpasswordfunc=()=>{
    showpassword(password=>!password);
  
  }
  const handleClickk = () => {
    setopen(false);
  };

  const button=()=>{

    if (data.password !== data.cpassword) {
      setmsg("Password Is Not Match");
      console.log("Password Is Not Match");
      setopen(true);
    }
    else {
      // console.log(data);

      axios.post(`${API}/updateuser`, data).then((res) => {
        setmsg(res.data);
        //console.log(res.data)
        setopen(true);
        if (res.data == "user updated") {
          localStorage.removeItem('user')
          history("/");
        }
      });
    }
   
   
  }
  
  return (
    <>
    <Header1 />
    <Container component="main" maxWidth="xs">
      
      <div className={classes.paper}>
         <AccountCircleIcon/>

        <Typography component="h1" variant="h5">
         Profile
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            onChange={updatedata}
            value={data.username}
            autoComplete="username"
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={data.email}
            fullWidth
            onChange={updatedata}
            disabled
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            
          />
          <TextField
            variant="outlined"
            onChange={updatedata}
            margin="normal"
            required
            fullWidth
            name="password"
            value={data.password}
            label="Password"
            type={password==false?"password":"text"}
            id="password"
           
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={data.cpassword}
            name="cpassword"
            label="Confirm Password"
            onChange={updatedata}
            type={password==false?"password":"text"}
            id="cpassword"
           
            autoComplete="current-password"
          />
           <FormControlLabel
            control={<Checkbox onChange={showpasswordfunc} value="remember" color="primary" />}
            label="Show Password"
          />
          <Button
            type="button"
            fullWidth
            onClick={button}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update Profile
          </Button>
        
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClickk}>
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
    </Container>
    </>
  );
}