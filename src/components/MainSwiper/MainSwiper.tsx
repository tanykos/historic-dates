import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './MainSwiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import historyData from '../../data/historyData.json';

interface MainSwiperProps {
  setCurrentPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function MainSwiper({ setCurrentPeriodIndex }: MainSwiperProps) {
  return (
    <Swiper
      className="main-swiper"
      modules={[EffectFade, Pagination, Navigation]}
      pagination={{ type: 'fraction' }}
      navigation
      allowTouchMove={false}
      effect={'fade'}
      speed={1000}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        const activeIndex = swiper.activeIndex;
        setCurrentPeriodIndex(activeIndex);
      }}
    >
      {historyData.map((periodData, index) => (
        <SwiperSlide key={periodData.id}>
          <Swiper
            className="nested-swiper"
            modules={[Navigation]}
            navigation={{
              nextEl: '.nested-swiper-next',
              prevEl: '.nested-swiper-prev',
            }}
            spaceBetween={100}
            slidesPerView={3}
          >
            {periodData.events.map((slideData, index) => (
              <SwiperSlide key={slideData.id}>
                <header className="event-header">{slideData.year}</header>
                <article className="event-description">{slideData.description}</article>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev nested-swiper-prev"></div>
            <div className="swiper-button-next nested-swiper-next"></div>
          </Swiper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
