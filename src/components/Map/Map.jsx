import React, { useState } from "react";
import { API_KEY } from "../../private";

export default class Map extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      
       if (localStorage.getItem('origin') == 'undefined') {
            localStorage.setItem('origin', 'Valentine Commons');
       }
       if (localStorage.getItem('destination') == 'undefined') {
            localStorage.setItem('destination', 'Carroll Residence Hall');
       }
       this.state = { 
        origin: localStorage.getItem('origin'),
        destination: localStorage.getItem('destination')
     };
    }
    componentDidMount() {
        window.addEventListener('storage',this.localStorageUpdated);
    }

    localStorageUpdated = () => {
        console.log('updated');
        this.setState({
            origin: localStorage.getItem('origin'),
            destination: localStorage.getItem('destination')
        });

    }
    render() {
        return (
                <div
                ref={this.myRef}
                  dangerouslySetInnerHTML={{
                    __html: "<iframe ".concat(
                      'width="400" ',
                      'height="400" ',
                      'frameborder="0" style="border:0" ',
                      'referrerpolicy="no-referrer-when-downgrade" ',
                      'src="https://www.google.com/maps/embed/v1/directions?key=',
                      API_KEY,
                      "&origin=",
                      this.state.origin.replaceAll(" ", "+"),
                      "&destination=",
                      this.state.destination.replaceAll(" ", "+"),
                      "&mode=",
                      this.props.mode,
                      '" allowfullscreen> ',
                      "</iframe>"
                    ),
                  }}
                />
              );
    }
  }

// const Map = (props) => {
//   const [origin, setOrigin] = useState("Valentine Commons");
//   const [destination, setDestination] = useState("Carroll Residence Hall");

//   return (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: "<iframe ".concat(
//           'width="400" ',
//           'height="400" ',
//           'frameborder="0" style="border:0" ',
//           'referrerpolicy="no-referrer-when-downgrade" ',
//           'src="https://www.google.com/maps/embed/v1/directions?key=',
//           API_KEY,
//           "&origin=",
//           origin.replaceAll(" ", "+"),
//           "&destination=",
//           destination.replaceAll(" ", "+"),
//           "&mode=",
//           props.mode,
//           '" allowfullscreen> ',
//           "</iframe>"
//         ),
//       }}
//     />
//   );
// };

// export default Map;
