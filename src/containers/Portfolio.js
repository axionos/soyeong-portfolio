import React from 'react';
import { Container, Grid, Modal, Button, Image, Header }from 'semantic-ui-react'

class Portfolio extends React.Component {
  render(){
    return (
      <div className="portfolio">

      <Container>
        <h1>Projects</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Show Modal</div>}
              >
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>My Trip Planner</Header>
                    <div className='project-detail'>
                      <p> My Trip Planner is my solo project that allows a user to organize daily trip itineraries. It was built with React, Ruby on Rails, Google Place and Google Maps API.</p>
                      <p>● Developed a Rails API backend with endpoints for users, trips, days, and items</p>
                      <p>● Implemented user interface employing React and Redux with Semantic UI React and custom CSS for styling</p>
                      <p>● Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</p>
                      <p>● Utilized Google Map and Google Place APIs to pull and render data on information and photos for tour spots</p>
                    </div>
                    <div className='skills-holder'>
                      <span className='skill-used first'>React</span>
                      <span className='skill-used'>Ruby on Rails</span>
                      <span className='skill-used'>Google Maps API</span>
                      <span className='skill-used'>Google Place API</span>
                      <span className='skill-used'>Redux</span>
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Show Modal</div>}
              >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <div className='skills-used'></div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Show Modal</div>}
              >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <div className='skills-used'></div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Show Modal</div>}
              >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <div className='skills-used'></div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Show Modal</div>}
              >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>

                    <div className='skills-used'></div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Show Modal</div>}
              >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <div className='skills-used'></div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </div>
    );
  }
}

export default Portfolio;
