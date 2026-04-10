import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './Navbar.css';
import Image from './logo.png';

class Navbar extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <i onClick={this.showSettings} className="material-icons sidenav-trigger right">menu</i>
        <Menu >
          <img className="sidenav-logo" src={Image} />
          <a id="home" className="menu-item" href="/">HOME</a>
          <a id="projects" className="menu-item" href="/projects">PROJECTS</a>
          <a id="about" className="menu-item" href="/about">ABOUT</a>
          <a id="contact" className="menu-item" href="/contact">CONTACT</a>
        </Menu>
        <div className="navbar-fixed">
          <nav className="normal-nav">
            <div className="nav-wrapper">
              <a href="index.html" className="brand-logo">
                <img className="responsive-img" src={Image} />
                <span className="top-text">Urban Crown Projects</span>
              </a>

              <ul className="nav-links center hide-on-med-and-down">
                <li><a href="/">HOME</a></li>
                <li><a href="/projects">PROJECTS</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
              </ul>

            </div>

          </nav>
        </div>

      </div>
    );
  }

}

export default Navbar;
