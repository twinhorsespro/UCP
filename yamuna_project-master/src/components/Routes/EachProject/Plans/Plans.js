import React, { Component } from 'react';

import './Plans.css';

class Plans extends Component {
  render() {
    return (
        <section className="plans col s12">
            <div className="container">
              <div className="row">
                <div className="text">
                  <h2>FLOORPLANS & APARTMENT TYPES</h2>
                  <hr/>
                </div>
                <div className="tabs row">
                  <ul>
                    <li className="active">ONE BEDROOM</li>
                    <li className="">TWO BEDROOM</li>
                    <li className="">THREE BEDROOM</li>
                    <li className="">FOUR BEDROOM</li>
                  </ul>
                </div>
                <div className="tabs-info row">
                  <div className="image col s12 l8 left">

                  </div>
                  <div className="text col s12 l4 right">
                    <div className="price">
                      <h3>$92,000 - $100,000</h3>
                    </div>
                    <div className="area">
                      <h3>AREA: 52m - 120m</h3>
                    </div>
                    <button type="button" name="button">
                        ENQUIRE ABOUT THIS APARTMENT
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

    );
  }
}

export default Plans;
