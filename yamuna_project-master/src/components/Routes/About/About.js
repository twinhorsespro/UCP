import React, { Component } from 'react';
import './About.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';
import Sections from './Sections/Sections.js';






class About extends Component {
  render() {
    return (
      <div className="">
        <Action />
        <Navbar />
        <Header />
        <Sections />

      </div>
    );
  }
}

export default About;
