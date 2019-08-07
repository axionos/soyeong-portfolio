import React from 'react';
import Intro from './containers/Intro'
import Navbar from './components/Navbar'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Blog from './containers/Blog'
// import Contact from './containers/Contact'

class App extends React.Component {
  state = {
    skillsVisible: false
  }

  showSkills = () => {
    return this.state.skillsVisible ? null : this.setState({skillsVisible: true})
  }


  render(){
    console.log('app state', this.state);
    return (
      <div className="app">
        <Intro showSkills={this.showSkills}/>
        <Navbar showSkills={this.showSkills}/>
        <About showStatus={this.state.skillsVisible}/>
        <Portfolio />
        <Blog />
      </div>
    );
  }
}

export default App;
