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
          <Button style={{ backgroundColor: "#e99d8b" }} className="button">
            MA 242 to EC 205
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} className="button">
            EC 205 to AFS 373
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} className="button">
            EC 205 to Home
          </Button>
          &nbsp;&nbsp;
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tuesday</Accordion.Header>
        <Accordion.Body>
          <Button style={{ backgroundColor: "#e99d8b" }} className="button">
            Home to MA 242
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} className="button">
            MA 242 to CSC 226
          </Button>
          &nbsp;&nbsp;
          <Button style={{ backgroundColor: "#e99d8b" }} className="button">
            CSC 226 to Home
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Wednesday</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Thursday</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Friday</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MapToggle;
