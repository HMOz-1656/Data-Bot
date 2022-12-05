import React,{useState,createContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid,Hidden,Container, Divider,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav } from "react-bootstrap";
import {useNavigate,Link} from "react-router-dom"

import SearchIcon from '@material-ui/icons/Search';
import Sidebar from './Sidebar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },

  Apbar:{
    backgroundColor:"white",
    // marginBottom:"100px",
    

  },
  div:{
    justifyContent:"space-between",
    background:"red",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  img:{
    width:"70px",
    
  },
  input :{
    backgroundColor:"#f4f4f4;",
    padding:"8px", 
    width:"450px",
    border:"1px solid white",
    outline:'none',
    borderRadius:" 50px",
    borderTopRightRadius:"0px",
    borderBottomRightRadius:"0px",
    marginLeft:50,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width:"150px",
      marginLeft:0,
     },
    
  },
  button:{
   padding:"7px", 
   paddingBottom:"9px",
    border:"1px solid white",
    backgroundColor:"#f4f4f4;",
    borderRadius:0,
    textTransform:"lowercase",
    color:"#999",
  },
  grid1:{

  },
  button1 : {
    backgroundColor:"#f4f4f4;",
    padding:"7px",
    border:"1px solid white",
    cursor:"pointer",
    borderTopRightRadius:"20px",
    borderBottomRightRadius:"20px",
  },
  header_content:{
    display:"flex",
    marginRight:"28px",
    marginLeft:"1.2rem",
    paddingLeft: "1.5rem!important",
    paddingRight: "1.5rem!important",
    alignItems:"center",
  
    [theme.breakpoints.down('md')]: {
      marginLeft:"0rem",
      paddingLeft: "6rem!important",
      paddingRight: "1rem!important",
       },
  },
  header_content_img:{
    display:"block",
    marginRight:"0.7rem",
    paddingBottom:" 0.25rem!important",
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.down('md')]: {
      width:"20%",
      marginLeft:"0px",
     },
   
   

  },
  h6:{
    display:"flex",
    flexDirection:"column",
    marginTop: "1px",
    marginLeft: "1px",
    margin: 0,
    fontSize: "1.1rem",
    lineHeight:" 1.3",
    color:" #777",
    [theme.breakpoints.down('md')]: {
    fontSize:"11px",
     },
  },
  icon:{
    marginRight: "2.2rem",
    fontSize: "1.9rem",
    [theme.breakpoints.down('md')]: {
      fontSize:"1.5rem",
      marginLeft:"10px",
       },
   
  },
  navbar:{
    backgroundColor:"white",
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]: {
     display:"none",
    },
   
    
   
  },
  ul:{
    display:"flex",
    listStyle:"none",
     flex:1,
     textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: "bold",
    lineHeight: 1.5,
    margin: "0px",
    padding: "0px",
  },
  li:{
    marginRight:" 20px",
    float: "left",
    position: "relative",
    cursor:"pointer",
    paddingTop:"10px",
    borderTop:"2px solid white",
    "&:hover": {
     borderTop:"2px solid #08c",
     color:"#08c",
    
     
    },
  
      
  }
  
}))



function Header1() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  let [search, setsearch]= useState("");


  let chnagesearch=(e)=>{
    setsearch(e.target.value)
  }
  const history = useNavigate();

  let searchpageresult=(e)=>{
      e.preventDefault()
    if(search.length==""){
      history("/search?No Product Find");
    }
    else{
      
      history(`/search?${search}`);
      
    }
    
  }
 
  var Context=createContext()

  var signout=()=>{
    localStorage.removeItem('user')
    history("/")
  }
  return (
    <React.Fragment>


    {/* ================  HEADER SECTION =============== */}

<div >
<Divider />
<Container   disableGutters maxWidth='xl'  >

      <AppBar style={{position:"static"}} elevation={0} className={classes.Apbar} >
        <Toolbar>
      

     <Link to="/homepage">
     <img src={process.env.PUBLIC_URL + '/logo.png'} width="130px" className={classes.img}/>
     </Link>      
                 


               
        
        <div style={{display:"flex", padding:"10px",flex: 1,paddingRight:"auto"}}>
          <form>
          <input required value={search} onChange={chnagesearch} type="text"  placeholder="search"  className={classes.input} />
           
   <button onClick={searchpageresult} className={classes.button1}>
     
   <SearchIcon />
     </button>
     </form>

     
             </div>
            

             <Hidden  className={classes.icon} only={["xs","sm"]}>
            
             <div className={classes.header_content}>
               <img  src={process.env.PUBLIC_URL + '/phone.png'} width="30" height="30" className={classes.header_content_img} />
               <h6 className={classes.h6}>
                 <span style={{fontSize:"12px"}}>Call Us Now</span>
                 <a style={{textDecoration:"none",color:"black"}} href="tel:+923150969602">+923150969602</a>
               </h6>
             
               </div>
               
               <Link to="/profile" style={{textDecoration:"none",color:"#0A5995"}} >
               <PersonOutlineIcon className={classes.icon}  />
             
             </Link>
             <a onClick={signout} style={{textDecoration:"none",color:"#0A5995"}} >
             <ExitToAppIcon  className={classes.icon} />
           
             </a>
    
            </Hidden>
             
           
            <Hidden   only={["md","lg","xl"]}>
         
             <Sidebar  />
         
            

             </Hidden>
            

            
           
           
        </Toolbar>
        
      </AppBar>
      </Container>
    </div>

       {/* ================  NAVBAR SECTION =============== */}

    <Navbar  sticky="top"   className={classes.navbar}   >
    <Container>
    <Divider />
    <Divider />
    <Nav  className={classes.ul} >
    
      <Nav.Link className={classes.li} > <Link style={{textDecoration:"none" ,color:"inherit"}} to="/homepage">home</Link></Nav.Link> 
      <Nav.Link  className={classes.li} ><Link style={{textDecoration:"none" ,color:"inherit"}} to="/shop">Shop</Link></Nav.Link>
      <Nav.Link className={classes.li} ><Link style={{textDecoration:"none" ,color:"inherit"}} to="/men">Men</Link></Nav.Link>
      <Nav.Link className={classes.li} ><Link style={{textDecoration:"none" ,color:"inherit"}} to="/women">Women</Link></Nav.Link>
      <Nav.Link className={classes.li} ><Link style={{textDecoration:"none" ,color:"inherit"}} to="/about">About</Link></Nav.Link>
     

    </Nav>
    </Container>
  </Navbar>


 
    
   


    </React.Fragment>
  )
}

export default Header1