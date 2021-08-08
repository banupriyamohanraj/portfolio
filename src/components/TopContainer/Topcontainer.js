import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from '../Topcontent/Topcontent'
import './Topcontainer.css'


export default function Topcontainer(){
  
    return <>
    <div>
  
<Element name="about" className="topContainer">
  <Topcontent/>
</Element>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
  <path fill="#1A1D53" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,218.7C672,224,768,160,864,117.3C960,75,1056,53,1152,58.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
    </div>
    </>
}