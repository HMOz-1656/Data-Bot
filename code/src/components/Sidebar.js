import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {NavLink, Typography} from "@material-ui/core";
import { SidebarData } from './SidebarData';
import "./Sidebar.css";
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";
import { FaBars} from 'react-icons/fa';


function Sidebar() {
    const[sidebar,Setsidebar] = useState(false);

    const Showsidebar = () => Setsidebar(!sidebar);

    return (
        <>
       
        <IconContext.Provider value={{color:'black'}}>
        <div className="sidebar">
        
         <Link to="#" className="menu-bars">
             
         <FaIcons.FaBars style={{color:"black",fontSize:"22px"}} onClick={Showsidebar} /> 
         </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
         <ul className="nav-menu-items" onClick={Showsidebar}>
             <li className="navbar-toggle">
             <Typography className="sidebar_heading" style={{color:"black",paddingLeft:"10px"}} variant="h4" >DataBot</Typography>
                 <Link to="#" className="menu_bar">
                 <AiIcons.AiOutlineClose  />

                 </Link>
             </li>
             
             {SidebarData.map((item,index) => {
                 return(
                    
                     <div key={index} >
                     
                     <Link style={{textDecoration:"none",color:"black"}} to={item.path}>
                          
                             <li className="list">{item.title}</li>
                             </Link>
                         
                     </div>
                 )

             })}
           
         </ul>
         
        </nav>
      
        </IconContext.Provider>
        </>
    )
}

export default Sidebar