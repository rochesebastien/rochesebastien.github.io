import './Projects.scss';
import { Link } from "react-router-dom";
import ProjectsData from "../../data/projects.json"
import { useState } from 'react';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="projects" className="projects">
            {ProjectsData.map((project,index) => (
                    <Link to={`/projects/${project.id}`} className='project_item' onClick={(e) => handleClick(index)} key={project.id}>
                      <div className="left">
                        <div className="hover">
                        </div>
                        <img src={project.image} alt=""/>
                        {/* <span className="name">Feur</span> */}
                        <span className="name">{project.title}</span>
                      </div>
                      <div className="right">
                        <span className="number">
                        {project.id}
                        </span>
                        <span className="lang">
                          {project.languages}
                        </span>
                      </div>
                    </Link>
                ))}             
          {/* <span>{ProjectsData.length}</span> */}
      </div>           
  );
}

  
  export default Projects;