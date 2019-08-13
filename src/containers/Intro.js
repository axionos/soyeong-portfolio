import React from 'react';
import { Button }from 'semantic-ui-react'
import { Link } from 'react-scroll'

class Intro extends React.Component {

  render(){
    // console.log('intro props', this.props);
    return (

      <div className="intro" id='intro'>
        <div className='intro-text-container'>
          <div className='intro-wrapper'>
            <div className='intro-text'>
              <h1>Soyeong Oh</h1>
            </div>

            <p>Full Stack Software Engineer based in <span className='ny'>New York</span></p>
            <div className='view-work'>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                className='link'
                onClick={this.props.showSkills}
              >
                <Button inverted color='green' className='view-work' onClick={this.props.showSkills}>
                  View My Work
                  <i class="fas fa-angle-down"></i>
                </Button>

              </Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Intro;
