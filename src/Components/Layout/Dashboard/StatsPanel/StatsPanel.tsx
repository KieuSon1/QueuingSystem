import React from 'react';
import CalendarView from '../Calendar/CalendarView';
import SummaryCard from './SummaryCard';
import './statspanel.scss';

interface summary {
  type: string;
  percentage: number;
  total: number;
  active?: number;
  inactive?: number;
  ignore?: number;
}

const summaryData: summary[] = [
  {
    type: 'device',
    percentage: 90,
    total: 4221,
    active: 3799,
    inactive: 422,
  },
  {
    type: 'service',
    percentage: 90,
    total: 4221,
    active: 3799,
    inactive: 422,
  },
  {
    type: 'numberProvide',
    percentage: 90,
    total: 4221,
    active: 3799,
    inactive: 422,
    ignore: 123,
  },
];

const StatsPanel: React.FC = () => {
  const formatDate = (date: Date, format: string) => {};
  return (
    <div className='dashboard__stats'>
      <div className='dashboard__stats__label'>Tổng quan</div>
      <div className='dashboard__stats__summary'>
        {summaryData.map((summary) => (
          <SummaryCard
            type={summary.type}
            total={summary.total}
            percentage={summary.percentage}
            active={summary.active}
            inactive={summary.inactive}
            ignore={summary.ignore}
          />
        ))}
      </div>
      <div className='dashboard__stats__calendar'>
        <CalendarView />
      </div>
    </div>
  );
};

export default StatsPanel;
