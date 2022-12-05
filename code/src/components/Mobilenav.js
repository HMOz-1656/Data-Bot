import React,{useContext} from 'react';
import {Context} from "../App"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import Room from '@material-ui/icons/Room';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex:1,
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  
  //console.log(user)


  const history=useNavigate();
var logoutt=()=>{
  localStorage.removeItem("user");
    history("/")
}
if(localStorage.getItem("user")){
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/homepage" label="Home" icon={<Home/>} />
      <BottomNavigationAction label="Shop" component={Link} to="/shop" icon={<ShoppingCartIcon/>} />
      <BottomNavigationAction label="Profile" component={Link} to="/profile" icon={<AccountCircleIcon />} />

      <BottomNavigationAction onClick={logoutt} label="Logout" icon={<ExitToApp />} />
      
    </BottomNavigation>
  );
}
else{
  return null
}

}
