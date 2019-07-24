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
              <Modal trigger={<div className='project-img-container'>Show Modal</div>}>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>My Trip Planner</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <div className='skills-used'></div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal trigger={<div className='project-img-container'>Show Modal</div>}>
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
              <Modal trigger={<div className='project-img-container'>Show Modal</div>}>
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
              <Modal trigger={<div className='project-img-container'>Show Modal</div>}>
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
              <Modal trigger={<div className='project-img-container'>Show Modal</div>}>
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
              <Modal trigger={<div className='project-img-container'>Show Modal</div>}>
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
