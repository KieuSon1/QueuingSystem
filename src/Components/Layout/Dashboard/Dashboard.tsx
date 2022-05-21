import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Calendar1 from '../../../Assets/Calendar1';
import Calendar2 from '../../../Assets/Calendar2';
import Wait from '../../../Assets/Wait';
import Passing from '../../../Assets/Passing';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './dashboard.scss';
import StatsPanel from './StatsPanel/StatsPanel';

const Counter: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: '',
        data: [2500, 3000, 2900, 3500, 4200, 4000],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const legend = {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: '#323130',
      fontSize: 14,
    },
  };

  // const options = {
  //   title: {
  //     display: true,
  //     text: 'Chart Title',
  //   },
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           suggestedMin: 0,
  //           suggestedMax: 100,
  //         },
  //       },
  //     ],
  //   },
  // };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bang thong ke theo ngay',
      },
    },
  };
  return (
    <div className='app__layout-dashboard__counter'>
      <div className='counter-label'>Biểu đồ cấp số</div>
      <div className='counter-cards'>
        <div className='counter-cards__card'>
          <div className='row'>
            <div className='image'>
              <Calendar1 />
            </div>
            <div className='label'>Số thứ tự đã cấp</div>
          </div>
          <div className='row'>
            <div className='count'>4.221</div>
            <div className='diff raise'>32,41%</div>
          </div>
        </div>
        <div className='counter-cards__card'>
          <div className='row'>
            <div className='image'>
              <Calendar1 />
            </div>
            <div className='label'>Số thứ tự đã cấp</div>
          </div>
          <div className='row'>
            <div className='count'>4.221</div>
            <div className='diff drop'>32,41%</div>
          </div>
        </div>
        <div className='counter-cards__card'>
          <div className='row'>
            <div className='image'>
              <Calendar1 />
            </div>
            <div className='label'>Số thứ tự đã cấp</div>
          </div>
          <div className='row'>
            <div className='count'>4.221</div>
            <div className='diff drop'>32,41%</div>
          </div>
        </div>
        <div className='counter-cards__card'>
          <div className='row'>
            <div className='image'>
              <Calendar1 />
            </div>
            <div className='label'>Số thứ tự đã cấp</div>
          </div>
          <div className='row'>
            <div className='count'>4.221</div>
            <div className='diff raise'>32,41%</div>
          </div>
        </div>
      </div>
      <div className='counter-chart'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className='app__layout-dashboard'>
      <div className='app__layout-dashboard__sitemap'>Dashboard</div>
      <Counter />
      <StatsPanel />
    </div>
  );
};

export default Dashboard;
