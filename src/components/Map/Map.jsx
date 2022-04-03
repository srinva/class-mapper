import React, { useState } from "react";
import { API_KEY } from "../../private";

const Map = (props) => {
  var classes = JSON.parse(window.localStorage.getItem("classes"));
  const [origin, setOrigin] = useState("Valentine Commons");
  const [destination, setDestination] = useState("Carroll Residence Hall");

  if (classes.length >= 2) {
    // origin = classes[0].location;
    // destination = classes[1].location;
  }
  // setOrigin(classes[0].location);
  // setDestination(classes[1].location);

  // origin = useState(classes[0].location);
  // destination = useState(classes[0].location);
  // useState({
  //     origin: classes[0].location,
  //     destination: classes[1].location
  // })

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<iframe ".concat(
          'width="400" ',
          'height="400" ',
          'frameborder="0" style="border:0" ',
          'referrerpolicy="no-referrer-when-downgrade" ',
          'src="https://www.google.com/maps/embed/v1/directions?key=',
          API_KEY,
          "&origin=",
          origin.replaceAll(" ", "+"),
          "&destination=",
          destination.replaceAll(" ", "+"),
          "&mode=",
          props.mode,
          '" allowfullscreen> ',
          "</iframe>"
        ),
      }}
    />
  );
};

export default Map;
