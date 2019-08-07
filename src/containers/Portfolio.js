import React from 'react';
import { Container, Grid, Modal, Image, Header }from 'semantic-ui-react'
import TripPlannerSlider from '../components/trip-planner-slider'
import BobaFinderSlider from '../components/boba-finder-slider'
import CocktailMenuSlider from '../components/cocktail-menu-slider'
import FundRunSlider from '../components/fundrun-slider'
import CityGuruSlider from '../components/city-guru-slider'

import tripPlannerThumbnail from '../img/my-trip-planner-screenshot/itinerarylist.png'
import bobaFinderThumbnail from '../img/boba-finder-screenshot/main.png'
import cocktailMenuThumbnail from '../img/cocktail-menu-screenshot/mood.png'
import fundRunThumbnail from '../img/fund-run-screenshot/marathon.png'
import motorImpactThumbnail from '../img/motor-impact-screenshot/main.png'
import cityGuruThumbnail from '../img/city-guru-screenshot/login.png'


class Portfolio extends React.Component {
  render(){
    return (
      <div className="portfolio" id='project'>

      <Container>
        <h1 className='page-title'>Projects</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Modal closeIcon
                size='medium'
                dimmer='blurring'
                trigger={
                  <div className='project-img-container'>
                    <img src={tripPlannerThumbnail} alt='My Trip Planner' />
                  </div>
                }
              >
                <Modal.Content className='project-modal'>
                  {/*<iframe title='my-trip-planner' className='demo-video' src="https://www.youtube.com/embed/j-LVemjrZx8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>*/}
                  <TripPlannerSlider />
                  <Modal.Description>
                    <h2>My Trip Planner</h2>
                    <div className='project-detail'>
                      <p> My Trip Planner is my solo project that allows a user to easily organize daily trip itineraries and display them on the map. It was built with React, Ruby on Rails, Redux, Google Place and Google Maps API.</p>
                      <p>● Developed a Rails API backend with endpoints for users, trips, days, and items</p>
                      <p>● Implemented user interface employing React and Redux with Semantic UI React and custom CSS for styling</p>
                      <p>● Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</p>
                      <p>● Utilized Google Map and Google Place APIs to pull and render data on information and photos for tour spots</p>
                    </div>
                    <div className='skills-used'>
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
                size='medium'
                dimmer='blurring'
                trigger={
                  <div className='project-img-container'>
                    <img src={bobaFinderThumbnail} alt='Boba Finder' />
                  </div>
                }
              >
                <Modal.Content className='project-modal'>
                  <BobaFinderSlider />
                  <Modal.Description>
                    <h2>Boba Finder</h2>
                    <div className='project-detail'>
                      <p>By using <span className='bold'>Foursquare API</span>, Bobafinder lets a user to find a bubble tea stores in NYC, filter the search result on different brands, save favorite stores and visited stores on the user profile.</p>
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
                size='medium'
                dimmer='blurring'
                trigger={
                  <div className='project-img-container'>
                    <img src={fundRunThumbnail} alt='Fund Run' />
                  </div>
                }
              >
                <Modal.Content className='project-modal'>

                  <FundRunSlider />
                  <Modal.Description>
                    <h2>Fund Run</h2>
                    <div className='project-detail'>
                      <p>Fund Run is marathon charity app built with <span className='bold'>pure Ruby on Rails</span>, which allows a user to follow a marathon they're interested in, make a donation on a charity and check the follow status and donation stat on the user profile page.</p>
                      <p>● Developed Ruby on Rails frontend and backend for users, marathons, charities, follow, and donations</p>
                      <p>● Implemented user interface employing Bootstrap and custom CSS</p>
                    </div>
                    <div className='skills-used'>
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
                size='medium'
                dimmer='blurring'
                trigger={
                  <div className='project-img-container'>
                    <img src={cocktailMenuThumbnail} alt='Dope Cocktail Menu' />
                  </div>
                }
              >
                <Modal.Content className='project-modal'>
                  <CocktailMenuSlider />
                  <Modal.Description>
                    <h2>Dope Cocktail Menu</h2>
                    <div className='project-detail'>
                      <p>Dope Cocktail Menu is an interactive cocktail recipe menu based on a user's mood. It allows the user to view, like, comment on a recipe, or select a different mood from the menu.</p>
                      <p>● Developed Rails API backend with endpoints for cocktails, comments, mood and likes</p>
                      <p>● Implemented custom CSS for user interface styling</p>
                      <p>● Built the features for the app using <span className='bold'>vanilla JavaScript</span></p>
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
            <Grid.Column width={5}>
              <Modal closeIcon
                size='medium'
                dimmer='blurring'
                trigger={
                  <div className='project-img-container'>
                    <img src={motorImpactThumbnail} alt='Motor Impact of Canada' />
                  </div>
                }
              >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content className='project-modal'>
                  <Image wrapped size='medium' src='/images/avatar/medium/rachel.png' />
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
                size='medium'
                dimmer='blurring'
                trigger={
                  <div className='project-img-container'>
                    <img src={cityGuruThumbnail} alt='Motor Impact of Canada' />
                  </div>
                }
              >
                <Modal.Content className='project-modal'>
                  <CityGuruSlider />
                  <Modal.Description>
                    <h2>City Guru</h2>
                    <div className='project-detail'>
                      <p>City Guru is CLI app built with pure Ruby code. It uses <span className='bold'>Teleport API</span> and allows a user to search for a basic information, salary information, and quality of living information of an urban city the user looks up.</p>
                      <p>● Developed with pure Ruby backend</p>
                      <p>● Utilized Teleport API to obtain urban city information</p>
                    </div>
                    <div className='skills-used'>
                      <span className='skill-used'>Ruby</span>
                      <span className='skill-used'>Teleport API</span>
                    </div>
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
