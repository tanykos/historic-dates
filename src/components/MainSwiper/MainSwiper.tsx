import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './MainSwiper.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import historyData from '../../data/historyData.json';
import { useState } from 'react';
import padWithZero from '../../utils/padWithZero';
import { FULL_ROTATION } from './constants';
import { animateCircle, animatePaginationBullets, toggleDigit, toggleInfo } from './animations';

interface MainSwiperProps {
  setCurrentPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
  paginationClass: string;
}


export default function MainSwiper({ setCurrentPeriodIndex, paginationClass }: MainSwiperProps) {
  const angle = FULL_ROTATION / historyData.length;
  const [currentSlide, setCurrentSlide] = useState(1);

  gsap.registerPlugin(useGSAP);

  const pagination = {
    el: `.${paginationClass}`,
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}" style="--angle: ${(index - 1) * angle}deg;">
        <span class="digit" style="--angle: ${-(index - 1) * angle}deg;">
          ${
            index + 1
          }
          <span class="topic">${historyData[index].topic}</span>
        </span>
      </span>`;
    },
  };

  useGSAP(() => {
    animatePaginationBullets(paginationClass);
  })

  useGSAP(() => {
      const bullets = gsap.utils.toArray(".swiper-pagination-bullet") as Element[];

      bullets.forEach((bullet) => {
        const digit = bullet.childNodes[1];
        bullet.addEventListener('mouseenter', () => {
          if (!bullet.classList.contains('swiper-pagination-bullet-active') && digit instanceof Element) {
            toggleInfo(bullet, true);
            toggleDigit(digit, true);
          }
        });
        bullet.addEventListener('mouseleave', () => {
          if (!bullet.classList.contains('swiper-pagination-bullet-active') && digit instanceof Element) {
            toggleInfo(bullet, false);
            toggleDigit(digit, false);
          }
        });
      });
    },[currentSlide]
  );
  
  return (
    <>
      <div className={`${paginationClass} custom-pagination`}></div>
      <div className="fraction-pagination">
        {padWithZero(currentSlide)}/{padWithZero(historyData.length)}
      </div>
      <Swiper
        className="main-swiper"
        modules={[EffectFade, Pagination, Navigation]}
        pagination={pagination}
        navigation
        allowTouchMove={false}
        effect={'fade'}
        speed={1000}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          const activeIndex = swiper.activeIndex;
          setCurrentPeriodIndex(activeIndex);
          setCurrentSlide(activeIndex + 1);
          animateCircle(paginationClass, activeIndex);
          animatePaginationBullets(paginationClass, activeIndex);
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
    </>
  );
}
