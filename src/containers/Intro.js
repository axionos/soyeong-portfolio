import React from 'react';
import { Button }from 'semantic-ui-react'
import { Link } from 'react-scroll'

class Intro extends React.Component {
  render(){
    return (
      <div className="intro" id='intro'>
        <div className='intro-text-container'>
          <div className='intro-text'>
            <h1>Hello, I'm Soyeong!</h1>
            <h1>Full Stack Software Engineer based in New York</h1>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              className='link'
            >
              <Button className='view-work'>View My Work</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
