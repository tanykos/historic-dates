import './DatesBlock.scss'
import MainSwiper from '../MainSwiper';
import { useState } from 'react';
import YearCounter from '../YearCounter';

interface DatesBlockProps {
  paginationClass: string;
}

export default function DatesBlock({ paginationClass }: DatesBlockProps) {
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState<number>(0);

  return (
    <div className="container">
      <div className="column-left"></div>
      <div className="content">
        <div className="layer-bg">
          <div className="item-1">
            <h1 className="heading-1">Исторические<br/>даты</h1>
          </div>
          <div className="item-2"></div>
          <div className="item-3"></div>
          <div className="item-4"></div>
        </div>

        <div className="period">
          <YearCounter counterName='year-start' periodId={currentPeriodIndex}/>
          <YearCounter counterName='year-end' periodId={currentPeriodIndex}/>
        </div>

        <MainSwiper setCurrentPeriodIndex={setCurrentPeriodIndex} paginationClass={paginationClass}/>
      </div>
      <div className="column-right"></div>
    </div>
  );
}
