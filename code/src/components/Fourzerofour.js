import React from 'react';
import Header1 from "./Header1";
import Footer from "../Footer";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  h1:{
    textAlign:"center",
    fontSize:"200px",
    paddingTop:"60px",
    color:"#0A5995",
    fontWeight:"300",
  },
  p:{
    textAlign:"center",
    fontSize:"25px",
    fontWeight:"500",


  }
  
}))

function Fourzerofour() {
  const classes = useStyles()
  return (
    <>

   <Header1 /> 

   <Container>
     <div>
     <h1 className={classes.h1} >404</h1>
     <p className={classes.p}>Page is not Found</p>

     </div>

   </Container>

   {/* <Footer /> */}
    </>
  )
}

export default Fourzerofour