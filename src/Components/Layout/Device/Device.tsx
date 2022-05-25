import React from 'react';
import { ReactComponent as ArrowIc } from '../../../Assets/arrow.svg';
import Pagination from '../../Pagination/Pagination';
import Select from '../../Select/Select';
import Table, { IDeviceRow, Service } from '../../Table/Table';
import './device.scss';

const activeStatus = ['Tất cả', 'Hoạt động', 'Ngưng hoạt động'];
const connectionStatus = ['Tất cả', 'Kết nối', 'Mất kết nối'];

const tableData: IDeviceRow[] = [
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_02',
    deviceName: 'Kiosk2',
    ipAddress: '192.169.1.2',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
];

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
      <div className="app__layout-device__container">
        <div className="row label">Danh sách thiết bị</div>
        <div className="row filters">
          <Select
            label="Trạng thái hoạt động"
            options={activeStatus}
            width={300}
          />
          <Select
            label="Trạng thái kết nối"
            options={connectionStatus}
            width={300}
          />
          {/* <Textbox label="Từ khoá" /> */}
        </div>
        <div className="row table">
          <Table data={tableData} />
        </div>
        <div className="row pagination">
          <Pagination data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Device;
