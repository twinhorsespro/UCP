import React, { Component } from 'react';

import './PhotoTour.css';

class PhotoTour extends Component {
  render() {
    return (
        <section className="photo-tour col s12">
          <div className="container">
            <div className="row">
              <div className="text">
                <h2>PHOTO TOUR</h2>
                <hr/>
              </div>
              <div className="image col s12">
                <div className="left-btn col s1">
                  <p>PREV</p>
                </div>
                <img className="responsive-img col s10" src="https://res.cloudinary.com/cayangroup9292/image/upload/v1522149937/projects/14.jpg" alt=""/>
                <div className="right-btn col s1">
                  <p>NEXT</p>
                </div>
              </div>
            </div>
          </div>
        </section>

    );
  }
}

export default PhotoTour;
