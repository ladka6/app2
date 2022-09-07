import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  layout: {
    padding: 20
  }
};

const labels = ['Toplam Arz', 'Toplam Kullanım', 'Kayıp', 'Kaçak'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => 100),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };

const BarChart = ({ toplamArz, toplamKullanim, kayip, kacak }) => {
  const dataDeneme = [toplamArz, toplamKullanim, kayip, kacak];
  const dataSet = {
    labels,
    datasets: [
      {
        barPercentage: 1,
        barThickness: 40,
        maxBarThickness: 40,
        minBarLength: 1,
        label: 'Dataset 1',
        data: labels.map((i, index) => dataDeneme[index]),
        backgroundColor: 'rgb(63, 76, 255)',
        borderWidth: 1
      },
    ],
  }

  return <Bar options={options} data={dataSet} />;
}

export default BarChart


