import React from 'react';
import {  Button }from 'semantic-ui-react'

class Intro extends React.Component {
  render(){
    return (
      <div className="intro" id='intro'>
        <div className='intro-text-container'>
          <div className='intro-text'>
            <h1>Hello, I'm Soyeong!</h1>
            <h1>Full Stack Software Engineer based in New York</h1>
          <Button className='view-work'>View My Work</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
