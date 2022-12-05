import React,{useEffect,useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Product_slider.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid,Hidden,Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import API from "./api"




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
        padding:"10px",
        
       
      },
      media: {
       width:"100%",
       height:"50vh",
       objectFit:"contain",
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
      color: "#fff",
      textTransform:"none",
      paddingLeft:"15px",
      paddingRight:"15px",
      "&:hover": {
        background: "black",
        color: "#fff",
      },
      },
    }))
  

function Product_slider() {
    const classes = useStyles();
    const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));
    const[ProductData,SetProductData] = useState([]);
   
    useEffect(() =>{
      fetch(`${API}/getproducts`)
      .then((response) => response.json())
      .then((data) => {
      // console.log(data);

  
       const products = data.map((i) =>(
       

        {
          category:i.category,
           title:i.title,
           description:i.description,
           price:i.price,
           gender:i.gender,
           id:i._id,
           img:i.image,
           brand:i.brand,
           
        }));
        // console.log(products);
       // SetProductData(products);
        SetProductData(products.filter(product =>product.gender==loginuser.gender))



      //  console.log(products.filter(product =>product.gender==loginuser.gender))
      })
    },[]);
  


const PreviousBtn = (props)  => {
    const {className,onClick} = props;
    return(
        <div className={className} onClick={onClick}>
       <ArrowBackIosIcon style={{color:"black"}} />
        </div>

    )
}

const NextBtn  = (props)  => {
    const {className,onClick} = props;
    return(
        <div className={className} onClick={onClick} >
        <ArrowForwardIosIcon style={{color:"black"}} />
        </div>
 
    )
}
 
const settings = {
    autoplay:true ,autoplaySpeed:3000, dots:false,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
    slidesToShow:4,
    slidesToScroll:2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}

  return (
      <>
      <div style={{margin:"30px"}}>
     <Slider {...settings}>
    
     

{
     ProductData.filter((i)=>i.category=="stitched").slice(1,10).map((i) => (
         <div>
                 <Link style={{textDecoration:"none"}} to={`/products/${i.id}`}>
          <Card variant="outlined" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={i.img} 
            title=  {i.title} /> 
             </CardActionArea>
             <CardContent>
            <Typography className={classes.cat} variant="body1"  color="textSecondary"  component="p">
            {i.category}
            </Typography>
            <Typography className={classes.title} variant="body1" component="h3">
            {i.title}
            </Typography>
            {/* <Typography className={classes.title} variant="body1" component="h3">
            {i.description.slice(0,40)+"..."}
            </Typography> */}
            <Typography className={classes.price} variant="h6" component="h2">
            {"PKR "+i.price} 
            </Typography>
           
          </CardContent>
          <CardActions style={{justifyContent:"center",alignItems:"center",textAlign:'center'}}>
          <Button  className={classes.btn} size="medium" color="primary">
           Buy Now
          </Button>
         
        </CardActions>

      </Card>
      </Link>
      </div>

     ))
   }
         
         
     </Slider>
     </div>
      </>
  
  )
}

export default Product_slider