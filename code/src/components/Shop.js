import Header1 from './Header1';
import "./Header.css";
import { makeStyles } from '@material-ui/core/styles';
import React,{useEffect,useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import API from "./api"

import axios from "axios";
import Typography from '@material-ui/core/Typography';
import { Grid,Hidden,Divider,FormControl, InputLabel,Select,MenuItem} from '@material-ui/core';
import { Container, NavLink } from 'react-bootstrap';
import { useLocation } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    img:{
        backgroundImage:`url('https://cdn.shopify.com/s/files/1/1592/0041/files/RTW-slider-web_109b09d0-af44-4085-bc65-4fcdc9dca952_1512x.progressive.jpg?v=1649327907')`,
        width:"100%", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", 
        backgroundSize:"cover", 
        height:"70vh",
        [theme.breakpoints.down('md')]: {
           width:"100%",
      
      
         
              },
            },
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
                formControl: {
                 
                  minWidth: 200,
                },
                selectEmpty: {
                  marginTop: theme.spacing(2),
                },
             
}))

function Shop() {
     const classes = useStyles();
    const[ProductData,SetProductData] = useState([]);
    const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));
    const [state, setstate] = useState(1)



   

    const [filterdata, setfilterdata] = React.useState({
      gender:loginuser.gender,
      brand:"All",
      category: "All",
       price: 1,
    });

    const [brands, setbrands] = useState([])
    var filterclick=(()=>{
      console.log(filterdata)
    })

const [loading, setloading] = useState(true)
  const handleChange = (event) => {
    setfilterdata({...filterdata,[event.target.name]:event.target.value});
  };


    const location = useLocation(loginuser);
    // console.log(location);

    // console.log(loginuser)
    useEffect(async() =>{
      await axios.get(`${API}/getproducts`)
      .then((data)=>{
        setloading(false)
        SetProductData(data.data)
        
       
        // console.log(data)

        var a=data.data;
      //   function onlyUnique(value, index, self) {
      //     return self.indexOf(value.brand) === index;
      //   }
      //   
      //   var unique = a.filter(onlyUnique);
      //  console.log(unique)

      var dataaa=a.map((i)=>{

        return i.brand
      })

     
  



      
var datac=dataaa.filter((v, i, a) => a.indexOf(v) === i)
      setbrands(datac)
     // console.log(datac)
      
      })


    
      
        
    },[filterdata]);



    var apidata=ProductData.filter(product =>{
       if(filterdata.gender=="All"){
        return(
          product.gender
          )   
       }
       else{
        return(
          product.gender==filterdata.gender
  
          
          )
       }
      
    }
      ).filter((product)=>{
        if(filterdata.category=="All"){
          return(product.category)
        }
        else{
return(product.category==filterdata.category)
}
      }).filter((product)=>{
        if(filterdata.brand=="All"){
          return(product.brand)
        }
        else{
          return(product.brand==filterdata.brand)
        }
        
              
              }).filter((product)=>{
                return(product.price>=filterdata.price)
                      
                      }).filter((product)=>{
                        if(filterdata.price>1){
                          return(product.price<=filterdata.price+1000)
                        }
                        else if(filterdata.price==7000){
                          return(product.price>=filterdata.price)
                        }
                        else{
                          return(product.price>=filterdata.price)
                        }
                        
                              
                              }).slice(0,300)
console.log(apidata)
    // const change=(e)=>{
    //   console.log(e.target)
    //   setstate(parseInt(e.target.textContent))
    //      }
      
    //      if(state==1){
    //        var ProductData1 =  ProductData.slice(0,300);

    //        console.log(ProductData1);

            
    //   }
    //   else if(state==2){
    //     var ProductData1 =  ProductData.slice(300,600);
      
    //   }
    //   else{
         
    //   }
  return (
    <>
    <Header1 />
    <Grid container>

        {/* <Grid item xs={12} md={6} lg={12}>
    

    <img className={classes.img} 
/>
</Grid> */}

    
    
    </Grid>

 <Container >
 
   <Grid container spacing={2} style={{marginTop:"10px"}}>
    <Grid item xs={12} sm={6} md={6} lg={3}>
    <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={filterdata.gender}
          onChange={handleChange}
          name="gender"
        >
         <MenuItem  value="All">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"men"}>male</MenuItem>
          <MenuItem value={"women"}>female</MenuItem>
        </Select>
      </FormControl>
    </Grid>



    <Grid item  xs={12} sm={6} md={6} lg={3}>
    <FormControl  fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={filterdata.brand}
          onChange={handleChange}
          name="brand"
        >
       <MenuItem value={"All"}>
            <em>All</em>
          </MenuItem>
          {brands.map((i)=>(
            <MenuItem value={i}>{i}</MenuItem>
          ))}
          
         
        </Select>
      </FormControl>
    </Grid>





    <Grid item xs={12} sm={6} md={6} lg={3}>
    <FormControl  fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={filterdata.category}
          onChange={handleChange}
          name="category"
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
         
            <MenuItem value={"stitched"}>stitched</MenuItem>
            <MenuItem value={"unstitched"}>unstitched</MenuItem>
            <MenuItem value={"shoes"}>shoes</MenuItem>
            <MenuItem value={"western"}>western</MenuItem>
          
        </Select>
      </FormControl>
    </Grid>




    <Grid item xs={12} sm={6} md={6} lg={3}>
    <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={filterdata.price}
          onChange={handleChange}
          name="price"
        >
         <MenuItem disabled  value="none">
            <em>Select</em>
          </MenuItem>
          <MenuItem select value={1}>All</MenuItem>
          <MenuItem value={2}>0-1000 PKR</MenuItem>
          <MenuItem value={1000}>1000-2000 PKR</MenuItem>
          <MenuItem value={2000}>2000-3000 PKR</MenuItem>
          <MenuItem value={3000}>3000-4000 PKR</MenuItem>
          <MenuItem value={4000}>4000-5000 PKR</MenuItem>
          <MenuItem value={5000}>5000-6000 PKR</MenuItem>
          <MenuItem value={6000}>6000-7000 PKR</MenuItem>
          <MenuItem value={7000}>Above 7000 PKR</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    </Grid>

    
    </Container >
    
    

    <div> 
   

<h3 style={{textAlign:"center",fontWeight:"bold",color:"#0A5995",marginTop:"30px"}}>SHOP</h3>
<Container style={{padding:"40px"}}>
{

loading==true?<CircularProgress /> :  
apidata.length==0?<h3>No Products</h3>:
    <Grid container spacing={2}>


   {
  
  apidata.filter((i)=>i.price>0).map((i) =>
                              
     (
    
      
      <Grid item xs={6} md={6} lg={3}>
   <Link style={{textDecoration:"none"}} to={`/products/${i._id}`}>
      <Card variant="outlined" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={i.image}
            title={i.title}
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

     ))
   }




        
    </Grid>


}
   
    </Container>


    {/* <div style={{display:"flex",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"}}>
           <Pagination  page={state} onChange={change}  count={3} color="primary"/>
           </div>
         */}

      </div>

 
    </>
  )
}

export default Shop