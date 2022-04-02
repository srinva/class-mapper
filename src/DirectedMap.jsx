import React, { Component } from "react";

import {
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
class DirectedMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: null,
      transitMode: null
    };
  }


  async calculateFastest() {
    const origin = this.props.origin;
    const destination = this.props.destination;
    const directionsService = new window.google.maps.DirectionsService();
    const bikeTime = directionsService.route(
      {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.BICYCLING,
          provideRouteAlternatives: true,
      },
      (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
              console.log(result)
              this.setState({
                  directions: result
              });
          } else {
              return -1;
          }
      }
  );
  }

  componentDidMount() {
      const directionsService = new window.google.maps.DirectionsService();

      const origin = this.props.origin;//'120 Folsom Drive, Holly Springs, NC';
      const destination = this.props.destination;

      directionsService.route(
          {
              origin: origin,
              destination: destination,
              travelMode: window.google.maps.TravelMode.BICYCLING,
              provideRouteAlternatives: true,
          },
          (result, status) => {
              if (status === window.google.maps.DirectionsStatus.OK) {
                  console.log(result)
                  this.setState({
                      directions: result
                  });
              } else {
                  console.error(`error fetching directions ${result}`);
              }
          }
      );
  }

  render() {
      const GoogleMapExample = withGoogleMap(props => (
          <GoogleMap
              defaultCenter={{ lat: 6.5244, lng:  3.3792 }}
              defaultZoom={13}
          >
              <DirectionsRenderer
                  directions={this.state.directions}
              />
          </GoogleMap>
      ));

      return (
          <div>
              <GoogleMapExample
                  containerElement={<div style={{ height: `500px`, width: "500px" }} />}
                  mapElement={<div style={{ height: `100%` }} />}
              />
          </div>


        );
      }
}

export default DirectedMap;