import './MobileDatesBlock.scss'
import { useState } from 'react';
import YearCounter from '../YearCounter';
import MobileSwiper from '../MobileSwiper';

export default function MobileDatesBlock() {
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState<number>(0);

  return (
    <div className="container-mobile">
      <h1 className="heading-1-mobile">Исторические<br/>даты</h1>

        <div className="period">
          <YearCounter counterName='year-start' periodId={currentPeriodIndex}/>
          <YearCounter counterName='year-end' periodId={currentPeriodIndex}/>
        </div>

        <MobileSwiper setCurrentPeriodIndex={setCurrentPeriodIndex}/>
    </div>
  );
}
