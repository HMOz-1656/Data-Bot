import React, { useEffect, useState,createContext } from "react";
import "./App.css";
import Loading from "./components/loading";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import ProtectedRoute from './ProtectedRoute';
import Searchpage from "./components/Searchpage";
import Profile from "./components/profile"; 
import Fourzerofour from "./components/Fourzerofour";
//import fourzerofour from "./components/Fourzerofour";
import Men from "./components/men.js"
import Women from "./components/women.js"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';

import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Product_detail from "./components/Product_detail";
import Unstitched from "./components/Unstitched";
import Stitched from "./components/Sitched";
import Western from "./components/Western";
import Shoes from "./components/Shoes";
import Mobilenav from "./components/Mobilenav"
import About from "./components/About";

import Fpassword from "./components/forgetpassword"
let theme = createTheme({
  palette: {
    primary: {
      main: "#0A5995",
    },
  },
});

theme = responsiveFontSizes(theme);
export const Context=createContext(null)

function App() {
  
  const [loginuser, setloginuser] = useState(JSON.parse(localStorage.getItem('user'))); 


 
    return (
      <>
        <BrowserRouter>

        
          <ThemeProvider theme={theme}>
          <Context.Provider value={{loginuser, setloginuser}}>
          {/* <Route  path="/" element={<Mobilenav/>} /> */}
          <Hidden only={["xl","lg","md"]}>
          <Mobilenav/>
         
          </Hidden>
          
            <Routes>
              <Route  path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgetpassword" element={<Fpassword />} />
              <Route element={<ProtectedRoute />}>


          
              
              <Route path="/homepage" element={<Homepage />} />
              
              <Route path="/shop" element={<Shop />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/profile" element={<Profile />} />
              Women
              <Route path="/Search" element={<Searchpage />} />
            
              <Route path="/products/:id" element={<Product_detail />} />
              <Route path="/unstitched" element={<Unstitched />} />
              <Route path="/stitched" element={<Stitched />} />
              <Route path="/Western" element={<Western />} />
              <Route path="/shoes" element={<Shoes />} />
              <Route path="/about" element={<About />} />



              </Route>
              <Route path="/*" element={<Fourzerofour />} />
            </Routes>
           
            </Context.Provider>
          </ThemeProvider>
        </BrowserRouter>
       
      </>
    );
  
}

export default App;
