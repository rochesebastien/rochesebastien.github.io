import './About.scss'

function Me() {
    return (
    <div id="about" className='about page_container'>
        <div className="left">
            <img src="/assets/img/photo.png" alt="" />
        </div>
        <div className="right">
            <p>
            Mon nom est Roche Sébastien. Possédant un attrait pour l’informatique depuis tout petit, et poussé par ma curiosité, j’ai voulu comprendre comment les jeux de mon enfance fonctionnaient. C’est alors que j’ai découvert le développement web et que j’ai décidé d’en faire mon futur métier. En alliant ma curiosité et ma réflexion, j’ai poursuivi mes études et obtenu un Bachelor CSI option développement logiciel et web, que je compte accompagner d’un Master Développeur Web Full Stack.
            <a href="../../assets/files/cv.pdf" target="_blank">Voir mon CV</a>
            </p>
            
        </div>
    </div>
    );
  }
  
  export default Me;