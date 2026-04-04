import React, { Component } from 'react';

import './Sections.css';

class Sections extends Component {
  render() {
    return (
        <section className="services-section col s12">
        <div className="services-section-bg row">
          <h1>OUR SERVICES</h1>
          <hr/>
        </div>
        <div className="services-section-front col s12">
          <div className="services-section-each first row">
            <div className="services-text first-txt col s12 m6">
              <h5>Real Estate Investment</h5>
              <p>1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it .</p>
            </div>
            <br/>
            <div className="services-img col s12 m6">
            </div>
          </div>
          <div className="services-section-each second row">
            <div className="services-text right col s12 m6">
              <h5>Real Estate Management</h5>
              <p>1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it .</p>
            </div>
            <div className="services-img left col s12 m6">
            </div>
          </div>
          <div className="services-section-each third row">
            <div className="services-text col s12 m6">
              <h5>Companies Establisment</h5>
              <p>1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it .</p>
            </div>
            <div className="services-img col s12 m6">
            </div>
          </div>
          <div className="services-section-each forth row">
            <div className="services-text right col s12 m6">
              <h5>Airport Pickups</h5>
              <p>1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it .</p>
            </div>
            <div className="services-img left col s12 m6">
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Sections;
