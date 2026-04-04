import React, { Component } from 'react';

import './Location.css';

class Location extends Component {
  render() {
    return (
    <section className="location">
        <div className="container">
          <div className="row">
            <div className="text">
              <h2>LOCATION & NEARBY PLACES</h2>
              <hr/>
            </div>
            <div className="tabs col s12 row">
              <ul>
                <li>
                  <div className="airport"></div>
                  <p>ATATURK AIRPORT</p>
                </li>
                <li>
                  <div className="airport"></div>
                  <p>NEW AIRPORT</p>
                </li>
                <li>
                  <div className="taksim"></div>
                  <p>TAKSIM</p>
                </li>

              </ul>
            </div>

          </div>
        </div>
        <div className="map row col s12">
          <img className="responsive-img" src="https://res.cloudinary.com/cayangroup9292/image/upload/v1522066595/map.jpg" alt=""/>
        </div>
      </section>

    );
  }
}

export default Location;
