import React, { Component } from 'react';

import './Sections.css';

class Sections extends Component {
  render() {
    return (
      <div className="about-outter">
      <div className="container">
      <div className="row">
        <section className="about col s12">

            <h1 className="body-h1">ABOUT US</h1>
            <hr/>
            <p>
              Urban Crown Projects is redefining urban living in Hyderabad by creating future-ready residential
              communities that combine design, sustainability, and smart planning. Driven by innovation and guided
              by integrity, we deliver homes that meet evolving lifestyles while ensuring long-term investment value.
              Our mission is to build not just properties, but thriving communities people are proud to call home.
            </p>
            <p>
              Urban Crown Projects is a trusted name in Hyderabad's real estate market, delivering premium residential
              communities designed for global investors. We understand the unique needs of NRI buyers and provide a
              seamless, transparent investment experience — from property selection to handover. With a strong focus
              on quality construction, legal clarity, and high appreciation potential, we ensure your investment back
              home is secure, rewarding, and future-ready.
            </p>

        </section>
        <section className="nri-connect col s12">
          <h1 className="body-h1">NRI CONNECT</h1>
          <hr/>
          <p>
            At Urban Crown Projects, we simplify real estate investment for NRIs by offering reliable, transparent,
            and hassle-free property solutions in Hyderabad. Our projects are built with superior quality standards
            and strategic locations to maximize long-term returns. With dedicated support, clear documentation, and
            timely delivery, we help you invest with confidence — no matter where you are in the world.
          </p>
        </section>

        <section className="in-the-news col s12">
          <h1 className="body-h1">IN THE NEWS</h1>
          <hr/>
          <div className="news-grid">
            {[1,2,3,4,5,6,7,8].map((num) => (
              <div key={num} className="news-card">
                <img
                  src={`/images/projects/ucpphotos/ucp-project-photo-0${num}.jpg`}
                  alt={`Press coverage ${num}`}
                  className="news-image"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="our-team">
          <div className="container">
            <div className="row">
              <div className="our-team-div col s12">
                <div className="our-team-each col s12 m4">
                  <img src="assets/images/about/person1.jpg"  alt=""/>
                  <div className="name">
                    <h5>JOHN DOE</h5>
                  </div>
                  <h5>HEAD OF SALES</h5>
                  <div className="position">
                    <p><i className="material-icons">email</i>example@gmail.com</p>
                    <p><i className="material-icons">call</i>+090578676867</p>
                  </div>
                </div>
                <div className="our-team-each col s12 m4">
                  <img src="assets/images/about/person2.jpg" alt=""/>
                  <div className="name">
                    <h5>JOHN DOE</h5>
                  </div>
                  <h5>HEAD OF SALES</h5>
                  <div className="position">
                    <p><i className="material-icons">email</i>example@gmail.com</p>
                    <p><i className="material-icons">call</i>+090578676867</p>
                  </div>
                </div>
                <div className="our-team-each col s12 m4">
                  <img src="assets/images/about/person3.jpg" alt=""/>
                  <div className="name">
                    <h5>JOHN DOE</h5>
                  </div>
                  <h5>HEAD OF SALES</h5>
                  <div className="position">
                    <p><i className="material-icons">email</i>example@gmail.com</p>
                    <p><i className="material-icons">call</i>+090578676867</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        </div>
      </div>
    );
  }
}

export default Sections;
