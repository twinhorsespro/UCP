import React, { Component } from 'react';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import './EachProject.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';
import PhotoTour from './PhotoTour/PhotoTour.js';
import Plans from './Plans/Plans.js';
import Privileges from './Privileges/Privileges.js';
import Location from './Location/Location.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import PRODUCTS from '../../Data/CarouselData.js';






class EachProject extends Component {
  render() {
    const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);

    const currentProduct = product;
    return (
      <div>
        <h3 id="product-name">{currentProduct.id}</h3>
      </div>
    );
  }
}

export default EachProject;
