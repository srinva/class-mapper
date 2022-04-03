import "./App.css";
import React from "react";
import "./components/ClassInput/ClassInput";
import ClassInput from "./components/ClassInput/ClassInput";
import Map from "./components/Map/Map";
import { API_KEY } from "./private";
import { Row, Col, Container } from "react-bootstrap";

function App(props) {
  var classes = JSON.parse(localStorage.getItem("classes"));
  var origin = '';
  var destination = '';
  if (classes.length >= 2) {
    origin = classes[0].location;
    destination = classes[1].location;
  }
  
  return (
    <Container>
      <ClassInput key="input"/>
      <Row>
        <Col>
          <Map key="bike"
            mode="bicycling"
          />
        </Col>
        <Col>
          <Map key="walk"
            mode="walking"
          />
        </Col>
        <Col>
          <Map key="transit"
            mode="transit"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
