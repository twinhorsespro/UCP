import React, { Component } from 'react';
import axios from 'axios';
import './Getintouch.css';

import Map from '../Map/Map.js';

class Getintouch extends Component {

  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      phone: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
     });
  }

  handleEmailChange = event => {
      this.setState({
        email: event.target.value
       });
    }

  handlePhoneChange = event => {
        this.setState({
          phone: event.target.value
         });
         console.log(this.state.phone);
      }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };



    var config = {
       headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
       }

};
    axios.post(`https://api.formbucket.com/f/buk_5pZlX4fRjDrezI22h0yu8oYL`,  {user} , config)
      .then(res => {
        alert("Thank you, We will contact you soon");

      })
        .catch(function(error) {
          console.log(error.response)
  });

  }



  render() {
    return (
    <section className="contact-section" id="contact-section">
        <div className="container">
          <div className="row">
            <h1 className="body-h1">CONTACT US</h1>
            <div className="contact-social col s1">
              <div className="contact-social-icons twitter">
                <a href="#" target="_blank"></a>
              </div>
              <br/>
              <div className="contact-social-icons facebook">
                <a href="#" target="_blank"></a>
              </div>
              <br/>
              <div className="contact-social-icons instagram">
                <a href="#" target="_blank"></a>
              </div>
              <br/>
              <div className="contact-social-icons youtube">
                <a href="#" target="_blank"></a>
              </div>
              <br/>
              <div className="contact-social-icons linkedin">
                <a href="#" target="_blank"></a>
              </div>
            </div>

            <div className="contact-input col s12 l4">
              <h5>Get in touch</h5>
              <p>please fill the form and we will contact you during work hours.</p>
              <form onSubmit={this.handleSubmit}>
               <div className="input-field">

                <input className="validate" type="text" name="name" placeholder="" onChange={this.handleNameChange} required/>
                <label  htmlFor="icon_prefix" type="text">Full Name</label>
              </div>

              <div className="input-field">

                <input className="validate" type="text" name="email" placeholder="" onChange={this.handleEmailChange} required/>
                <label  htmlFor="icon_email" type="text" data-error="wrong" data-success="right">Email</label>
              </div>
              <div className="input-field">

                <input className="validate" type="text" name="phone" placeholder="" onChange={this.handlePhoneChange} required/>
                <label  htmlFor="icon_telephone" type="text" >Phone Number</label>
              </div>
                <button className="btn waves-effect waves-light" type="submit">send</button>
              </form >

              <div className="contact-info">
                <i className="material-icons left ">location_on</i>
                <p className="">Location, Location, Location</p>
                <br/>
                <i className="material-icons left ">email</i>
                <p className="">test@email.com</p>
                <br/>
                <i className="material-icons left ">local_phone</i>
                <p className="">+123456789</p>
              </div>
              <div className="contact-social-mobile">
                // <a href="#" target="_blank"><img src="assets/images/contact-icons/twitter.png" alt=""/></a>
                // <a href="#" target="_blank" className="facebook"><img src="assets/images/contact-icons/facebook.png" alt=""/></a>
                // <a href="#" target="_blank"><img src="assets/images/contact-icons/instagram.png" alt=""/></a>
                // <a href="#" target="_blank"><img src="assets/images/contact-icons/youtube.png" alt=""/></a>
                // <a href="#" target="_blank"><img src="assets/images/contact-icons/linkedin.png" alt=""/></a>
              </div>
            </div>
          <Map />

          </div>
        </div>
      </section>
    );
  }
}

export default Getintouch;
