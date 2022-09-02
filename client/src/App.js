import React, { useState } from "react";
import Map from "./Map";
import Navbar from "./Navbar";
import AccordionData from "./AccordionData";
import Neighboor from "./Neighboor";

function App() {

  const [cityName, setCityName] = useState('');
  const [neighboor, setNeighboor] = useState(-1);
  const [dist, setDist] = useState('');
  const [neighboorName, setNeighboorName] = useState('');

  const renderNeighboor = () => {
    if (neighboor === -1) { }
    else {
      return (
        <Neighboor cityName={cityName} neighboor={neighboor} dist={dist} neighboorName={neighboorName} />
      );
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Map setCityName={setCityName} />
          </div>
          <div className="col-6 highlight">
            <AccordionData cityName={cityName} setNeighboor={setNeighboor} setDist={setDist} setNeighboorName={setNeighboorName} />
          </div>
        </div>
        <div className="d-flex bd-highlight flex-column my-5">
          {renderNeighboor()}
        </div>
      </div>
    </div>


  );
}

export default App;
