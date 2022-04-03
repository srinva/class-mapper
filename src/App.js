import React from "react";
import "./components/ClassInput/ClassInput";
import ClassInput from "./components/ClassInput/ClassInput";
import Map from "./components/Map/Map";
import { Row, Col, Container, Stack } from "react-bootstrap";
import MapToggle from "./components/MapToggle/MapToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  return (
    <>
      <div className="App">
        <h1>Class-Mapper</h1>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={8}>
              <div className="ClassInput">
                <ClassInput />
              </div>
              <div className="MapToggle">
                <MapToggle />
              </div>
            </Col>
            <Col>
              <Stack gap={3}>
                <div className="Map">
                  <h3>Walking</h3>
                  <Map mode="walking" />
                </div>
                <div className="Map">
                  <h3>Bicycling</h3>
                  <Map mode="bicycling" />
                </div>
                <div className="Map">
                  <h3>Transit</h3>
                  <Map mode="transit" />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
