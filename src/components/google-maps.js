import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMout() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // Can access this component with this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
