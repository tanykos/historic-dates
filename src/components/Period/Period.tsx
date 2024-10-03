import './Period.scss'
import historyData from '../../data/historyData.json';

interface PeriodProps {
  periodId: number;
}

export default function Period({ periodId } : PeriodProps) {
  return (
    <div className="period">
       <span className='year-start'>{historyData[periodId]['year-start']}</span>
       <span className='year-end'>{historyData[periodId]['year-end']}</span>
    </div>
  )
}
