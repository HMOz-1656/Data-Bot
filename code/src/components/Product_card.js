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
import API from "./api"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


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
      background: "#0A5995",
    color: "white",
    textTransform:"none",
    paddingLeft:"15px",
    paddingRight:"15px",
    "&:hover": {
      background: "black",
      color: "#fff",
    },
    },
  }))

function Product_card() {
  
    const classes = useStyles();
    const[ProductData,SetProductData] = useState([]);
    const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));

    console.log(loginuser)
    useEffect(() =>{
      fetch(`${API}/getproducts`)
      .then((response) => response.json())
      .then((data) => {
      // console.log(data);

  
       const products = data.map((i) =>(
       

        {
          id:i._id,
          category:i.category,
           title:i.title,
           description:i.description,
           price:i.price,
           img:i.image,
           gender:i.gender,
           brand:i.brand
           
        }));

        
        
        // console.log(products.filter(product =>product.gender=="women"));
        //SetProductData(products);

        SetProductData(products.filter(product =>product.gender==loginuser.gender));

       // console.log(products.filter(product =>product.gender==loginuser.gender))
      })
    },[]);
  








  return (
    <>

<Container style={{marginTop:"20px"}}>
<div  className={classes.root1}>
  <Grid container  >
     
     
  <Hidden only={["xs","sm"]}>
     
        <Grid item xs={12} md={4} lg={4}>
            <Divider className={classes.line1} />
            </Grid>
            </Hidden>

            <Grid item xs={12} md={4} lg={4}>
            <h4 className={classes.heading}>
               Top Selling Products
            </h4>
            </Grid>
            <Hidden only={["xs","sm"]}>
            <Grid item xs={12} md={4} lg={4}>
            <Divider className={classes.line2} />
            </Grid>
          </Hidden>
       
    

        </Grid>
        </div>

        <Product_slider />
    </Container>



<Container>
<div  className={classes.root1}>
  <Grid container  >
     
     
  <Hidden only={["xs","sm"]}>
     
        <Grid item xs={12} md={4} lg={4}>
            <Divider className={classes.line1} />
            </Grid>
            </Hidden>

            <Grid item xs={12} md={4} lg={4}>
            <h4 className={classes.heading}>
                Ready To Wear
            </h4>
            </Grid>
            <Hidden only={["xs","sm"]}>
            <Grid item xs={12} md={4} lg={4}>
            <Divider className={classes.line2} />
            </Grid>
          </Hidden>
       
    

        </Grid>
        </div>
    </Container> 

    <div> 
       
         <Container style={{padding:"40px"}}>
    <Grid container spacing={2}>


   {
     ProductData.filter((i)=>i.category=="stitched").slice(10,18).map((i) => 
   
     (
      
      <Grid item xs={6} md={6} lg={3}>
      <Link style={{textDecoration:"none"}} to={`/products/${i.id}`}>
      <Card variant="outlined" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={i.img}
            title=  {i.title}
          />
          <CardContent>
            <Typography className={classes.cat} variant="body1"  color="textSecondary"  component="p">
            {i.category}
            </Typography>
            <Typography className={classes.title} variant="body1" component="h3">
            {i.title}
            </Typography>
            {/* <Typography className={classes.title} variant="body1" component="h3">
            {i.description}
            </Typography> */}
            <Typography className={classes.price} variant="h6" component="h2">
            {"PKR "+i.price} 
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

     ))
   }




        
    </Grid>



   
    </Container>
        
      </div>

    

    </>
  )
}

export default Product_card