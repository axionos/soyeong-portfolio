import React from 'react';
import { Container, Grid, Segment }from 'semantic-ui-react'

class About extends React.Component {
  render(){
    return (
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column className='photos-container'>
            <Segment>
              <div className='photo-1'/>
              <div className='photo-2'/>
              <div className='photo-3'/>
            </Segment>
          </Grid.Column>
          <Grid.Column className='skills-container'>
            <Segment/>
          </Grid.Column>
        </Grid>
        <div className='about-me-container'>
          <p>Full stack software engineer with a passion for continuous learning and building a sophisticated web application. With experience in Ruby on Rails, JavaScript, React and CSS3 and background as a web designer, I discovered web development through utilizing my skill to visualize web apps. I'm a strong collaborator and I bring exceptional skills in problem-solving and communication through extensive experiences from online marketing and customer service.</p>
        </div>
      </Container>
    );
  }
}

export default About;
