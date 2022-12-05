import React from 'react';
import Header1 from './Header1';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Button } from '@material-ui/core';
import Footer from "../Footer";
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
  
    h1:{
        color: "#1e3636",
        fontSize: "2rem",
        fontWeight: 900,
        marginBottom: "2.4rem",
        fontFamily: "Open Sans,sans-serif",
        letterSpacing: 0,
        paddingTop:"6rem",

    },
    span:{
        display: "block",
    color:"#1e3636",
    fontSize: "0.4em",
    fontWeight: "700",
    lineHeight: 1.2,
    fontFamily: "Poppins,sans-serif",
    letterSpacing: 0,
},
h2:{
     color: "#21293c",
    fontSize: "1.9rem",
    fontWeight:"bold",
},
p:{
    marginBottom: "2rem",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "34px",
}
    

}))

function About() {
    const classes = useStyles();
  return (
   <>
   <Header1 />
   <div style={{background:"url('https://d-themes.com/react/porto/demo4/images/page-header-bg.jpg')",width:"100%",height:"30vh", backgroundRepeat: "no-repeat", }} >
<Container>
      <h1 className={classes.h1}>
          <span className={classes.span}>ABOUT US</span>
          DATABOT
      </h1>
      </Container>

      <Container style={{marginTop:"100px"}}>
          
          <p className={classes.p}>This software provides the details of the product that is search by the user/customer by one click. The software will gather the details of the specific product that the user need to buy in his range from different stores.</p>
          <h2 className={classes.h2}>Developers</h2>
          <p className={classes.p}>
              <a>Muhammad Sanan</a><br/>
              Mustafa Haider<br/>
              Hamza Ayaz</p>
              <br/>
              <br/>
              <br/>
      </Container>
   </div>
  <div style={{marginTop:"300px"}}>
      {/* <Hidden only={["xs","sm"]}>
      <Footer/>
      </Hidden> */}
  
  </div>
   </>
  )
}

export default About