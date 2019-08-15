import React from 'react';
import { Container }from 'semantic-ui-react'
import { Link } from 'react-scroll'

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
            <div className='flex'>
              <span className='to-the-top'>
                <Link
                  activeClass="active"
                  to="intro"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {500}
                  className='link'
                >
                  <i class="fas fa-chevron-up"></i>
                  <div>Go to Top</div>
                </Link>

              </span>
            </div>
        </Container>
      </div>
    );
  }
}

export default Blog;
