import './App.css';
import React from "react";

import Header from './components/Header/Header';
import Topcontainer from './components/TopContainer/Topcontainer';
import Skillcontainer from './components/SkillContainer/Skillcontainer';
import Projectcontainer from './components/Projectcontainer/Projectcontainer';
import Contactcontainer from './components/Contactcontainer/Contactcontainer';
import Footer from './components/Footer/Footer';
require('dotenv').config()



function App() {

  


  return <>

  <Header/>
  <div className="App">
 
  </div>
  
  <Topcontainer/>
  <Skillcontainer/>
  <Projectcontainer/>
  <Contactcontainer/>
<Footer/>

    
  

  </>
}

export default App;
