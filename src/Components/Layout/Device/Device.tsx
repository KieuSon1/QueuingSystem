import React from 'react';
import './device.scss';
import { Outlet } from 'react-router';

const Device: React.FC = () => {
  return (
    <div className="app__layout-device">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Device;
