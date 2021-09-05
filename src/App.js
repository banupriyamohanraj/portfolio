import './App.css';
import React from "react";

import Header from './components/Header/Header';
import Topcontainer from './components/TopContainer/Topcontainer';

import Skillcontainer from './components/SkillContainer/Skillcontainer';
import Projectcontainer from './components/Projectcontainer/Projectcontainer';
import Contactcontainer from './components/Contactcontainer/Contactcontainer';
import Footer from './components/Footer/Footer';
require('dotenv').config();




function App() {

  


  return <>
  <div className="App">
  <Header/>
  <Topcontainer/>

  <Skillcontainer/>
  <Projectcontainer/>

  <Contactcontainer/>
<Footer/>

    
</div>

  </>
}

export default App;
