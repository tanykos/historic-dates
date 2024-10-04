import { BULLET_ACTIVE_SIZE, BULLET_INACTIVE_SIZE, FULL_ROTATION } from './constants';
import historyData from '../../data/historyData.json';
import gsap from 'gsap';

const angle = FULL_ROTATION / historyData.length;

export const animatePaginationBullets = (paginationClass: string, activeIndex: number = 0) => {
  const rotationAngle = FULL_ROTATION - activeIndex * angle;

    gsap.to(`.${paginationClass} .swiper-pagination-bullet-active`, {
      width: BULLET_ACTIVE_SIZE,
      height: BULLET_ACTIVE_SIZE,
      borderWidth: 1,
      backgroundColor: '#F4F5F9',
      transform: 'rotate(var(--angle)) translate(var(--pagination-bullets-active-offset), -30px)',
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  
    gsap.to(`.${paginationClass} .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)`, {
      width: BULLET_INACTIVE_SIZE,
      height: BULLET_INACTIVE_SIZE,
      borderWidth: BULLET_INACTIVE_SIZE / 2,
      backgroundColor: '#42567A',
      transformOrigin: '0 0',
      transform: `rotate(var(--angle)) translate(var(--pagination-bullets-offset), -${BULLET_INACTIVE_SIZE / 2}px)`,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  
    gsap.to(`.${paginationClass} .swiper-pagination-bullet-active .digit`, {
      transform: `rotate(${rotationAngle + angle * (activeIndex+1)}deg)`,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(`.${paginationClass} .swiper-pagination-bullet-active .digit`, {
      opacity: 1, 
      fontSize: '20px',
      duration: 0.3,
      delay: 0.3,
      ease: 'power2.out',
    });

    gsap.to(`.${paginationClass} .swiper-pagination-bullet-active .digit .topic`, {
      visibility: 'visible', 
      fontSize: '20px',
      duration: 0.5,
      delay: 0.6,
      ease: 'power2.out',
    });

    gsap.to(`.${paginationClass} .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) .topic`, {
      visibility: 'hidden', 
      fontSize: '0px',
      duration: 0.2,
      ease: 'power2.out',
    });
  
    gsap.to(`.${paginationClass} .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) .digit`, {
      opacity: 0,
      fontSize: '0px',
      transform: `rotate(calc(var(--angle) + ${activeIndex * angle}deg))`,
      ease: 'power2.out',
    });
};

export const animateCircle = (paginationClass: string, activeIndex: number) => {
  const rotationAngle = FULL_ROTATION - activeIndex * angle;
    
  gsap.to(`.${paginationClass}`, {
    rotate: `${rotationAngle}deg`,
    duration: 1,
    ease: 'power2.out',
  });
};

export const toggleInfo = (element: Element, isVisible: boolean) => {
  gsap.to(element, {
    width: isVisible ? BULLET_ACTIVE_SIZE : BULLET_INACTIVE_SIZE,
    height: isVisible ? BULLET_ACTIVE_SIZE : BULLET_INACTIVE_SIZE,
    borderWidth: isVisible ? 1 : 3,
    backgroundColor: isVisible ? '#F4F5F9' : '#42567A',
    transformOrigin: '0 0',
    transform: isVisible
      ? 'rotate(var(--angle)) translate(var(--pagination-bullets-active-offset), -30px)'
      : 'rotate(var(--angle)) translate(var(--pagination-bullets-offset), -3px)',
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out',
  });
};

export const toggleDigit = (element: Element, isVisible: boolean) => {
  gsap.to(element, {
    opacity: isVisible ? 1 : 0,
    fontSize: isVisible ? '20px' : '0px',
    ease: 'power2.out',
  });
};

