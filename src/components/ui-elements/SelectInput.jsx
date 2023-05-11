import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const SelectInput = ({ title, options, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='w-full mx-auto lg:mr-1 lg:ml-auto leading-5 relative inline-block text-left'
      onClick={() => setIsOpen(!isOpen)}>
      <div className='flex min-h-[68px] px-6 items-center border-solid border-[1px] border-gray-400 rounded-full cursor-pointer hover:border-sky-600 '>
        <img src={image} alt='icon' className='max-w-[19px] mr-3 inline-block border-none' />
        <p className='mr-2 text-[#222] text-left whitespace-nowrap'>{title}</p>

        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='max-w-[13px] min-w-[13px] ml-auto  inline-block text-[#222] text-left whitespace-nowrap'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
        </svg> */}
        {!isOpen ? (
          <ChevronDownIcon className='h-[20px] ml-auto text-[#222] text-left' />
        ) : (
          <ChevronUpIcon className='h-[20px] ml-auto text-[#222] text-left' />
        )}
        {/* <img
          src='https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cccd6ae643dd6c588e715c_icon-dropdown-job-board-x-template.svg'
          alt='shevron icon'
          className='max-w-[13px] min-w-[13px] ml-auto  inline-block text-[#222] text-left whitespace-nowrap'
        /> */}
        {isOpen && (
          <div className='bg-[#fff] opacity-100 absolute top-20 left-0 flex flex-col items-start p-2 w-full shadow-md rounded-2xl z-50'>
            {options.map((item) => (
              <ul className='w-full' key={item}>
                <li className='p-2 hover:text-sky-600' onClick={() => setIsOpen(false)}>
                  {item}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
