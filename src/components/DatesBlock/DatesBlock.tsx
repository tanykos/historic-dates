import './DatesBlock.scss'
import MainSwiper from '../MainSwiper';
import { useState } from 'react';
import YearCounter from '../YearCounter';

export default function DatesBlock() {
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState<number>(0);

  return (
    <div className="container">
      <div className="column-left"></div>
      <div className="content">
        <h1 className="heading-1">Исторические<br/>даты</h1>

        <div className="period">
          <YearCounter counterName='year-start' periodId={currentPeriodIndex}/>
          <YearCounter counterName='year-end' periodId={currentPeriodIndex}/>
        </div>

        <div className="swiper-wrap">
          <MainSwiper setCurrentPeriodIndex={setCurrentPeriodIndex}/>
        </div>
      </div>
      <div className="column-right"></div>
    </div>
  );
}
