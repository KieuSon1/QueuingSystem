import React from 'react'
import './number.scss'
import { ReactComponent as XmarkIc } from '../../Assets/xmark.svg'

const Number: React.FC = () => {
  return (
    <div className='modal'>
      <div className="number-top">
        <div className='number-top__icon'><XmarkIc /></div>
        <div className="number-top__header">Số thứ tự được cấp</div>
        <div className="number-top__content">2001201</div>
        <div className="number-top__service">DV: Khám hàng mặt (tại quần số 1)</div>
      </div>
      <div className="number-bottom">
        <div className="number-bottom__date">Thời gian cấp: 9:30 11/10/2022</div>
        <div className="number-bottom__expiry-date">Hạn sử dụng: 17:30 11/10/2022</div>
      </div>
    </div>
  )
}

export default Number