import React from 'react';
import { Container }from 'semantic-ui-react'

class Blog extends React.Component {
  render(){
    return (
      <div className="blog" id='blog'>
        <Container>
          <div className='pg-title-holder'>
            <h1 className='page-title'>
              Blog
              <div className='title-bg'/>
            </h1>
          </div>
          <div id="medium-widget"></div>
        </Container>
      </div>
    );
  }
}

export default Blog;
