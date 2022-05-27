import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Button/Button';
import Select from '../../../Select/Select';
import Textbox from '../../../Textbox/Textbox';
import './modifyservice.scss';

const ModifyService: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='modify-service'>
      <div className='title'>Quản lý dịch vụ</div>
      <div className='container'>
        <div className='row form-label'>Thông tin dịch vụ</div>
        <div className='row'>
          <div className='col flex-1'>
            <Textbox label='Mã dịch vụ *' />
            <Textbox label='Tên dịch vụ *' />
          </div>
          <div className='col flex-1'>
            {' '}
            Mô tả
            <textarea />
          </div>
        </div>
        <div className='rule'>Quy tắc cấp số</div>

        <div className='row note'>* Là trường thông tin bắt buộc</div>
      </div>
      <div className='btn__bottom'>
        <Button
          text='Hủy bỏ'
          isOutlined
          onClick={() => navigate('/dashboard/molifyservice/list')}
        />
        <Button
          text='Thêm thiết bị'
          onClick={() => navigate('/dashboard/molifyservice/list')}
        />
      </div>
    </div>
  );
};

export default ModifyService;
