import React from 'react'
import Select from '../../../Select/Select'
import "./listqueue.scss"
import Table, {  } from '../../../Table/Table'
import Textbox, { InputType } from '../../../Textbox/Textbox'
import { useNavigate } from 'react-router';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import { activeStatus, connectionStatus, deviceList, queueProvider, services } from '../../../Mock'
import DatePicker from '../../../DatePicker/DatePicker'

const ListQueue: React.FC = () => {
    const navigate = useNavigate()
  return (
      <>
          <div className='queue-list'>
              <div className='row label'>Danh sách cấp số</div>
              <div className='row filters'>
                  <Select
                      label='Tên dịch vụ'
                      options={services}
                    //   width={300}
                  />
                  <Select
                      label='Trạng thái kết nối'
                      options={connectionStatus}
                    //   width={300}
                  />
                  <Select
                      label='Nguồn cấp'
                      options={queueProvider}
                    //   width={300}
                  />
                  <DatePicker label='Chọn thời gian'/>
                  <Textbox label="Từ khoá" type={InputType.search} boxWidth={300} />
              </div>
              <div className='row table'>
                  <Table data={deviceList} displayRow={9} />
              </div>
          </div>
          <div
              className='add-device-btn'
              onClick={() => navigate('/dashboard/queue/new')}
          >
              <span>
                  <AddIc />
              </span>
              <span>Cấp số mới</span>
          </div>
      </>
  )
}

export default ListQueue