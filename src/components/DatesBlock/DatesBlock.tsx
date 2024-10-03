import './DatesBlock.scss'
import MainSwiper from '../MainSwiper';
import Period from '../Period';
import { useState } from 'react';
import historyData from '../../data/historyData.json';

export default function DatesBlock() {
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState<number>(0);
  const countPeriods = historyData.length;

  return (
    <div className="container">
      <div className="column-left"></div>
      <div className="content">
        <h1 className="heading-1">Исторические<br/>даты</h1>
        <Period periodId={currentPeriodIndex} />
        <div className="swiper-wrap">
          <MainSwiper countPeriods={countPeriods}/>
        </div>
      </div>
      <div className="column-right"></div>
    </div>
  );
}
