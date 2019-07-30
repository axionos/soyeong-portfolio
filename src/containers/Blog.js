import React from 'react';
import { Container }from 'semantic-ui-react'

class Blog extends React.Component {
  render(){
    return (
      <div className="blog">
        <Container>
          <h1>Blog</h1>
          <div id="medium-widget"></div>
        </Container>
      </div>
    );
  }
}

export default Blog;
