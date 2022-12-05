import React from 'react';
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./slider_Style.css";

const content = [
  {
    
    image: "https://pk.khaadi.com/media/wysiwyg/khaadi/11-03-2022/Desk-Web-Banner-1920x825.jpg",
    link:"https://pk.sapphireonline.pk/"
   
  },
  {
    
    image: "https://pk.khaadi.com/media/wysiwyg/khaadi/29-3-2022/Desk-Web-Banner-1920x825.jpg",
    link:"https://pk.khaadi.com/man.html"
  },
  
];

function Slider_Home() {
   
  return (
   <>
<Slider className="slider-wrapper">
      {content.map((item, index) => (

        
        <div
          key={index}
          onClick={()=> {
            window.location.href = item.link;
        }}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
         
        </div>
        
      ))}
    </Slider>


    
    
   </>
  )
}

export default Slider_Home