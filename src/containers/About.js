import React from 'react';
import { Container, Grid, Segment, Button, Visibility }from 'semantic-ui-react'

class About extends React.Component {

  componentDidMount(){
    // debugger
    // this.props.showStatus && this.move()
    // this.props.changeStatus()
  }

  move = () => {
    const html = document.getElementById("htmlBar")
    const js = document.getElementById("jsBar")
    const react = document.getElementById("reactBar")
    const css = document.getElementById("cssBar")
    const ruby = document.getElementById("rubyBar")
    const ui = document.getElementById("uiBar")
    const photoshop = document.getElementById("photoshopBar")
    const illustrator = document.getElementById("illustratorBar")
    let width = 0

    const id_90 = setInterval(() => {
      if (width >= 75) {
        clearInterval(id_90);
      } else{
        width++;
        html.style.width = width + '%';
        html.innerHTML = width * 1 + 15 + '%';
        css.style.width = width + '%';
        css.innerHTML = width * 1 + 15 + '%';
      }
    }, 25)

    const id_80 = setInterval(() => {
      if (width >= 65) {
        clearInterval(id_80);
      } else{
        width++;
        react.style.width = width + '%';
        react.innerHTML = width * 1 + 15 + '%';
      }
    }, 20)

    const id_70 = setInterval(() => {
      if (width >= 55) {
        clearInterval(id_70);
      } else{
        width++;
        ruby.style.width = width + '%';
        ruby.innerHTML = width * 1 + 15 + '%';
        js.style.width = width + '%';
        js.innerHTML = width * 1 + 15 + '%';
        ui.style.width = width + '%';
        ui.innerHTML = width * 1 + 15 + '%';
      }
    }, 15)

    const id_60 = setInterval(() => {
      if (width >= 45) {
        clearInterval(id_60);
      } else{
        width++;
        photoshop.style.width = width + '%';
        photoshop.innerHTML = width * 1 + 15 + '%';
        illustrator.style.width = width + '%';
        illustrator.innerHTML = width * 1 + 15 + '%';
      }
    }, 30)
  }


  render(){
    console.log('about props', this.props);
    return (
      <React.Fragment>
      <div className='about-me' id='about'>

      { this.props.showStatus && setTimeout(this.move, 700) }

        <Container>
          <h1 className='page-title'>About Me</h1>
          <Grid stackable columns={2}>
            <Grid.Column width={7} className='photos-container'>
              <Segment>
                <div className='photo-1'/>
              </Segment>
            </Grid.Column>

            <Grid.Column width={9} className='skills-container'>

              <div className='bar-container'>
                <div className='js label'>JavaScript</div>
                <div id="jsBar" className='bar'>0%</div>
              </div>
              <div className='bar-container'>
                <div className='react label'>React</div>
                <div id="reactBar" className='bar'>0%</div>
              </div>
              <div className='bar-container'>
                <div className='ruby label'>Ruby/Rails</div>
                <div id="rubyBar" className='bar'>0%</div>
              </div>
              <div className='bar-container'>
                <div className='html label'>HTML</div>
                <div id="htmlBar" className='bar'>0%</div>
              </div>
              <div className='bar-container'>
                <div className='css label'>CSS</div>
                <div id="cssBar" className='bar'>0%</div>
              </div>
              <div className='bar-container'>
                <div className='ui-design label'>UI Design</div>
                <div id="uiBar" className='bar'>0%</div>
              </div>
              <div className='bar-container'>
                <div className='photoshop label'>Photoshop</div>
                <div id="photoshopBar" className='bar'>0%</div>
              </div>
              <div className='bar-container'>
                <div className='illustrator label'>Illustrator</div>
                <div id="illustratorBar" className='bar'>0%</div>
              </div>
            </Grid.Column>
          </Grid>
          <div className='about-me-container'>
            <div>
              <div className='icon-container'>
                <a href='https://www.linkedin.com/in/soyeongoh/' target='_blank' rel='noopener noreferrer'>
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href='https://github.com/axionos' target='_blank' rel='noopener noreferrer'>
                  <i class="fab fa-github-square"></i>
                </a>
                <a href='https://docs.google.com/document/d/1AYRvCdKcBvNb_3NKwQ2xADx076ZHQkcY-FyHO7vguKE/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                  <Button>Resume</Button>
                </a>
              </div>
              <p>Full stack software engineer with a passion for continuous learning and building a sophisticated web application. With experience in Ruby on Rails, JavaScript, React and CSS3 and background as a web designer, I discovered web development through utilizing my skill to visualize web apps. I'm a strong collaborator and I bring exceptional skills in problem-solving and communication through extensive experiences from online marketing and customer service.</p>
            </div>
          </div>
        </Container>
      </div>
      </React.Fragment>
    );
  }
}

export default About;
