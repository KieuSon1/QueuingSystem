import React from 'react';
import { useNavigate } from 'react-router';
import './detaildevice.scss';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';

const DetailDevice: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='detail-device'>
      <div className='title'>Quản lý thiết bị</div>
      <div className='container'>
        <div className='row form-label'>Thông tin thiết bị</div>
        <div className="row"><div className='flex-1'>Mã thiết bị:</div><div className='flex-1'>Loại thiết bị:</div></div>
        <div className="row"><div className='flex-1'>Tên thiết bị:</div><div className='flex-1'>Tên đăng nhập:</div></div>
        <div className="row"><div className='flex-1'>Địa chỉ IP:</div><div className='flex-1'>Mật khẩu:</div></div>
        <div className="row"><div className='flex-1'>Dịch vụ sử dụng:</div></div>
      </div>
      <div
        className='add-device-btn'
        onClick={() => navigate('/dashboard/device/detail')}
      >
        <span>
          <AddIc />
        </span>
        <span>Cập nhật thiết bị</span>
      </div>
    </div>
  );
};

export default DetailDevice;
