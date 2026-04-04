import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Header.css';



class Header extends Component {

  render() {

    return (
      <section className="header col s12">
        <div className="project-code">
          
        </div>
        <div className="project-details row">

          <div className="col s12 l6 project-details-wrapper">
            <div className="project-details-each col s4 l4">
              <div className="image col s12 location-icons">

              </div>
              <div className="text col s12">
                <p>Location</p>
                <p>Istanbul, Turkey</p>
              </div>
            </div>
            <div className="project-details-each col s4 l4">
              <div className="image col s12 delivery-icons">

              </div>
              <div className="text col s12">
                <p>Delivery</p>
                <p>2019</p>
              </div>
            </div>
            <div className="project-details-each col s4 l4">
              <div className="image col s12 type-icons">

              </div>
              <div className="text col s12">
                <p>Type</p>
                <p>1+1, 2+1, 3+1</p>
              </div>
            </div>
          </div>


          <div className="col s12 l6 project-details-wrapper">
            <div className="project-details-each col s4 l4">
            <div className="image col s12 area-icons">
            </div>
            <div className="text col s12">
              <p>Area</p>
              <p>120m - 210m</p>
            </div>
          </div>
            <div className="project-details-each col s4 l4">
            <div className="image col s12 installments-icons">

            </div>
            <div className="text col s12">
              <p>Installments</p>
              <p>48 months</p>
            </div>
          </div>
            <div className="project-details-each col s4 l4">
            <div className="image col s12 status-icons">

            </div>
            <div className="text col s12">
              <p>Status</p>
              <p>Ready</p>
            </div>
          </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Header;
