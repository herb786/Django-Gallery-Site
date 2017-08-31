import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';

class Navbar extends Component {
    
  render() {
    return (  
        <BrowserRouter>
        <div>
        <nav className="navbar">
        <div className="navbar-menu is-active">
          <div className="navbar-start">
              <a className="navbar-item"><Link to="/">Home</Link></a>
              <a className="navbar-item" href=""><Link to="/gallery">Gallery</Link></a>
              <a className="navbar-item" href=""><Link to="/about">About</Link></a>
            
          </div>
        </div>
        </nav>
        <Route exact path="/" render={(props) => (<Gallery />)} />
        <Route path="/gallery" render={(props) => (<Gallery />)}/>   
        <Route path="/about" render={(props) => (<About />)}/>
        </div>
        </BrowserRouter>
        
    );
  }
}

export default Navbar;