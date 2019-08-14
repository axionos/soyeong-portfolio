import React from 'react';
import Intro from './containers/Intro'
import Navbar from './components/Navbar'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Blog from './containers/Blog'
import Footer from './components/Footer'
// import Contact from './containers/Contact'

class App extends React.Component {
  state = {
    visible: false
  }

  showSkills = () => {
    return this.state.visible ? null : this.setState({ visible: true })
  }


  render(){
    console.log('app state', this.state);
    return (
      <div className="app">
        <Intro showSkills={this.showSkills} />
        <Navbar showSkills={this.showSkills} />
        <About status={this.state.visible} />
        <Portfolio />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
