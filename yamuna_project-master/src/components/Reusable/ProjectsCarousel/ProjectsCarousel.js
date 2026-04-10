import React, { Component } from 'react';
import Slider from 'react-slick';
import './ProjectsCarousel.css';

const projects = [
  {
    id: 1,
    tower: "Lotus Tower",
    logo: "/images/projects/ucpphotos/lotus-tower-logo.png",
    description: "10 premium apartments designed with elegance and tranquility, inspired by the purity of the lotus.",
    location: "Hyderabad, India",
    type: "Residential",
    apartments: "10 Apartments",
    status: "Upcoming",
    image: "/images/projects/ucpphotos/ucp-project-photo-09.jpg"
  },
  {
    id: 2,
    tower: "Lotus Tower",
    logo: "/images/projects/ucpphotos/lotus-tower-logo.png",
    description: "Thoughtfully designed community spaces with lush green courtyards and open landscapes.",
    location: "Hyderabad, India",
    type: "Residential",
    apartments: "10 Apartments",
    status: "Upcoming",
    image: "/images/projects/ucpphotos/ucp-project-photo-10.jpg"
  },
  {
    id: 3,
    tower: "Lotus Tower",
    logo: "/images/projects/ucpphotos/lotus-tower-logo.png",
    description: "Spacious courtyard with children's play area and beautifully landscaped gardens.",
    location: "Hyderabad, India",
    type: "Residential",
    apartments: "10 Apartments",
    status: "Upcoming",
    image: "/images/projects/ucpphotos/ucp-project-photo-11.jpg"
  },
  {
    id: 4,
    tower: "Jasmine Tower",
    logo: "/images/projects/ucpphotos/jasmine-tower-logo.png",
    description: "Serene walkways and open spaces crafted for a premium lifestyle, inspired by the grace of jasmine.",
    location: "Hyderabad, India",
    type: "Residential",
    apartments: "10 Apartments",
    status: "Upcoming",
    image: "/images/projects/ucpphotos/ucp-project-photo-12.jpg"
  },
  {
    id: 5,
    tower: "Jasmine Tower",
    logo: "/images/projects/ucpphotos/jasmine-tower-logo.png",
    description: "Modern architecture with world-class finishes, elegant design and premium quality construction.",
    location: "Hyderabad, India",
    type: "Residential",
    apartments: "10 Apartments",
    status: "Upcoming",
    image: "/images/projects/ucpphotos/ucp-project-photo-13.jpg"
  }
];

class ProjectsCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1 } }
      ]
    };

    return (
      <div className="projetcsCarousel">
        <div className="container">
          <div className="row">
            <h1 className="body-h1">OUR PROJECTS</h1>
            <Slider className="inner" {...settings}>
              {projects.map((project) => {
                return (
                  <div key={project.id} className='wrapper'>
                    <div className='carouselImages'>
                      <img src={project.image} alt={project.tower} style={{ width: "348px", height: "243px", objectFit: "cover" }} />
                    </div>
                    <div className="description">
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={project.logo} alt={project.tower + " logo"} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                        <h6 style={{ margin: 0 }}>{project.tower}</h6>
                      </div>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-info">
                      <div className="col s6 project-info-icons left">
                        <i className="ion-ios-location-outline"></i>
                        <p>{project.location}</p>
                        <br/>
                        <i className="ion-ios-home-outline"></i>
                        <p>{project.type}</p>
                      </div>
                      <div className="col s6 project-info-icons right">
                        <i className="ion-ios-pricetag-outline"></i>
                        <p>{project.apartments}</p>
                        <br/>
                        <i className="ion-ios-checkmark-outline"></i>
                        <p>{project.status}</p>
                      </div>
                      <button className="more-details">MORE DETAILS</button>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsCarousel;
