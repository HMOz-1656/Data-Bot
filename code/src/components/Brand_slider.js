import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Product_slider.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';


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
   height:"60px",
   
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
  

function Brand_slider() {
    const classes = useStyles();

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
    autoplay:true ,autoplaySpeed:2000, dots:false,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
    slidesToShow:6,
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
   
const imgs = [
    {
    img:"https://www.alkaramstudio.com/static/version1648720057/frontend/Ecom/Alkaram/en_US/images/logo.svg ",
},
{
 img:"https://cdn.shopify.com/s/files/1/1592/0041/files/SAPPHIRE_LETTERING_240x.png?v=1612336278",
},
 {
     img:"https://cdn.edenrobe.com/media/logo/stores/1/logo.jpeg",
 },
 {
     img:"https://pk.khaadi.com/media/logo/stores/24/201x53-logo.png",
 },
 {
     img:"https://www.sanasafinaz.com/static/version1649116443/frontend/RLTSquare/SanaSafinaz/en_US/images/logo.png",
 },
 {
     img:"https://cdn.shopify.com/s/files/1/0477/5614/8892/files/So_kamal_Logo_4631dcfc-4b79-485a-8aa8-d39184413da5_360x.png?v=1635767461",
 },
 {
     img:"https://cdn.shopify.com/s/files/1/0464/1731/3955/files/Bonanza_Logo_500x@2x.png?v=1627287611",
 },
 {
     img:"https://cdn.shopify.com/s/files/1/0202/5884/8822/files/Breakout_95x.png?v=1582195698",
 },
 {
     img:"https://cdn.shopify.com/s/files/1/2290/7887/files/oft.svg?19939",
 },
 {
     img:"https://cdn.shopify.com/s/files/1/2466/2147/files/Logo_9f1021ba-4f93-40d3-9466-3373e4b05c82.png?v=1646235461",
 },
 {
     img:"https://cdn.shopify.com/s/files/1/0268/9715/4090/files/Cougar_Logo_800x.png?v=1639120857",
 }

]

  return (
    <>
    <Container>
        <Divider style={{marginTop:"50px",background:"grey"}} />
        </Container>   
      <div style={{margin:"30px"}}>
     <Slider {...settings}>
    
     
{
    imgs.map((i) => (
        <div style={{justifyContent:"space-between"}}>
        <img style={{width:"100%",height:"60px",padding:"14px"}} src={i.img} />
           
    </div>
    ))
}
    
     </Slider>
     </div>
      
      </>
  
   
  )
}

export default Brand_slider