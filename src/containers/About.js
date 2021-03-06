import React from 'react';
import { Container, Grid, Segment }from 'semantic-ui-react'
import ProgressTemplate from '../components/ProgressTemplate';
import profilePic from '../img/download.png'
import resume from '../img/Resume_Soyeong_Cindy_Oh.pdf'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import blog from '../img/wordpress.png'
import resume_icon from '../img/cv.png'






class About extends React.Component {
  render(){
    console.log('about props', this.props);
    return (

      <div className='about-me' id='about'>

      { /*this.props.status && setTimeout(this.move, 700) */}

        <Container>
          <div className='pg-title-holder'>
            <h1 className='page-title'>
              About Me
              <div className='title-bg'/>
            </h1>
          </div>
          <Grid stackable columns={3}>
            <Grid.Column width={1}/>
            <Grid.Column width={4} className='photos-container'>
              <Segment>
                <div className='profile-pic'>
                  <img src={profilePic} alt='profile' />
                </div>
              </Segment>
              <div className='icon-container'>
                <Grid columns={4}>
                  <Grid.Column className='first'>
                    <a href='https://www.linkedin.com/in/soyeongoh/' target='_blank' rel='noopener noreferrer'>
                      {/*<i class="fab fa-linkedin"></i>*/}
                      <img src={linkedin} alt='linkedin'/>
                    </a>
                  </Grid.Column>
                  <Grid.Column className='second'>
                    <a href='https://github.com/axionos' target='_blank' rel='noopener noreferrer'>
                      {/*<i class="fab fa-github-square"></i>*/}
                      <img src={github} alt='github'/>
                    </a>
                  </Grid.Column>
                  <Grid.Column className='third'>
                    <a href={resume} target='_blank' rel='noopener noreferrer'>
                      {/*<Button basic color='green' size='tiny'>Resume</Button>*/}
                      <img src={blog} alt='resume'/>
                    </a>
                  </Grid.Column>
                  <Grid.Column className='fourth'>
                    <a href={resume} target='_blank' rel='noopener noreferrer'>
                      {/*<Button basic color='green' size='tiny'>Resume</Button>*/}
                      <img src={resume_icon} alt='resume'/>
                    </a>
                  </Grid.Column>

                </Grid>
              </div>
            </Grid.Column>

            <Grid.Column width={10} className='skills-container'>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='js label'>JavaScript</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={70} /> }
                </Grid.Column>
              </Grid>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='react label'>React</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={80} /> }
                </Grid.Column>
              </Grid>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='ruby label'>Ruby/Rails</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={70} /> }
                </Grid.Column>
              </Grid>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='html label'>HTML</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={90} /> }
                </Grid.Column>
              </Grid>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='css label'>CSS</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={90} /> }
                </Grid.Column>
              </Grid>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='ui-design label'>UI Design</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={80} /> }
                </Grid.Column>
              </Grid>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='photoshop label'>Photoshop</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={70} /> }
                </Grid.Column>
              </Grid>
              <Grid stackable columns={2}>
                <Grid.Column width={3} className='skill-name'>
                  <div className='illustrator label'>Illustrator</div>
                </Grid.Column>
                <Grid.Column width={13}>
                  { this.props.status && <ProgressTemplate percent={70} /> }
                </Grid.Column>
              </Grid>

            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid>

          <div className='about-me-container'>
            <Grid stackable columns={3}>
              <Grid.Column width={1}/>
              <Grid.Column width={14}>
              <p>Full stack software engineer with a passion for continuous learning and building a sophisticated web application. With experience in Ruby on Rails, JavaScript, React and CSS3 and background as a web designer, I discovered web development through utilizing my skill to visualize web apps. I'm a strong collaborator and I bring exceptional skills in problem-solving and communication through extensive experiences from online marketing and customer service.</p>
              </Grid.Column>
              <Grid.Column width={1}/>
            </Grid>
          </div>
        </Container>
      </div>

    );
  }
}

export default About;
