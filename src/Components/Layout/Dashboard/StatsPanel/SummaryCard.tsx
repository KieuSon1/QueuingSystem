import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import Service from '../../../../Assets/Service';
import Tivi from '../../../../Assets/Tivi';
import './summarycard.scss';

import 'react-circular-progressbar/dist/styles.css';

const SummaryCard: React.FC<{
  type: string;
  percentage: number;
  total: number;
  active?: number;
  inactive?: number;
  ignore?: number;
}> = ({ type, percentage, total, active, inactive, ignore }) => {
  return (
    <div className='app__summary-card'>
      <div className='rounded-graph'>
        <CircularProgressbar
          value={percentage}
          maxValue={100}
          text={`${percentage}%`}
        />
      </div>
      <div className='hight-light-stats'>
        <div className='hight-light-stats__number'>{total}</div>
        <div className='hight-light-stats__type'>
          <div className='type-image'>
            {type === 'device' && <Tivi />}
            {type === 'service' && <Service />}
            {type === 'numberProvide' && <Service />}
          </div>
          <div className='type-name'>
            {type === 'device' && 'Thiết bị'}
            {type === 'service' && 'Dịch vụ'}
            {type === 'numberProvide' && 'Cấp số'}
          </div>
        </div>
      </div>
      <div className='status'>
        {typeof active === 'number' && (
          <div className='status__item acitve'>
            <span />
            <span>Đang hoạt động</span>
            <span>{active}</span>
          </div>
        )}

        {typeof inactive === 'number' && (
          <div className='status__item inactive'>
            <span />
            <span>Ngừng hoạt động</span>
            <span>{inactive}</span>
          </div>
        )}

        {typeof ignore === 'number' && (
          <div className='status__item inactive'>
            <span />
            <span>Bỏ qua</span>
            <span>{ignore}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
