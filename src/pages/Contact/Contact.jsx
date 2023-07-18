import './Contact.scss'
import React, { useRef } from 'react';



function Contact() {

    return (
      <div id="contact" className="contact page_container">
        <h1>ENVIE DE DISCUTER ?</h1>      
        <div className="email contact_list">
          <img src="/assets/icon/arobase.svg" alt="Email : " />
          <a href="mailto:nsebastienroche230@gmail.com">sebastienroche230@gmail.com</a>
        </div>
        <div className="location contact_list">
          <img src="/assets/icon/location.svg" alt="Où ?" />
          <span>Limoges / Guéret, France</span>
        </div>
        <div className="links_ctn">
          <p>Vous pouvez aussi me retrouver sur : </p>
          <div className="links">
            <a href=""><img src="/assets/icon/linkedin.svg" alt="Linkedin" /></a>
            <a href=""><img src="/assets/icon/github.svg" alt="Github" /></a>
            <a href=""><img src="/assets/icon/behance.svg" alt="Behance" /></a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;