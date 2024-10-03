import './YearCounter.scss'
import historyData from '../../data/historyData.json';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface YearCounterProps {
  periodId: number;
  counterName: 'year-start' | 'year-end';
}

export default function YearCounter({ periodId, counterName: counterName } : YearCounterProps) {
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const yearNew = historyData[periodId][counterName];

    const currentStartValue = yearRef.current ? parseInt(yearRef.current.textContent || historyData[0][counterName], 10) : 0;

    gsap.fromTo(
      yearRef.current,
      { textContent: currentStartValue },
      {
        textContent: yearNew,
        duration: 1,
        snap: { textContent: 1 },
        ease: "power1.out",
        stagger: 0.2,
      }
    );
  }, [periodId]);
  
  return <span className={`${counterName}`} ref={yearRef}></span>
}
