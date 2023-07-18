import './Navbar.scss'
import { Link, useParams } from "react-router-dom";

function Navbar(props) {
    let {id}= useParams(); 

    const ScrollToHome = (event) => {
        event.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
      };

    const ScrollToAbout = (event) => {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToProjects = (event) => {
        event.preventDefault();
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToSkills = (event) => {
        event.preventDefault();
        document.getElementById("skills").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToCareer = (event) => {
        event.preventDefault();
        document.getElementById("career").scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollToContact = (event) => {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
      };


    if(!id){
        if(props.toggled){
            return (
                <nav>
                    <img onClick={ScrollToHome} src="/assets/logo.svg" alt="Roche Sébastien" />
                    <div className="links">
                        <a onClick={ScrollToAbout}>A propos</a>
                        <a onClick={ScrollToAbout}>Projets</a>
                        <a onClick={ScrollToAbout}>Compétences</a>
                        <a onClick={ScrollToAbout}>Carrière</a>
                        <a onClick={ScrollToAbout}>Contact</a>
                    </div>
                    <div className="bar" style={{ width: props.progress+"%" }}></div>
                </nav>
            );
        } else {
            return (
                <div>
    
                </div>
            );
        }
    } else {
        return (
            <div className='second_nav'>
                <img src="/assets/logo.svg" alt="" />
            </div>
        );
    }
    
    
  }
  
  export default Navbar;