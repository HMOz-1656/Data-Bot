import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid,Hidden,Divider } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import Product_slider from './Product_slider';
import CircularProgress from '@material-ui/core/CircularProgress';
import API from "./api"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Header1 from './Header1';


const useStyles = makeStyles((theme) => ({



    root1:{
  
      alignItems:"center",
      justifyContent:"center",
      
        },
        heading:{
            textAlign:"center",
            alignItems:"center",
            fontSize:"30px",
            fontFamily:"font-family: Poppins,sans-serif",
            fontWeight:700,
            textTransform:"uppercase",
            [theme.breakpoints.down('md')]: {
             marginTop:"30px",
       
          
               },
        },
         line1:{
          marginTop:"15px",
          fontWeight:"bold",
          backgroundColor:"grey",
       
          
         },
      
         line2:{
          marginTop:"15px",
          backgroundColor:"grey",
         },
      root: {
        maxWidth: 345,
        textAlign:"center",
        alignItems:"center",
        border:"none",
        "&:hover": {
          border:"1px solid #eee",
          boxShadow:" 0px 15px 15px 2px lightGrey ",
          background:"offWhite",
        },
       
      },
      media: {
        height: "40vh",
      },
      cat:{
          texAlign: "center",
      fontWeight: 400,
      fontSize: "11px",
      fontFamily: "Open Sans,sans-serif",
      lineHeight: 1.7,
      opacity: 0.8,
      textTransform: "uppercase",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      },
      title:{
          maxWidth: "100%",
          fontWeight: 400,
          fontSize: "1rem",
          fontSamily: "Poppins,sans-serif",
          lineHeight: 1.35,
          letterSpacing: "0.005em",
          marginBottom:"0.4rem",
          textOverflow: "ellipsis",
          overflow: "hidden",
      },
      price:{
          fontWeight: 600,
          fontSize: "1.2rem",
          fontSamily: "Poppins,sans-serif",
          lineHeight: 1.35,
          letterSpacing: "0.005em",
          marginBottom:"0.4rem",
          textOverflow: "ellipsis",
          overflow: "hidden",
  
      },
      btn:{
        fontSamily: "Poppins,sans-serif",
        lineHeight: 1.35,
        letterSpacing: "0.005em",
        marginBottom:"0.4rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        background: "#f4f4f4",
      color: "#6f6e6b",
      textTransform:"none",
      paddingLeft:"15px",
      paddingRight:"15px",
      "&:hover": {
        background: "black",
        color: "#fff",
      },
      },
    }))

function Western() {
    const classes = useStyles();
    const[ProductData,SetProductData] = useState([]);
    const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));
    const [loading, setloading] = useState(true)

    useEffect(() =>{
        fetch(`${API}/getproducts`)
        .then((response) => response.json())
        .then((data) => {
         console.log(data);
         setloading(false)
         SetProductData(data.filter(product =>product.gender==loginuser.gender && product.category=="western"));

    console.log(ProductData);


        


        })
    },[]);
  
  
  return (
    <>
    <Header1 />
    <h3 style={{textAlign:"center",fontWeight:"bold",color:"#0A5995",marginTop:"30px"}}>WESTERN</h3>
    <Container style={{padding:"40px"}}>

    {loading==true?<CircularProgress />:
    
    <Grid container spacing={2}>

 {
     ProductData.filter((i)=>i.price>0).map((i) => (
         <>
        
         <Grid item xs={6} md={6} lg={3}>
        <Link style={{textDecoration:"none"}} to={`/products/${i._id}`}>
        <Card variant="outlined" className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={i.image}
              title= {i.title}
            />
            <CardContent>
              <Typography className={classes.cat} variant="body1"  color="textSecondary"  component="p">
              {i.category}
              </Typography>
              <Typography className={classes.title} variant="body1" component="h3">
              {i.title}
              </Typography>
              <Typography className={classes.title} variant="body1" component="h3">
              {i.description}
              </Typography>
              <Typography className={classes.price} variant="h6" component="h2">
              {"PKR "+i.price} 
              </Typography>
              <Typography className={classes.cat} variant="body1"  color="textSecondary"  component="p">
              {i.brand}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{justifyContent:"center",alignItems:"center",textAlign:'center'}}>
            <Button  className={classes.btn} size="medium" color="primary">
             Buy Now
            </Button>
           
          </CardActions>
        </Card>
        </Link>
       
        </Grid>
     </>
     ))
 }
       
       </Grid>


}
   
</Container>


    </>
  )
}

export default Western