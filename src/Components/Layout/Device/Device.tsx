import React from 'react';
import { ReactComponent as ArrowIc } from '../../../Assets/arrow.svg';
import './device.scss';
import { Outlet } from 'react-router';

const Device: React.FC = () => {
  return (
    <div className="app__layout-device">
      <div className="sitemap">
        <span>Thiết bị</span>
        <span>
          <ArrowIc />
        </span>
        <span>Danh sách thiết bị</span>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Device;
