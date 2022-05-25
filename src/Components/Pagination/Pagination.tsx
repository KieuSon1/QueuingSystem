import React from 'react';
import './pagination.scss';
import { ReactComponent as ArrowIc } from '../../Assets/expand.svg';
import { useState } from 'react';

const Pagination: React.FC<{
  data?: Array<any>;
  noPage?: number;
  onChange?: Function;
}> = ({ noPage, onChange, data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="app__pagination">
      <div className="app__pagination__btn prev">
        <ArrowIc />
      </div>
      <div className="app__pagination__indexes">
        {data &&
          data.map((item, index) => {
            if (index <= 6) {
              return (
                <div
                  className={`index ${index === selectedIndex && `selected`}`}
                >
                  {index + 1}
                </div>
              );
            }
          })}
      </div>
      <div className="app__pagination__btn next">
        <ArrowIc />
      </div>
    </div>
  );
};

export default Pagination;
