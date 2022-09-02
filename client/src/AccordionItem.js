import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AccordionItem = ({ cityName, ilce, setNeighboor, setDist, setNeighboorName }) => {
  const [neighboors, setNeighboors] = useState([]);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`/${cityName}/${ilce}`);
      setNeighboors(res.data[0].mahalle);
      setHour(res.data[0].hour);
      setDist(ilce);
    }
    data();
  }, []);

  const renderedData = neighboors.map((neighboor, index) => {
    return (
      <tr onClick={() => { setNeighboor(index); setNeighboorName(neighboor) }}>
        <th scope="row">{index + 1}</th>
        <th>{neighboor}</th>
        <th>{hour}</th>
      </tr>
    );
  })

  return (
    <div >
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mahalle</th>
            <th scope="col">Saat</th>
          </tr>
        </thead>
        <tbody >
          {renderedData}
        </tbody>
      </table>
    </div>
  );
}

export default AccordionItem;