import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import './ProjectsCarousel.css';


class ProjectsCarousel extends Component {
  constructor () {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount () {
    axios.get('/api/greeting')
    .then(result => {
      this.setState({
        products: result.data
      })
    })
  }

  render() {
              var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive:[
                  { breakpoint: 400, settings: { slidesToShow: 1 } }
                ]
        };
    return (
      <div className="projetcsCarousel ">
              <div className="container">
                <div className="row">
                <h1 className="body-h1">PROJECTS</h1>
                <Slider className="inner" {...settings}>
                {this.state.products.map((product)=>{
                  console.log(product);
                  return (
                    <div className='wrapper '>
                      <div className={'carouselImages cayan-'+product._id}>
                        <h6><img src={product.images[0]} alt="image" style={{ width: "348px", height: "243px" }} /></h6>
                      </div>
                      <div className="description">
                        <h6>Description</h6>
                        <h5>{product.price}</h5>
                        <p>{product.description}</p>
                      </div>
                      <div className="project-info ">
                        <div className="col s6 project-info-icons left">
                          <i className="ion-ios-location-outline "></i>
                          <p>{product.location}</p>
                          <br/>
                          <i className="ion-ios-home-outline"></i>
                          <p>{product.type}</p>
                          <br/>
                          <i className="ion-ios-photos-outline"></i>
                          <p>{product.size}</p>
                          <br/>
                        </div>
                        <div className="col s6 project-info-icons right">
                          <i className="ion-ios-pricetag-outline "></i>
                          <p>bedrooms: {product.bedrooms}</p>
                          <br/>
                          <i className="ion-ios-pricetag-outline "></i>
                          <p>bathrooms: {product.bathrooms}</p>
                          <br/>
                          <i className="ion-ios-pricetag-outline "></i>
                          <p>living areas: {product.living_area}</p>
                          <br/>
                        </div>
                        <button className="more-details">MORE DETAILS</button>
                      </div>
                    </div>
                  )
                })}
                </Slider>
              </div>
            </div>
      </div>
    );
  }

}


export default ProjectsCarousel;
