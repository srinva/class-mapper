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
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <div className="ClassInput">
              <ClassInput />
            </div>
            <MapToggle />
          </Col>
          <Col>
            <Stack gap={3}>
              <div>
                <Map
                  origin="120 Folsom Drive, Holly Springs, NC"
                  destination="NCSU"
                  mode="bicycling"
                />
              </div>
              <div>
                <Map
                  origin="120 Folsom Drive, Holly Springs, NC"
                  destination="NCSU"
                  mode="transit"
                />
              </div>
              <div>
                <Map
                  origin="120 Folsom Drive, Holly Springs, NC"
                  destination="NCSU"
                  mode="walking"
                />
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
      //
    </div>
  );
}

export default App;
