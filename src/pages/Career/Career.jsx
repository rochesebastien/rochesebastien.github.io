import './Career.scss'
import Experiences from '../../components/Career/Experiences';
import Formations from '../../components/Career/Formations';
import { useState } from 'react';
function Career() {

  const [toggle, changetoggle] = useState(true);
  const switchTrue = () => {
    const true_toggle = true;
    changetoggle(true_toggle);
  }

  const switchFalse = () => {
    const false_toggle = false;
    changetoggle(false_toggle);
  }
    return (
      <div id="career" className="career page_container">
        <div className="career_ctn">
          <div className="actions_row">
            <button className={toggle ? 'active' : ''} onClick={switchTrue}>Expériences</button>
            <button className={!toggle ? 'active' : ''}onClick={switchFalse}>Formations</button>
          </div>
          { toggle ? <Experiences /> : <Formations /> }
        </div>
      </div>
    );
  }
  
  export default Career;