import React from "react";

function getMap(origin, destination)  {
    var originMod = origin.replace(" ","+");
    var destinationMod = destination.replace(" ", "+");
    var bike = fetch('https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyCCjkUAUMwYMmgeYQmgSH7VjU8kjSHztr4&origin=EB+III&destination=Valentine+Commons&mode=bicycling')
    .then(response => response.json())
    .then(data => {
        return data.routes[0].legs[0].value;
    }
    );
    
    var walk = fetch('https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyCCjkUAUMwYMmgeYQmgSH7VjU8kjSHztr4&origin=EB+III&destination=Valentine+Commons&mode=walking')
    .then(response => response.json())
    .then(data => {
        return data.routes[0].legs[0].value;
    }
    );

    var transit = walk = fetch('https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyCCjkUAUMwYMmgeYQmgSH7VjU8kjSHztr4&origin=EB+III&destination=Valentine+Commons&mode=transit')
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

const Map = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: '<iframe '.concat(
            'width="700" ',
            'height="700" ',
            'frameborder="0" style="border:0" ',
            'referrerpolicy="no-referrer-when-downgrade" ',
            'src="https://www.google.com/maps/embed/v1/directions?key=',
            'AIzaSyCCjkUAUMwYMmgeYQmgSH7VjU8kjSHztr4',
            '&origin=120+Folsom+Drive,+Holly+Springs,+NC&destination=Rovisys+Holly+Springs"',
            ' allowfullscreen>',
            '</iframe>')}} />
      );
  };
  
export default Map;

