import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Whyus.css';

class Whyus extends Component {
  render() {
    return (
      <section className="why-choose-us">
          <div className="container">
            <div className="row">
              <h1 className="body-h1">WHY CHOOSE US</h1>
              <div className="why-choose-us-info">
                <div className="col s12 m6 l12">
                  <div className="why-choose-us-info-each col s4">
                    <div className="col s3 bg bg-pro"></div>
                    <div className="col s9 why-choose-us-text">
                      <h6>History</h6>
                      <p>We are Urban Crown Projects, evolving as one of the fastest growing real estate companies, enabling our clients to get the best deals available in the industry.</p>
                    </div>
                  </div>
                  <div className="why-choose-us-info-each col s4">
                    <div className="col s3 bg bg-fast_com"></div>
                    <div className="col s9 why-choose-us-text">
                      <h6>Commitment</h6>
                      <p>We provide end to end support with a dynamic team having a clear understanding of client’s requirements. We guarantee excellent service and always thrive to serve the customer.</p>
                    </div>
                  </div>
                  <div className="why-choose-us-info-each col s4">
                    <div className="col s3 bg bg-fast_com"></div>
                    <div className="col s9 why-choose-us-text">
                      <h6>Vision</h6>
                      <p>We provide end to end support with a dynamic team having a clear understanding of client’s requirements. We guarantee excellent service and always thrive to serve the customer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Whyus;
