import React from 'react';
import Navbar from './components/Navbar'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Blog from './containers/Blog'
import Contact from './containers/Contact'

class App extends React.Component {
  render(){
    return (
      <div className="app">
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
