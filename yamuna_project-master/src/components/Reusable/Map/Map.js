import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const mapStyles = require('./styles.json');

class Map extends Component {
    static defaultProps = {
    center: {lat: 41.016431,lng: 28.653232},
    zoom: 15,
    // styles: {mapStyles}


  };

  render() {
    return (
          <div className="map col s11">
                    <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCqSra2dJrK9aHJW9sRaHtdkVhx2luhbf0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // defaultStyle={mapStyles}

        >
          <AnyReactComponent
            lat={41.016431}
            lng={28.653232}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
          </div>
    );
  }
}

export default Map;
