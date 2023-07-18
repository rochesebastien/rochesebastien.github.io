import './Home.scss'
import { useState } from 'react';


import Navbar from '../../components/Navbar/Navbar';
import About from '../About/About'
import Projects from '../Projects/Projects';
import Title from '../../components/Title/Title';
import Skills from "../Skills/Skills";
import Career from '../Career/Career';
import Contact from '../Contact/Contact';

import Spline from '@splinetool/react-spline';



function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [progressNavbar, setProgressNavbar] = useState(0);

  const hauteurTotale = Math.max(
    document.documentElement.scrollHeight, 
    // document.documentElement.offsetHeight, 
    // document.documentElement.clientHeight
  );


  window.onscroll = ()=>{
    if(window.scrollY > window.innerHeight){
      setShowNavbar(true)
      // console.log("oui "+window.scrollY);
      // console.log(hauteurTotale);
      
    } else {
      setShowNavbar(false)
      // console.log("non "+showNavbar);
    }
    if((Math.round(window.scrollY / hauteurTotale * 100) >= 95)){
      setProgressNavbar(100)
    } else {
      setProgressNavbar(Math.round(window.scrollY / hauteurTotale * 100))
    }
    
    console.log(progressNavbar);
  };

    return (
      <div>
        <Navbar toggled={showNavbar} progress={progressNavbar} />
        {/* <video src="/assets/bg.mp4" autoplay loop></video> */}
        <div id="home" className="home page_container">
          {/* <img src="/assets/logo.svg" alt="" /> */}
          <Spline scene="https://prod.spline.design/cc6dfIlwTi790FJ0/scene.splinecode" />
          <div id="status">
            Etudiant développeur web
          </div>
        </div>
      <Title section_name='Presentation' direction='left'/>
      <About/>
      <Career />
      <Title section_name='Projets' direction='right'/>
      <Projects/>
      <Title section_name='Talents' direction='left'/>
      <Skills />
      <Title section_name='Contact' direction='left'/>
      <Contact />
    </div>
    );
  }
  
  export default Home;