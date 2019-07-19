import React from 'react';
import Intro from './containers/Intro'
import Navbar from './components/Navbar'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Blog from './containers/Blog'
import Contact from './containers/Contact'

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <Intro />
        <Navbar />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default App;
