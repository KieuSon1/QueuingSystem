import React from 'react';
import './table.scss';
export enum DeviceActiveStatus {
  Active = 'Hoạt động',
  Inactive = 'Ngưng hoạt động',
}
export enum DeviceConnectionStatus {
  Connecting = 'Kết nối',
  Disconnected = 'Mất kết nối',
}
export enum Service {
  Heart = 'Tim mạch',
  Obstetric = 'Sản phụ khoa',
  Dental = 'Nha sĩ',
  General = 'Khám tổng quát',
}

export enum ColumnLabels {
  deviceId = 'Mã thiết bị',
  deviceName = 'Tên thiết bị',
  ipAddress = 'Địa chỉ IP',
  activeStatus = 'Trạng thái hoạt động',
  connectStatus = 'Trạng thái kết nối',
  services = 'Dịch vụ sử dụng',
  displayDetail = 'Chi tiết',
  displayUpdate = 'Cập nhật',
}

export enum DisplayedColumns {
  deviceId,
  deviceName,
  ipAddress,
  activeStatus,
  connectStatus,
  services,
  displayDetail,
  displayUpdate,
}

export interface IDeviceRow {
  deviceId: string;
  deviceName: string;
  ipAddress: string;
  activeStatus: DeviceActiveStatus;
  connectStatus: DeviceConnectionStatus;
  services: Service[];
  displayDetail: boolean;
  displayUpdate: boolean;
}

type T = keyof typeof ColumnLabels;

const Table: React.FC<{ data: IDeviceRow[] }> = ({ data }) => {
  return (
    <table className="app__table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((column: string) => {
            return <th>{ColumnLabels[column as T]}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr>
              {Object.values(row).map((value, index) => {
                if (index === DisplayedColumns.displayDetail) {
                  return (
                    <td>
                      <a href="#">{value === true && `Chi tiết`}</a>
                    </td>
                  );
                }
                if (index === DisplayedColumns.displayUpdate) {
                  return (
                    <td>
                      <a href="#">{value === true && `Cập nhật`}</a>
                    </td>
                  );
                } else {
                  return <td>{value}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
