import './App.css';
import React from 'react';
import "./components/ClassInput/ClassInput";
import ClassInput from "./components/ClassInput/ClassInput";
import Map from "./components/Map/Map"

function App(props) {
  
  return (
  <>
  <ClassInput/>,
  <div dangerouslySetInnerHTML={{ __html: '<iframe '.concat(
        'width="700" ',
        'height="700" ',
        'frameborder="0" style="border:0" ',
        'referrerpolicy="no-referrer-when-downgrade" ',
        'src="https://www.google.com/maps/embed/v1/directions?key=',
        'INSERT_KEY_HERE',
        '&origin=120+Folsom+Drive,+Holly+Springs,+NC&destination=Rovisys+Holly+Springs"',
        ' allowfullscreen>',
        '</iframe>')}} />
  </>
  );
}



export default App;
