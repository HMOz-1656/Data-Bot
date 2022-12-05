// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Container, Grid,Button, Divider} from '@material-ui/core';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import { Link } from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//     Footer:{
//         background:"#222529!important",
//         fontSize: "1.3rem",
//     lineHeight: "24px",
//     },
//     midFooter:{
//         padding: "6.5rem 0 2.3rem",
//     },
//     widget:{
//         marginBottom: "3rem",
//     },
//     title_widget:{
//         color: "#fff",
//         fontSize: "1.2rem",
//         fontWeight: "600",
//         textTransform: "uppercase",
//         margin:"0 0 1.7rem",
//         lineHeight: "1.2",

//     },
//     contact_info:{
//         marginBottom: "3rem",
//         margin: 0,
//     padding: 0,
//     listStyle: "none",
//     },
//     li:{
//         position: "relative",
//     marginBottom: "1rem",
//     lineHeight: "1.4",
//     color: "#a8a8a8",
//     fontSize:"1rem",
//     cursor:"pointer",
//     },
//     contact_info_label:{
//         display: "block",
//     marginBottom: 0,
//     color: "#fff",
//     fontWeight: 400,
//     textTransform: "uppercase",
//     fontSize:"1rem",
//     },
//     social_icon:{
       
//     alignItems: "center",
//     justifyContact:"space-between",
//     },
//     icon:{
//         color:"white",
//         paddingLeft:"3px",
//         fontSize:"1.8rem",
//     },
//     fleft:{
//         color: "#777",
//     fontSize: "0.9rem",
//     lineHeight: "24px",
//     letterSpacing: ".065px",
//     },
//     footer_left:{
//         marginTop:"20px",
//       display:"flex",
//       justifyContent:"space-between",
//       alignItems:"center",
   
//     },
//     icon:{
//         padding:"5px",
       
//     },
//     icon_visa:{
      
//         padding:"2px",
//         height:"4vh",
//         backgroundColor: "#d6d3cc",
//         borderRadius:"20px"
     
    
     
     
      
//     }


// }))

// function Footer() {
//     const classes = useStyles();
//   return (
//     <>
      
//   <footer className={classes.Footer}>
//       <div className={classes.midFooter}>
        

//       <Container style={{marginTop:"10px"}}  >

// <Grid container spacing={2}   >


// <Grid item xs={12} md={6} lg={3}>
// <div className={classes.widget}>
//                        <h4 className={classes.title_widget}>Contact Info</h4>
//                        <ul className={classes.contact_info}>
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}>Address:</span>
//                                123 Street Name, City, England
//                            </li>
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}>Phone:</span>
//                                (123) 456 789
//                            </li>
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}>Email:</span>
//                                Example@gmail.com
//                            </li>
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}>Working Hours:</span>
//                                Mon - Sat/9:00AM - 7:00PM
//                            </li>
//                        </ul>

//                        <div className={classes.social_icon}>
//                            <FacebookIcon className={classes.icon} />
//                            <TwitterIcon className={classes.icon} />
//                            <InstagramIcon className={classes.icon} />

                           
//                        </div>

//                    </div>


// </Grid>


// <Grid  item xs={12} md={6} lg={3}>

//            <div className={classes.widget}>
//                        <h4 className={classes.title_widget}>Quick Links</h4>
//                        <ul className={classes.contact_info}>
//                            <Link style={{textDecoration:"none"}} to="/shop">
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}></span>
//                                Shop
//                            </li>
//                            </Link>
//                            <Link style={{textDecoration:"none"}} to="/men">
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}></span>
//                                Men
//                            </li>
//                            </Link>
//                            <Link style={{textDecoration:"none"}} to="/women">
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}></span>
//                               Women
//                            </li>
//                            </Link>
//                            <Link style={{textDecoration:"none"}} to="/about">
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}></span>
//                               About Us
//                            </li>
//                            </Link>
//                            <Link style={{textDecoration:"none"}} to="/about">
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}></span>
//                               My Account
//                            </li>
//                            </Link>
//                        </ul>


//                    </div>

// </Grid>

//                  <Grid item xs={12} md={6} lg={3}>

//                        <h4 className={classes.title_widget}>Popular Tags</h4>
                       
//                      <div style={{display:"flex"}}>
//                            <p   className={classes.li} >
                               
//                               Unsitched
//                            </p>
                      
                         
//                            <p style={{paddingLeft:"10px"}} className={classes.li}>
                               
//                                Sitched
//                            </p>
//                            </div>
                         
//                            <div style={{display:"flex"}}>
//                            <p  className={classes.li}>
                             
//                               Western
//                            </p>
                        
                       
//                            <p style={{paddingLeft:"10px"}} className={classes.li}>
                               
//                               Shoes
//                            </p>
//                            </div>
                          
                          
                         
                       


                   

// </Grid>
//          <Grid  item xs={12} md={6} lg={3}>

//            <div className={classes.widget}>
//                        <h4 className={classes.title_widget}>Subscribe newsletter</h4>
//                        <ul className={classes.contact_info}>
                          
//                            <li className={classes.li}>
//                                <span className={classes.contact_info_label}></span>
//                                Get all the latest information on events, sales and offers. Sign up for newsletter:
//                            </li>
//                        </ul>

//                        <input  style={{backgroundColor:"#777", color:"#eee",border:"1px solid #777",
//                        padding:"10px",borderRadius:"20px",width:"100%",outline:"none"
                    
//                     }} type="email" placeholder="Email"/>
//                     <Button style={{backgroundColor:"#08c",color:"white",marginTop:"20px",
//                      padding:"12px",borderRadius:"30px",width:"50%",
//                 }}>Subscribe</Button>


//                    </div>

// </Grid>







// </Grid>

// <Divider style={{background:"#eee"}} />


//                <div  className={classes.footer_left}>
//                    <p className={classes.fleft}>© DataBot 2022 All Rights Reserved</p>

                 
                  
        
//            <div style={{display:"flex"}}>
//                <div className={classes.icon}> 
//                    <img    className={classes.icon_visa} src="https://d-themes.com/react/porto/demo4/images/payments/payment-visa.svg" />
//                    </div>
//                    <div className={classes.icon}> 
//                    <img  className={classes.icon_visa} src="https://d-themes.com/react/porto/demo4/images/payments/payment-paypal.svg" />
//                    </div>
//                    <div className={classes.icon}> 
//                    <img   className={classes.icon_visa} src="https://d-themes.com/react/porto/demo4/images/payments/payment-stripe.png" />
//                    </div>
//                    <div className={classes.icon}> 
//                    <img    className={classes.icon_visa} src="https://d-themes.com/react/porto/demo4/images/payments/payment-verisign.svg" />
//                </div>
                      
  
//                 </div>
//                        </div>
  

// </Container>




               



               

               

          

//       </div>

//   </footer>
  


//     </>
//   )
// }

// export default Footer





import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid,Button, Divider} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    Footer:{
        background:"#222529!important",
        fontSize: "1.3rem",
    lineHeight: "24px",
    },
    fleft:{
        color: "#777",
    fontSize: "0.9rem",
    lineHeight: "24px",
    letterSpacing: ".065px",
    textAlign:"center"
    },
    footer_left:{
        marginTop:"20px",
        paddingLeft:"500px",
      display:"flex",
    },

}))

function Footer() {
    const classes = useStyles();
  return (
    <>
      
  <footer className={classes.Footer}>
      
               <div style={{paddingTop:"10px"}} className={classes.footer_left}>
                   <p className={classes.fleft}>© DataBot 2022 All Rights Reserved</p>

                 
                       </div>
  

  </footer>
  


    </>
  )
}

export default Footer