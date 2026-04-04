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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, ligula ac blandit volutpat,
              sapien magna efficitur odio, eu porttitor nisi ex suscipit eros. Ut pretium egestas pharetra. Sed nulla arcu,
              imperdiet tempor vehicula varius, blandit a nunc. Mauris eu maximus orci. Mauris et nulla porttitor, ullamcorper
              quam a, eleifend sapien. Cras ut metus turpis. Integer a mi et arcu blandit mollis sit amet eu sapien. In quis
              semper massa. Nunc nec ipsum eu mauris ullamcorper volutpat. Nullam tristique gravida venenatis. Donec sollicitudin
              aliquam congue. Cras tempor condimentum mi sollicitudin congue.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, ligula ac blandit volutpat,
              sapien magna efficitur odio, eu porttitor nisi ex suscipit eros. Ut pretium egestas pharetra. Sed nulla arcu,
              imperdiet tempor vehicula varius, blandit a nunc. Mauris eu maximus orci. Mauris et nulla porttitor, ullamcorper
              quam a, eleifend sapien. Cras ut metus turpis. Integer a mi et arcu blandit mollis sit amet eu sapien. In quis
              semper massa. Nunc nec ipsum eu mauris ullamcorper volutpat. Nullam tristique gravida venenatis. Donec sollicitudin
              aliquam congue. Cras tempor condimentum mi sollicitudin congue.
            </p>

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
