import React, { Component } from 'react';
import './Projects.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';
import Towers from './Towers/Towers.js';

class Projects extends Component {
  render() {
    return (
      <div className="">
        <Action />
        <Navbar />
        <Header />
        <Towers />
      </div>
    );
  }
}

export default Projects;
