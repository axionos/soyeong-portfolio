import React from 'react';
import {  Button }from 'semantic-ui-react'

class Intro extends React.Component {
  render(){
    return (
      <div className="intro">

        <h1>Hello, I'm Soyeong!</h1>
        <h1>Full Stack Software Engineer based in New York</h1>
        <Button>View My Work</Button>
      </div>
    );
  }
}

export default Intro;
