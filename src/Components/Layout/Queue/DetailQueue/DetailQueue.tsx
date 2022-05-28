import React from 'react'
import "./detailqueue.scss"
import { useNavigate } from 'react-router';
import { ReactComponent as ReturnIc } from '../../../../Assets/return.svg';

const DetailQueue: React.FC = () => {

    const navigate = useNavigate()
    return (
        <div className='app__queue-layout__detail-queue'>
            <div className='app__queue-layout__detail-queue__title'>Quản lý cấp số</div>
            <div className='app__queue-layout__detail-queue__container'>
                <div className='row form-label'>Thông tin cấp số</div>
                <div className="row"><div className='flex-1'>Họ tên:</div><div className='flex-1'>Loại thiết bị:</div></div>
                <div className="row"><div className='flex-1'>Tên dịch vụ:</div><div className='flex-1'>Trạng thái:</div></div>
                <div className="row"><div className='flex-1'>Số thứ tự:</div><div className='flex-1'>Số điện thoại:</div></div>
                <div className="row"><div className='flex-1'>Thời gian cấp:</div><div className='flex-1'>Địa chỉ Email:</div></div>
                <div className="row"><div className='flex-1'>Hạn sử dụng:</div></div>
            </div>
            <div
                className='app__queue-layout__detail-queue__float-btn'
                onClick={() => navigate('/dashboard/queue/list')}
            >
                <span>
                    <ReturnIc />
                </span>
                <span>Chỉnh sửa thiết bị</span>
            </div>
        </div>
    );
};

export default DetailQueue