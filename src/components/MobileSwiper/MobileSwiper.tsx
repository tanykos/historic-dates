import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './MobileSwiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import historyData from '../../data/historyData.json';
import { useState } from 'react';
import padWithZero from '../../utils/padWithZero';

interface MobileSwiperProps {
  setCurrentPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
}


export default function MobileSwiper({ setCurrentPeriodIndex }: MobileSwiperProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  
  return (
    <>
      <Swiper
        className="main-swiper-mobile"
        modules={[EffectFade, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        allowTouchMove={false}
        effect={'fade'}
        speed={1000}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          const activeIndex = swiper.activeIndex;
          setCurrentPeriodIndex(activeIndex);
          setCurrentSlide(activeIndex + 1);
        }}
      >
        {historyData.map((periodData) => (
          <SwiperSlide key={periodData.id}>
            <Swiper
              className="nested-swiper"
              spaceBetween={20}
              slidesPerView={1}
            >
              {periodData.events.map((slideData) => (
                <SwiperSlide key={slideData.id}>
                  <header className="event-header">{slideData.year}</header>
                  <article className="event-description">{slideData.description}</article>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>
        ))}

         <div className="fraction-pagination">
          {padWithZero(currentSlide)}/{padWithZero(historyData.length)}
        </div>
      </Swiper>
    </>
  );
}
