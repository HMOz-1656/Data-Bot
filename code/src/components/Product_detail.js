import { Grid ,Card,CardMedia, Typography, Divider,Container,Button,IconButton,CardActionArea,CardContent,CardActions,Link} from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Hidden } from '@material-ui/core';
import API from "./api"
import {
    BrowserRouter as Router,Link as Linknew,
    useParams
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header1 from './Header1';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Footer from "../Footer"


const useStyles = makeStyles((theme) => ({
  
    root: {
       maxWidth: 570,
      },
      
      media:{
          height:"75vh",
      },
      row:{
         
      },
      h1:{
        color: "#222529",
        fontSize: "2.4rem",
        fontWeight: 600,
        letterSpacing: "0rem",
        [theme.breakpoints.down('md')]: {
          fontSize: "1.8rem",
          marginTop:"10px",
        },
    
      },
      Breadcrumbs: {
        marginTop:"10px",
        '& > * + *': {
          marginTop: theme.spacing(2),
          color:"#777",

        },
      },
      link:{
        textDecoration:"none",
        color:"#777",
        fontSize: "12px",
        lineHeight: "24px",
        textTransform: "uppercase",
        [theme.breakpoints.down('md')]: {
          fontSize: "10px",
        },
      },
      Divider:{
        width:"20%",
        background:"#e7e7e7",
        border:"1px solid ",
        marginTop:"15px",
      },
      body1:{
        marginTop:"25px",
        color: "#222529",
    fontSize: "1.5rem",
    fontWeight:600,
    verticalAlign: "middle",
    lineHeight: ".8",
    [theme.breakpoints.down('md')]: {
      fontSize:"1.3rem",
    },
      },
      des:{
        color:"#777",
        marginTop:"20px",
        fontSize: "1.2rem",
        [theme.breakpoints.down('md')]: {
          fontSize:"1rem",
        },

      },
      span:{
        fontSize:"15px",
        fontWeight:700,
        paddingLeft:"10px",
        textTransform:"uppercase",
      },
      div:{
        display:"flex",
        marginTop:"30px",
      },
      cataaa:{
        fontSize:"15px",
        color:"#777",
        textTransform:"uppercase",
      },
      Divider1:{
        marginTop:"20px",
      },
      btn:{
        marginTop:"20px",
        background:"black",
        color:"white",
        width:"30%",
        padding:"9px",
        
      },
      icon:{
       color:"black",

      },
      stock:{
        backgroundColor:"green",
        fontSize:"12px",
        color:"white",
        width:"15%",
        textAlign:"center",
        borderRadius:"12px",
        padding:"4px",
        [theme.breakpoints.down('md')]: {
          fontSize:"10px",
        },
      },
      div1:{
        display:"flex",
        marginTop:"10px",
      },
      relpro:{
        marginTop:"50px",
        fontSize:"1.2rem",
        fontWeight:700,
        textTransform:"uppercase",
      },
      root1: {
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
      media1: {
        height: "40vh",
      },
      cat1:{
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
    title1:{
        maxWidth: "100%",
        fontWeight: 400,
        fontSize: "1rem",
        fontSamily: "Poppins,sans-serif",
        lineHeight: 1.35,
        letterSpacing: "0.005em",
        marginBottom:"0.4rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
          fontSize:"12px",
        },
    },
    price1:{
        fontWeight: 600,
        fontSize: "1.2rem",
        fontSamily: "Poppins,sans-serif",
        lineHeight: 1.35,
        letterSpacing: "0.005em",
        marginBottom:"0.4rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
          fontSize:"14px",
        },

    },
    btn1:{
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


function Product_detail() {
  const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));
    const classes = useStyles();
    const proid = useParams();
    const[ProductData,SetProductData] = useState([]);
    const [filterdata, Setfilterdata] = useState([]);
   
   

 
    useEffect( () =>{
       fetch(`${API}/getproducts`)
        .then((response) => response.json())
        .then((data) => {
         //console.log(data);



          SetProductData(data.filter(x => x._id == proid.id));
           Setfilterdata(data);
           console.log(filterdata);
        
       
    
          
        
   
    
         

        
        })
      },[proid]);
    

    var apidata=filterdata.filter(x1 => x1.brand == ProductData[0].brand && x1.category==ProductData[0].category )
    .filter(x1 => x1.gender == ProductData[0].gender)
    // console.log(apidata.length)
var arr=apidata.length-5;
var randomdata=Math.floor(Math.random()*arr)
//console.log(randomdata)

    console.log(apidata)
  return (
    <>
    <Header1 />
    <Divider  />
    <Divider />
    
    {
     ProductData.map((i) => 
   
     (
       <>

      <Container>
      <div className={classes.Breadcrumbs}>
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link to="/shop"  className={classes.link} >
          {i.category}
        </Link>
        <Typography className={classes.link} color="textPrimary">{i.title}</Typography>
      </Breadcrumbs>
      </div>
    </Container>


    <div className={classes.row}>
     <Container >
         <Grid container style={{marginTop:"15px"}}>

             <Grid xs={12} md={6} lg={6}>
             <Card className={classes.root}>

        <CardMedia 
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={i.image}
          title={i.title}
        />
        
    </Card>
        

             </Grid>
             <Grid xs={12} md={6} lg={6}>
                 <div>
                <Typography  varient="p" className={classes.h1}>{i.title}</Typography>
                {/* <Typography  varient="body1" className={classes.stock}>{i.availability}</Typography> */}
                <Divider className={classes.Divider} />

                 <Typography  varient="body1" className={classes.body1}>{"PKR "+i.price}</Typography>
                 <Typography  varient="body1" className={classes.des}>{i.description}</Typography>
                 <div className={classes.div}> 
                 <Typography className={classes.cataaa}>Catagory :</Typography>
                 <Typography className={classes.span}>{i.category}</Typography>
                 </div>
                 <div className={classes.div1}> 
                 <Typography className={classes.cataaa}>Brand :</Typography>
                 <Typography className={classes.span}>{i.brand}</Typography>
                 </div>
                 <div className={classes.Divider1}>
                 <Divider  />
                 <Divider />
                 </div>
<Link  style={{textDecoration:"none"}} href={i.url} target="_blank" >
                 <Button className={classes.btn} variant="contained">Buy Now</Button>
                 </Link>
                 <div className={classes.Divider1}>
                 <Divider  />
                 <Divider />
                 </div>


                </div>

             </Grid>

      

         </Grid>
     </Container>

     <Container>
       <div style={{marginTop:"20px"}}>
         <Typography className={classes.relpro} variant="p">Related Products</Typography>

      
         
         <div>
                 <Divider  />
                 <Divider />
                 </div>
                 <Container style={{padding:"40px"}}>
    <Grid container spacing={2}>

     {
     apidata.slice(randomdata,randomdata+4).map((i) => (

         <>
       <Grid item xs={6} md={6} lg={3}>
      <Linknew onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}} style={{textDecoration:"none"}} to={`/products/${i._id}`}>
      <Card variant="outlined" className={classes.root1}>
        <CardActionArea>
          <CardMedia
            className={classes.media1}
            image={i.image}
            title={i.title}
          />
          <CardContent>
            <Typography className={classes.cat1} variant="body1"  color="textSecondary"  component="p">
            {i.category}
            </Typography>
            <Typography className={classes.title1} variant="body1" component="h3">
            {i.title}
            </Typography>
            <Typography className={classes.title1} variant="body1" component="h3">
            {i.description.slice(0,100)+"...."}
            </Typography>
            <Typography className={classes.price1} variant="h6" component="h2">
            {"PKR "+i.price} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent:"center",alignItems:"center",textAlign:'center'}}>
          <Button  className={classes.btn1} size="medium" color="primary">
           Buy Now
          </Button>
         
        </CardActions>
      </Card>
      </Linknew>
     
      
      </Grid>
         </>
       ))
     }
  </Grid>



   
</Container>

       </div>
     </Container>
     </div>
     </>
     ))
   }

  <br/>
  <br/>
  

{/* <Hidden only={["sm","xs"]}>
  <Footer/>
  </Hidden> */}
    </>
  )
}

export default Product_detail