import React, {useState} from "react";
import { API_KEY } from "../../private";

function getMap(origin, destination)  {
    var originMod = origin.replaceAll(" ","+");
    var destinationMod = destination.replaceAll(" ", "+");
    var bike = fetch(`https://maps.googleapis.com/maps/api/directions/json?key=${API_KEY}&origin=${originMod}&destination=${destinationMod}&mode=bicycling`)
    .then(response => response.json())
    .then(data => {
        return data.routes[0].legs[0].value;
    }
    );
    
    var walk = fetch(`https://maps.googleapis.com/maps/api/directions/json?key=${API_KEY}&origin=${originMod}&destination=${destinationMod}&mode=walking`)
    .then(response => response.json())
    .then(data => {
        return data.routes[0].legs[0].value;
    }
    );

    var transit = walk = fetch(`https://maps.googleapis.com/maps/api/directions/json?key=${API_KEY}&origin=${originMod}&destination=${destinationMod}&mode=transit`)
    .then(response => response.json())
    .then(data => {
        return data.routes[0].legs[0].value;
    }
    );

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

const Map = (props) => {
    const [origin, setOrigin] = useState('');
    const [dest, setDest] = useState('');

    return (
        <div dangerouslySetInnerHTML={{ __html: '<iframe '.concat(
            'width="700" ',
            'height="700" ',
            'frameborder="0" style="border:0" ',
            'referrerpolicy="no-referrer-when-downgrade" ',
            'src="https://www.google.com/maps/embed/v1/directions?key=',
            API_KEY,
            '&origin=',
            props.origin.replaceAll(" ", "+"),
            '&destination=',
            props.destination.replaceAll(" ", "+"),
            '" allowfullscreen> ',
            '</iframe>')}} />
      );
  };
  
export default Map;

