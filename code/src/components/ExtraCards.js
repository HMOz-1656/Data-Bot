import { Grid,Card,CardActionArea,CardContent,Typography,CardActions,Button,CardMedia } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    card:{
  borderRadius:"10px",
    },

   btn:{
    marginTop:"130px",marginLeft:"20px",padding:"10px",background:"white",color:"black",fontSize:"12px",
    borderRadius:"3px",
    "&:hover": {
       
        backgroundColor:"black",
        color:"white",
       },
   },
   btn1:{
      
    marginTop:"200px",
    marginLeft:"225px",
    padding:"10px",
    background:"white",color:"black",fontSize:"12px",
    borderRadius:"3px",
    "&:hover": {
       
        backgroundColor:"black",
        color:"white",
       },
   },
   btn2:{
      
    marginTop:"210px",
    marginLeft:"105px",
    padding:"10px",
    background:"white",color:"black",fontSize:"12px",
    borderRadius:"3px",
    "&:hover": {
       
        backgroundColor:"black",
        color:"white",
       },
   },
   

}))



function ExtraCards() {
    const classes = useStyles();
  return (
    <>
    <Container style={{marginTop:"10px"}}  >

<Grid container spacing={2}   >


<Grid item xs={12} md={6} lg={4}>

<Card variant="outlined" className={classes.card} style={{ background: `url('https://cdn.shopify.com/s/files/1/0262/5804/7069/files/600x370-Women_s_600x_crop_center.jpg?v=1646127313') `,backgroundSize: "cover", height:"40vh",width:"100%",border:"none" }}>
<CardActionArea>
  
</CardActionArea>
<CardActions >
  
<a style={{textDecoration:"none"}}  target="_blank" href="https://www.metroshoes.com.pk/collections/women">
  <Button  className={classes.btn1} size="small" color="primary">
   shop now
  </Button>
  </a>
 
</CardActions>
</Card>
</Grid>


<Grid item xs={12} md={6} lg={4}>

<Card variant="outlined" className={classes.card} style={{ background: `url('https://cdn.shopify.com/s/files/1/0464/1731/3955/articles/Cover_92df7928-1f4d-4caa-b108-0820b5f1c6d3_750x375_crop_center.jpg?v=1647843751') `,backgroundSize: "cover", height:"40vh",width:"100%",border:"none" }}>
<CardActionArea>
  
</CardActionArea>
<CardActions >
<a style={{textDecoration:"none"}}  target="_blank" href="https://bonanzasatrangi.com/blogs/news/summer-style-check-list">
  <Button  className={classes.btn1} size="small" color="primary">
   shop now
  </Button>
  </a>
</CardActions>
</Card>
</Grid>

<Grid item xs={12} md={6} lg={4}>

<Card variant="outlined" className={classes.card} style={{ background: `url('https://cdn.shopify.com/s/files/1/0281/5970/5228/files/600x350_8e733ba1-c899-4082-81e4-36f4c4b753f0_600x.jpg?v=1648059598') `,backgroundSize: "cover", height:"40vh",width:"100%",border:"none",backgroundPosition: "center center ", }}>
<CardActionArea>
  
</CardActionArea>
<CardActions >
 <a style={{textDecoration:"none"}}  target="_blank" href="https://www.leisureclub.pk/collections/summer-i-22">
  <Button  className={classes.btn1} size="small" color="primary">
   shop now
  </Button>
  </a>
 
</CardActions>
</Card>
</Grid>




</Grid>
</Container>
    </>
  )
}

export default ExtraCards


// 