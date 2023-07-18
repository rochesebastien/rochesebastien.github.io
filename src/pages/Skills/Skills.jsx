import './Skills.scss';

function Skills() {
    return (
      <div id="skills" className="skills page_container">
        <ul>
          <li>
            <div className="left">
              <span className='word'>HTML</span>
              <span className='slash'>/</span>
              <span className='word'>CSS</span>
              <span className="slash">/</span>
              <span className="word">SCSS</span>
            </div>
            <span>01</span>
          </li>
          <li>
            <div className="left">
                <span className='word'>Javascript</span>
                <span className='slash'>/</span>
                <span className='word'>Typescript</span>
              </div>
              <span>02</span>
          </li>
            
          <li>
          <div className="left">
              <span className='word'>React</span>
              <span className='slash'>/</span>
              <span className='word'>Angular</span>
              <span className="slash">/</span>
              <span className="word">Vue</span>
            </div>
            <span>03</span>
          </li>
          <li>
            <div className="left">
              <span className='word'>PHP</span>
              <span className='slash'>/</span>
              <span className='word'>Symfony</span>
            </div>
            <span>04</span>
          </li>
          <li>
            <div className="left">
              <span className='word'>HTML</span>
              <span className='slash'>/</span>
              <span className='word'>CSS</span>
              <span className="slash">/</span>
              <span className="word">SCSS</span>
            </div>
            <span>05</span>
          </li>
          <li>
          <div className="left">
              <span className='word'>SQL</span>
              <span className='slash'>/</span>
              <span className='word'>MYSQL</span>
            </div>
            <span>06</span>
          </li>
          <li>
            <div className="left">
              <span className='word'>Python</span>
              <span className='slash'>/</span>
              <span className='word'>Pandas</span>
            </div>
            <span>07</span>
          </li>
          <li>
            <div className="left">
              <span className='word'>Merise</span>
              <span className='slash'>/</span>
              <span className='word'>UML</span>
            </div>
            <span>08</span>
          </li>
          <li>
            <div div className="left">
              <span className='word'>GIT</span>
              <span className='slash'>/</span>
              <span className='word'>Env. Linux</span>
            </div>
            <span>09</span>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Skills;