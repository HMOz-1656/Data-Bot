import { Divider, Grid,Hidden } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root:{

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
      [theme.breakpoints.down('xl')]: {
       marginTop:"30px",
 
    
         },
  },
   line1:{
    marginTop:"30px",
    fontWeight:"bold",
    backgroundColor:"grey",
 
    
   },

   line2:{
    marginTop:"30px",
    backgroundColor:"grey",
   },
   media:{
       width:"100%",
       height:"50vh",
       borderRadius:"50%",
       
       [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"20vh",
 
    
         },
     
       
   },
   card:{
       border:"none",
       width:"100%",
       height:"70vh",
      
       [theme.breakpoints.down('md')]: {
        width:"70%",
        height:"28vh",
        marginLeft:"33px",
    
         },
         
   },
   card_button:{
       textAlign:"center",
       alignItems:"center",
       backgroundColor:"black",
       color:"white",
       padding:"8px",
       borderBottomRightRadius:"50px",
       borderBottomLeftRadius:"50px",
       "&:hover": {
       
        backgroundColor:"black",
        color:"white",
       },

   },
}))






function Catagories() {
  const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));

 


  if(loginuser.gender=="men") {
    
  }
    const card_items = [{
      img:"https://static-01.daraz.pk/p/a7dcff0e309220b9f4f4092716d1268a.jpg",
      btn:"Unstitched",
      gender:"men",
      link:"/unstitched"
    },
    {
      img:"https://www.junaidjamshed.com/media/wysiwyg/eid-ks.jpg",
      btn:"Stitched",gender:"men",
      link:"/stitched",
    },
    {
      img:"https://i.pinimg.com/736x/80/5e/f6/805ef6df62b3aacee4fd75f53ff6787c.jpg",
      btn:"Western",gender:"men",
      link:"/Western",
    },
    {
      img:"https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/20743/182611/AODLEE-Fashion-Men-Sneakers-for-Men-Casual-Shoes-Breathable-Lace-up-Mens-Casual-Shoes-Spring-Leather__30503.1545973958.jpg?c=2?imbypass=on",
      btn:"Shoes",gender:"men",
      link:"/shoes",
    },




    {
      img:"https://static.connect2india.com/c2icd/product_resources/images/unstitched-printed-ladies-suits.jpg",
      btn:"Unstitched",
      gender:"women",
      link:"/unstitched"
    },
    {
      img:"https://stylespk.com/wp-content/uploads/2016/03/Khaadi-Pret-Vol-2-Printed-Kurta-for-Girls.jpg",
      btn:"Stitched",gender:"women",
      link:"/stitched",
    },
    {
      img:"https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw335bdfa5/images/zoom/10039338_front.jpg",
      btn:"Western",gender:"women",
      link:"/Western",
    },
    {
      img:"https://ae01.alicdn.com/kf/HTB1_kNzdkxz61VjSZFrq6xeLFXaD/Shoes-woman-flats-2020-fashion-breathable-mesh-flat-with-sneakers-women-shoes-solid-casual-ladies-shoes.jpg",
      btn:"Shoes",gender:"women",
      link:"/shoes",
      
    },




    ]

  


    const classes = useStyles();
  return (
    <>
    <Container>
<div  className={classes.root}>
  <Grid container  >
     
     
  <Hidden only={["xs","sm"]}>
     
        <Grid item xs={12} md={4} lg={4}>
            <Divider className={classes.line1} />
            </Grid>
            </Hidden>

            <Grid item xs={12} md={4} lg={4}>
            <h4 className={classes.heading}>
                Catagories
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

    <Container style={{marginTop:"10px"}}  >

      <Grid container spacing={3} style={{justifyContent:"space-between",marginTop:"15px"}}  >

{card_items.filter((i)=>i.gender==loginuser.gender).map((i) => (
    <Grid item xs={6} md={6} lg={3}>
<Link  style={{textDecoration:"none"}} to={i.link} >
    <Card variant="outlined" className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={i.img}
        />
      </CardActionArea>
      <CardActions >
        <Button fullWidth className={classes.card_button} size="small" color="primary">
         {i.btn}
        </Button>
      </CardActions>
    </Card>
    </Link>
    </Grid>
    
))}


    </Grid>
    </Container>
    </>
  )
}

export default Catagories