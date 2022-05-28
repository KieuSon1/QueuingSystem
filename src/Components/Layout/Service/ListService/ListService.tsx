import React from 'react';
import { useNavigate } from 'react-router';
import Select from '../../../Select/Select';
import Table from '../../../Table/Table';
import './listservice.scss';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import { activeStatus, connectionStatus, serviceDetailList } from '../../../Mock';
import DatePicker from '../../../DatePicker/DatePicker';
import Textbox, { InputType } from '../../../Textbox/Textbox';

const ListService: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='service-list'>
        <div className='row label'>Danh sách dịch vụ</div>
        <div className='row filters'>
          <Select
            label='Trạng thái hoạt động'
            options={activeStatus}
            width={300}
          />
          <DatePicker label='Chọn thời gian'/>
          <Textbox label="Từ khoá" type={InputType.search}/>
        </div>
        <div className='row table'>
          <Table data={serviceDetailList} displayRow={9} />
        </div>
      </div>
      <div
        className='add-service-btn'
        onClick={() => navigate('/dashboard/service/new')}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm dịch vụ</span>
      </div>
    </>
  );
};

export default ListService;
