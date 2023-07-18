import './Title.scss'

function Title(props) {
    if(props.direction=="right"){
        return (
            <div className='title_ctn'>
              <h1 className='section_title right'>
                  <span className='first'>{props.section_name}</span>
                  <span className='second'>{props.section_name}</span>
                  <span className='third'>{props.section_name}</span>
              </h1>
          </div>
          );
    } else {
        return (
            <div className='title_ctn'>
              <h1 className='section_title left'>
                  <span className='first'>{props.section_name}</span>
                  <span className='second'>{props.section_name}</span>
                  <span className='third'>{props.section_name}</span>
              </h1>
          </div>
          );
    }
    
  }
  
  export default Title;