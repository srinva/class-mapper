import "./App.css";
import React from "react";
import "./components/ClassInput/ClassInput";
import ClassInput from "./components/ClassInput/ClassInput";
import Map from "./components/Map/Map";
import { API_KEY } from "./private";

function App(props) {
  return (
    <>
      <ClassInput />
      <Map
        origin="120 Folsom Drive, Holly Springs, NC"
        destination="Rovisys, Holly Springs, NC"
      />
    </>
  );
}

export default App;
