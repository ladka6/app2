import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
const Neighboor = ({ cityName, dist, neighboor, neighboorName }) => {
  const [toplamArz, setToplamArz] = useState(0);
  const [toplamKullanim, setToplamKullanim] = useState(0);
  const [kayip, setKayip] = useState(0);
  const [kacak, setKacak] = useState(0);


  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`/${cityName}/${dist}/${neighboor}`);
      setKacak(res.data[0].kacak);
      setKayip(res.data[0].kayip);
      setToplamArz(res.data[0].toplamArz);
      setToplamKullanim(res.data[0].toplamKullanim);
    }
    data();
  }, [cityName, dist, neighboor]);

  return (
    <React.Fragment>
      <div className='text-center'>
        <h1 className='text-uppercase'>{cityName}-{dist}-{neighboorName}</h1>
      </div>
      <table clasName="table shadow mt-4">
        <thead>
          <tr>
            <th scope="col">Toplam Arz</th>
            <th scope="col">Toplam Kullanım</th>
            <th scope="col">Kayıp</th>
            <th scope='col'> Kaçak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{toplamArz}</td>
            <td>{toplamKullanim}</td>
            <td>{kayip}</td>
            <td>{kacak}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ width: '1000px' }}>
        <BarChart toplamArz={toplamArz} toplamKullanim={toplamKullanim} kayip={kayip} kacak={kacak} />
      </div>
    </React.Fragment>
  );
};

export default Neighboor;