import React, { useState, useEffect } from "react";
import axios from 'axios';
import AccordionItem from "./AccordionItem";
import './Accordion.css';

const AccordionData = ({ cityName, setDist, setNeighboor, setNeighboorName }) => {
  const [dists, setDists] = useState([]);

  useEffect(() => {
    if (cityName === '') { }
    else {
      const data = async () => {
        const res = await axios.get(`/${cityName}`);
        setDists(res.data[0].dists);
      }
      data();
    }
  }, [cityName]);

  const renderedData = dists.map((ilce, index) => {
    return (
      <React.Fragment key={index} >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${ilce}`} aria-expanded="false" aria-controls={`${ilce}`}>
              {ilce}
            </button>
          </h2>
          <div id={`${ilce}`} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionData">
            <div className="accordion-body">
              <AccordionItem cityName={cityName} ilce={ilce} setNeighboor={setNeighboor} setDist={setDist} setNeighboorName={setNeighboorName} />
            </div>
          </div>
        </div>

      </React.Fragment >

    );
  })

  return (
    <div className="accordion" id="accordionData">
      {renderedData}
    </div>
  );
};

export default AccordionData;