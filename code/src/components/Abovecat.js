import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        alignItems:"center",
        borderRight:"2px solid #eee ",
        justifyContent: "center",
        width:"100%",
        color: "#222529",
        marginTop:"30px",
        marginBottom:"30px",
        [theme.breakpoints.down('md')]: {
            margin:"0px",
            marginTop:"20px",
            borderBottom:"1px solid #eee ",
            padding:"10px",
            borderRight:"none ",
          
           },
          
    },
    div:{
        marginTop: "-1px",
    marginLeft: "1px",
    },
    icon:{
        fontSize: "10px",
        marginRight:"1.5rem",
        width: "auto",
        textAlign:"center",
       
        color:"black",
         
    },
    h4:{
        marginBottom: "3px",
        lineHeight: "14px",
        fontSize:"0.9rem",
    fontWeight: 700,
    textTransform: "uppercase",
    fontFamily: "Poppins,sans-serif",
    },
    p:{
        lineHeight: "17px",
    letterSpacing: 0,
    marginBottom: 0,
    fontSize: "0.8rem",
    color: "#777!important",
    marginTop: 0,
    }
  
}))

const items = [{
    icon :<LocalShippingIcon />,
    title:"Shipping & Return",
    des:"Free shipping on all orders over $99.",


},
{
    icon :<MonetizationOnIcon />,
    title:"MONEY BACK GUARANTEE",
    des:"100% money back guarantee",

},
{
    icon :<EventAvailableIcon />,
    title:"ONLINE SUPPORT 24/7",
    des:"24/7 Online support available",

},


]

function Abovecat() {

    const classes = useStyles();

  return (
   <>
   <Grid container >
       
    {items.map((i) => (
        
        <Grid item xs={12} md={4} lg={4} >
            <Container>
            <div  className={classes.root} >
            <i className={classes.icon}>{i.icon}</i>
              <div className={classes.div} >
                  <h4 className={classes.h4}>{i.title}</h4>
                  <p className={classes.p}>{i.des}</p>
              </div>
       
            </div>
       
          </Container>
          </Grid>
        
    ))}


  
 
   </Grid>

   </>
  )
}

export default Abovecat