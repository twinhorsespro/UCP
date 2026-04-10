import React, { Component } from 'react';
import './Towers.css';

class Towers extends Component {
  render() {
    return (
      <div className="towers-section">
        <div className="container">
          <h1 className="body-h1">OUR TOWERS</h1>
          <div className="row towers-row">

            {/* Lotus Tower */}
            <div className="col s12 m6 tower-card">
              <div className="tower-image-wrapper">
                <img
                  src="/images/projects/ucpphotos/ucp-project-photo-09.jpg"
                  alt="Lotus Tower"
                  className="tower-image"
                />
                <div className="tower-overlay">
                  <img
                    src="/images/projects/ucpphotos/lotus-tower-logo.png"
                    alt="Lotus Tower Logo"
                    className="tower-logo"
                  />
                  <h2 className="tower-name">Lotus Tower</h2>
                </div>
              </div>
              <div className="tower-details">
                <p className="tower-desc">Premium residential apartments designed with elegance and tranquility, inspired by the purity of the lotus.</p>
                <div className="tower-specs">
                  <span><i className="ion-ios-home-outline"></i> 10 Apartments</span>
                  <span><i className="ion-ios-location-outline"></i> Hyderabad, India</span>
                  <span><i className="ion-ios-checkmark-outline"></i> Upcoming</span>
                </div>
              </div>
            </div>

            {/* Jasmine Tower */}
            <div className="col s12 m6 tower-card">
              <div className="tower-image-wrapper">
                <img
                  src="/images/projects/ucpphotos/ucp-project-photo-13.jpg"
                  alt="Jasmine Tower"
                  className="tower-image"
                />
                <div className="tower-overlay">
                  <img
                    src="/images/projects/ucpphotos/jasmine-tower-logo.png"
                    alt="Jasmine Tower Logo"
                    className="tower-logo"
                  />
                  <h2 className="tower-name">Jasmine Tower</h2>
                </div>
              </div>
              <div className="tower-details">
                <p className="tower-desc">Graceful living spaces crafted for a premium lifestyle, inspired by the elegance and fragrance of jasmine.</p>
                <div className="tower-specs">
                  <span><i className="ion-ios-home-outline"></i> 10 Apartments</span>
                  <span><i className="ion-ios-location-outline"></i> Hyderabad, India</span>
                  <span><i className="ion-ios-checkmark-outline"></i> Upcoming</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Towers;
