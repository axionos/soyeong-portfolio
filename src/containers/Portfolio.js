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
                trigger={<div className='project-img-container'>My Trip Planner</div>}
              >
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <h2>My Trip Planner</h2>
                    <div className='project-detail'>
                      <p> My Trip Planner is my solo project that allows a user to easily organize daily trip itineraries and display them on the map. It was built with React, Ruby on Rails, Google Place and Google Maps API.</p>
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
                      <span className='skill-used'>Responsive Design</span>
                      <span className='skill-used'>Semantic UI</span>
                      <span className='skill-used'>Custom CSS</span>
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Boba Finder</div>}
              >
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <h2>Boba Finder</h2>
                    <div className='project-detail'>
                      <p>Bobafinder lets a user to find a bubble tea stores in NYC, filter the search result on different brands, save favorite stores and visited stores on the user profile.</p>
                      <p>● Developed a Rails API backend with endpoints for users, stores, and user-stores </p>
                      <p>● Implemented user interface employing React with Bootstrap React and custom CSS for styling</p>
                      <p>● Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</p>
                      <p>● Scraped Foursquare API to provide bubble tea store  information in New York City</p>
                    </div>
                    <div className='skills-used'>
                      <span className='skill-used first'>React</span>
                      <span className='skill-used'>Ruby on Rails</span>
                      <span className='skill-used'>Four Square API</span>
                      <span className='skill-used'>Bootstrap</span>
                      <span className='skill-used'>Custom CSS</span>
                    </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='large'
                dimmer='blurring'
                trigger={<div className='project-img-container'>Dope Cocktail Menu</div>}
              >
                <Modal.Content image>
                  <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <h2>Dope Cocktail Menu</h2>
                    <div className='project-detail'>
                      <p>Dope Cocktail Menu is an interactive cocktail recipe menu based on a user's mood. It allows the user to view, like, comment on a recipe, or select a different mood from the menu.</p>
                      <p>● Developed Rails API backend with endpoints for cocktails, comments, mood and likes</p>
                      <p>● Implemented custom CSS for user interface styling</p>
                      <p>● Built the features for the app using vanilla JavaScript</p>
                    </div>
                    <div className='skills-used'>
                      <span className='skill-used first'>JavaScript</span>
                      <span className='skill-used'>Ruby on Rails</span>
                      <span className='skill-used'>Bootstrap</span>
                      <span className='skill-used'>Custom CSS</span>
                    </div>
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
