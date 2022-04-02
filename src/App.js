import './App.css';
import React from 'react';
import DirectedMap from './DirectedMap';
import { withScriptjs } from "react-google-maps";
require('dotenv').config()



// function App() {
//   return (
//     <div dangerouslySetInnerHTML={{ __html: `<iframe
//     width="700"
//     height="700"
//     frameborder="0" style="border:0"
//     referrerpolicy="no-referrer-when-downgrade"
//     src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCCjkUAUMwYMmgeYQmgSH7VjU8kjSHztr4&origin=120+Folsom+Drive,+Holly+Springs,+NC&destination=Rovisys+Holly+Springs"
//     allowfullscreen>
//     </iframe>`}} />
//   );
// }

function App() {

  const MapLoader = withScriptjs(DirectedMap);

  return (

<div className="App">
  <MapLoader 
      origin="EB III, Raleigh, NC"
      destination="Valentine Commons, Raleigh, NC"
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCjkUAUMwYMmgeYQmgSH7VjU8kjSHztr4"
      loadingElement={<div style={{ height: `100%` }} />}
  />

</div>
  );
}

export default App;
