import React, {useState} from "react";
import { API_KEY } from "../../private";

function getMap(origin, destination)  {
    var originMod = origin.replaceAll(" ","+");
    var destinationMod = destination.replaceAll(" ", "+");
    var bike = 0;
    var walk = 0;
    var transit = 0;
    fetch(`https://maps.googleapis.com/maps/api/directions/json?key=${API_KEY}&origin=${originMod}&destination=${destinationMod}&mode=bicycling`,{mode: 'no-cors'})
    .then(response => response.json())
    .then(data => {
        bike = data.routes[0].legs[0].value;
        fetch(`https://maps.googleapis.com/maps/api/directions/json?key=${API_KEY}&origin=${originMod}&destination=${destinationMod}&mode=walking`,{mode: 'no-cors'})
        .then(response => response.json())
        .then(data => {
            walk =  data.routes[0].legs[0].value;
            fetch(`https://maps.googleapis.com/maps/api/directions/json?key=${API_KEY}&origin=${originMod}&destination=${destinationMod}&mode=transit`,{mode: 'no-cors'})
            .then(response => response.json())
            .then(data => {
                transit = data.routes[0].legs[0].value;
                if (bike < walk && bike < transit) {
                    return 'bicycling';
                }
            
                if (walk < bike && walk < transit) {
                    return 'walking';
                }
            
                if (transit < walk && transit < bike) {
                    return 'transit';
                }
            }
            );
        }
        );
    }
    );
    

    

    
  }

const Map = (props) => {
    const [origin, setOrigin] = useState('');
    const [dest, setDest] = useState('');
    console.log(getMap(props.origin, props.destination))
    return (
        <div dangerouslySetInnerHTML={{ __html: '<iframe '.concat(
            'width="400" ',
            'height="400" ',
            'frameborder="0" style="border:0" ',
            'referrerpolicy="no-referrer-when-downgrade" ',
            'src="https://www.google.com/maps/embed/v1/directions?key=',
            API_KEY,
            '&origin=',
            props.origin.replaceAll(" ", "+"),
            '&destination=',
            props.destination.replaceAll(" ", "+"),
            '&mode=',
            props.mode,
            '" allowfullscreen> ',
            '</iframe>')}} />
      );
  };
  
export default Map;

