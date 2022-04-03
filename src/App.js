import './App.css';
import React from 'react';
import "./components/ClassInput/ClassInput";
import ClassInput from "./components/ClassInput/ClassInput";
import Map from "./components/Map/Map"
import { API_KEY } from './private';
import {Row, Col} from "react-bootstrap";

function App(props) {
  
  return (
  <div>
  <ClassInput/>
  <Row>
    <Col>
    <Map origin='120 Folsom Drive, Holly Springs, NC' destination='NCSU' mode='bicycling'/>
    </Col>
    <Col>
    <Map origin='120 Folsom Drive, Holly Springs, NC' destination='NCSU' mode='walking'/>
    </Col>
    <Col>
    <Map origin='120 Folsom Drive, Holly Springs, NC' destination='NCSU' mode='transit'/>
    </Col>
  </Row>
  </div>
  );
}



export default App;
