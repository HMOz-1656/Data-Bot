import React,{useContext,useState} from 'react';
import Header1 from './Header1';
import "../App.css";
import Slider_Home from './Slider_Home';
import Abovecat from './Abovecat';
import Catagories from './Catagories';
import Product_card from './Product_card';
import Mobilenav from "./Mobilenav"
import ExtraCards from './ExtraCards';
import Feature_slider from "./feature_slider"
import Brand_slider from './Brand_slider';
import Sidebar from './Sidebar';
import Footer from '../Footer';
import { Hidden } from '@material-ui/core';



function Homepage() {
  
  const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user')));
console.log(loginuser)


  return (
  <>
  <Header1 />
 <Slider_Home /> 
  {/* <Abovecat />  */}
   <Catagories />
  <Product_card />  
  {/* <Feature_slider/> */}
  <ExtraCards />  
  <Brand_slider /> 
  <br/>
  <br/>
  <br/>
  <Hidden only={["sm","xs"]}>
  <Footer/>
  </Hidden>
  
  


  {/* <Sidebar /> */}


  </>
  )
}

export default Homepage