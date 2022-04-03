import { Accordion, Button } from "react-bootstrap";
import React from "react";

function onClickToggle(origin, dest) {
  window.localStorage.setItem("origin", origin);
  window.localStorage.setItem("destination", dest);
}

const MapToggle = () => {
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Monday</Accordion.Header>
        <Accordion.Body>
          <Button
            style={{ backgroundColor: "#e99d8b" }}
            onClick={() =>
              onClickToggle("Valentine Commons", "101 Current Drive")
            }
          >
            Home to MA 242
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} 
          onClick={() =>
            onClickToggle("101 Current Drive", "2801 Founders Drive")
          }
          className="button">
            MA 242 to EC 205
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} 
          onClick={() =>
            onClickToggle("2801 Founders Drive", "1070 Partners Way")
          } className="button">
            EC 205 to AFS 373
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} 
          onClick={() =>
            onClickToggle("1070 Partners Way", "Valentine Commons")
          } className="button">
            AFS 373 to Home
          </Button>
          &nbsp;&nbsp;
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tuesday</Accordion.Header>
        <Accordion.Body>
          <Button style={{ backgroundColor: "#e99d8b" }} 
          onClick={() =>
            onClickToggle("Valentine Commons", "101 Current Drive")
          } className="button">
            Home to MA 242
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} onClick={() =>
            onClickToggle("101 Current Drive", "111 Lampe Drive")
          } className="button">
            MA 242 to CSC 216
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} onClick={() =>
            onClickToggle("111 Lampe Drive", "Valentine Commons")
          } className="button">
            CSC 216 to Home
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Wednesday</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Thursday</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Friday</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MapToggle;
