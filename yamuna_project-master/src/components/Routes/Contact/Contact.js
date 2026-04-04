import React, { Component } from 'react';
import './Contact.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';

import Getintouch from '../../Reusable/Getintouch/Getintouch.js';







class Contact extends Component {
  render() {
    return (
      <div className="contact-us">
        <Action />
        <Navbar />
        <Header />
        <Getintouch />
      </div>
    );
  }
}

export default Contact;
