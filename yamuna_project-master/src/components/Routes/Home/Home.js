import React, { Component } from 'react';
import './Home.css';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import ProjectsCarousel from '../../Reusable/ProjectsCarousel/ProjectsCarousel.js';
import Header from './Header/Header.js';
import Whyus from './Whyus/Whyus.js';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Header />
        <Whyus />
        <ProjectsCarousel />
      </div>
    );
  }
}

export default Home;
