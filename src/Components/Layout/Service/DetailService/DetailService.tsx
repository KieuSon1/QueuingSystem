import React from 'react'
import { useNavigate } from 'react-router'
import Select from '../../../Select/Select'
import Table, { IServiceQueue, QueueStatus } from '../../../Table/Table'
import Textbox, { InputType } from '../../../Textbox/Textbox'
import "./detailservice.scss"
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';

const serviceQueue: IServiceQueue[] = [
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },

]

const DetailService: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='detail-service'>
      <div className='title'>Quản lý dịch vụ</div>
      <div className='detail-service__container'>
        <div className="service-detail">
          <div className="row form-label">Thông tin dịch vụ</div>
          <div className="row">
            <div className="flex-1">Mã dịch vụ:</div>
            <div >201</div>
          </div>
          <div className="row">
            <div className="flex-1">Tên dịch vụ:</div>
            <div >Khám tim mạch</div>
          </div>
          <div className="row">
            <div className="flex-1">Mô tả:</div>
            <div className="flex-2">Chuyên các bệnh lý về tim</div>
          </div>
          <div className="row form-label">Quy tắc cấp số</div>
          <div className="row">
            <div>Tăng tự động:</div>
            <div ></div>
          </div>
          <div className="row">
            <div>Prefix:</div>
            <div ></div>
          </div>
          <div className="row">
            <div>Reset mỗi ngày</div>
          </div>
        </div>
        <div className="service-queue">
          <div className="row filters">
            <Select label='Trạng thái' options={["Tất cả", "Đã hoàn thành", "Đã thực hiện", "Vắng"]} />
            <Textbox label='Từ khoá' type={InputType.search} />
          </div>
          <div className="row table">
            <Table data={serviceQueue} displayRow={8} />
          </div>
        </div>
      </div>
      <div
        className='add-service-btn'
        onClick={() => navigate('/dashboard/device/new')}
      >
        <span>
          <AddIc />
        </span>
        <span>Cập nhật danh sách</span>
      </div>
    </div>
  )
}

export default DetailService