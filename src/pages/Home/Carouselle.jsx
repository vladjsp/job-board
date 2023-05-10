import { useState } from 'react';
import { nanoid } from 'nanoid';

//import Slide from '../../ui-elements/Slide';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { slides } from '../../data/slidesCarousel';

import { getTestimonialPhoto, getCompanyLogo } from '../../utils/slide';

const Carouselle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    setCurrentSlide((currentSlide) => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1));
    console.log(currentSlide);
  };
  const next = () => {
    setCurrentSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1));
    console.log(currentSlide);
  };

  return (
    <div className=' overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((s, i) => (
          <div className='block min-w-full lg:max-w-[872px] mx-auto px-4'>
            <div className='flex flex-col-reverse lg:flex-row max-w-3xl justify-between items-end text-left whitespace-normal mx-auto'>
              <div className='max-w-[468px] mb-2 items-end text-left whitespace-normal  mx-auto '>
                <h3 className='mb-4 mt-0 text-2xl font-medium text-[#171728]  text-center md:text-left  whitespace-normal '>
                  {s.title}
                </h3>
                <p className='mb-10 mt-0 text-center md:text-left whitespace-normal'>
                  {s.description}
                </p>
                <div className='flex flex-col md:flex-row justify-between whitespace-normal'>
                  <div className='text-center md:text-left'>
                    <div className='mb-1 font-medium text-lg text-[#171728] text-center md:text-left'>
                      {s.name}
                    </div>
                    <div className='text-[#8c8c9e] text-center md:text-left whitespace-normal mx-auto'>
                      {s.position}
                    </div>
                  </div>
                  <img
                    src={getCompanyLogo(s.company)}
                    className='max-w-full inline-block border-none whitespace-normal mx-auto p-2'
                    alt='company logo'
                  />
                </div>
              </div>
              <img
                src={getTestimonialPhoto(s.id)}
                className='w-[236px] inline-block border-none px-8 mx-auto'
                alt='testimonial portret'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute inset-0 flex justify-between items-center p-4 z-20'>
        <button
          className='p-1 w-[40px] rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          onClick={prev}>
          <ChevronLeftIcon className='w-[20px]' />
        </button>
        <button
          className='p-1 w-[40px] rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          onClick={next}>
          <ChevronRightIcon className='w-[20px]' />
        </button>
      </div>
    </div>
  );
};

export default Carouselle;

// import { getCompanyLogo, getTestimonialPhoto } from '../../utils/slide';

// const Slide = ({
//   id = 0,
//   title = 'Title',
//   description = 'Description',
//   name = 'First Last Name',
//   position = 'Position',
//   company = 'Company',
// }) => {
//   return (
//   <div className='px-14 pb-20 relative inline-block align-top w-full h-full whitespace-normal text-left translate-x-0 opacity-100 transition-transform'>
//   <div className='flex justify-between items-end text-left whitespace-normal'>
//     <div className='max-w-[468px] mr-7 mb-2 text-left whitespace-normal'>
//       <h3 className='mb-4 mt-0 text-2xl font-medium text-[#171728]  text-left whitespace-normal '>
//         {title}
//       </h3>
//       <p className='mb-10 mt-0 text-left whitespace-normal'>{description}</p>
//       <div className='flex justify-between items-center text-left whitespace-normal'>
//         <div className='mr-7 text-left'>
//           <div className='mb-1 font-medium text-lg text-[#171728] text-left'>{name}</div>
//           <div className='text-[#8c8c9e] text-left whitespace-normal'>{position}</div>
//         </div>
//         <img
//           src={getCompanyLogo(company)}
//           className='w-[236px] max-w-full inline-block border-none text-left whitespace-normal'
//           alt='company logo'
//         />
//       </div>
//     </div>
//     <img
//       src={getTestimonialPhoto(id)}
//       className='w-[236px] inline-block border-none text-left'
//       alt='testimonial portret'
//     />
//   </div>
// </div>
//   );
// };

// export default Slide;
