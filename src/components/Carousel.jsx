import { useState } from 'react';
import { nanoid } from 'nanoid';

import Slide from './ui-elements/Slide';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { slides } from '../data/slidesCarousel';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prev = () => {
    setCurrentSlide((currentSlide) => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1));
    console.log(currentSlide);
  };
  const next = () => {
    setCurrentSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1));
  };

  return (
    <div className='max-w-[1088px] mx-auto px-6 my-10'>
      <div className=' overflow-hidden relative'>
        <div
          className='flex transition-transform ease-out duration-500 '
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <Slide
              key={nanoid()}
              id={slide.id}
              title={slide.title}
              description={slide.description}
              name={slide.name}
              position={slide.position}
              company={slide.company}
            />
          ))}
        </div>

        <div className='absolute inset-0 flex justify-between items-center z-20'>
          <button
            className=' flex items-center justify-center w-[40px] h-[40px] rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
            onClick={prev}>
            <ChevronLeftIcon className='w-[20px]' />
          </button>
          <button
            className=' flex items-center justify-center w-[40px] h-[40px] rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
            onClick={next}>
            <ChevronRightIcon className='w-[20px]' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
