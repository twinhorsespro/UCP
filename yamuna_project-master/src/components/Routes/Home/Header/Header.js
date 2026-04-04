import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="home-page-header">
          <div className="hero-text">
            <h3 className="">FIND YOUR</h3>
            <h1 className="follow1 follow">DREAM HOME</h1>
            <form>
              <input clasName="search-box" placeholder="search what you want"/>
            </form>
          </div>
      </div>

    );
  }
}

export default Header;
