import React,{useEffect,useState} from 'react'
import Header1 from "./Header1";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { Grid,Hidden,Divider } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import API from "./api"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import axios from "axios"


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




function Searchpage() {
  const [loading, setloading] = useState(true)
  const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));
  console.log(loginuser)
    const classes = useStyles();
    let { id } = useParams();
const [product, setproduct] = useState([])


useEffect( async () => {
     await axios.get(`${API}/getproducts`)
    .then((data)=>{

      var dataa=data.data
               setloading(false)
        console.log(data.data)

        

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  var dataaaa=capitalizeFirstLetter(window.location.search.slice(1).replace(/%20/g," "));

  
   var b= dataa.slice(0,4500).filter(i=>i.title.includes(dataaaa))
   setproduct(b);
    console.log(b)
    })
},[window.location.search.slice(1)])


 
if(product.length==0){

return(
  <>
  <Header1/>
<h3 style={{margin:"30px 10px 10px 50px"}}>Search Results : {window.location.search.slice(1).replace(/%20/g," ")}</h3>
{loading==true?<CircularProgress style={{margin:"30px 10px 10px 50px"}} />:
<h3 style={{margin:"30px 10px 10px 50px"}}> No Results</h3>}
  
  </>
)
}
else{
  return (
      <>
<Header1/>
<h3 style={{margin:"30px 10px 10px 50px"}}>Search Results : {window.location.search.slice(1).replace(/%20/g," ")}</h3>

<div> 
       
         <Container style={{padding:"40px"}}>
    <Grid container spacing={2}>
      
    {
     product.filter((i)=>i.price>0).filter((i)=>i.gender==loginuser.gender).map((product1) => 
   (
      <Grid item xs={6} md={6} lg={3}>
   <Link style={{textDecoration:"none"}} to={`/products/${product1._id}`}>
      <Card variant="outlined" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product1.image}
            title={product1.title}
          />
          <CardContent>
            <Typography className={classes.cat} variant="body1"  color="textSecondary"  component="p">
           {product1.category}
            </Typography>
            <Typography className={classes.title} variant="body1" component="h3">
            {product1.title}
            </Typography>
            <Typography className={classes.title} variant="body1" component="h3">
           {/* {product.description.slice(0,60)+"...."} */}
           {product1.description}
            </Typography>
            <Typography className={classes.price} variant="h6" component="h2">
         PKR {product1.price}
            </Typography>
            <Typography className={classes.cat} variant="body1"  color="textSecondary"  component="p">
           {product1.brand}
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
}

export default Searchpage