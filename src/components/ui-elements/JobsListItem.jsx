import React from 'react';

const JobListItem = ({ logo, title, company, location, level, department, featured }) => {
  return (
    <div className=''>
      <a
        href='#'
        className={`flex flex-col lg:flex-row px-4 py-5 justify-between items-left lg:items-center rounded-xl bg-[#fffefa] ${
          featured ? 'border-[#ffde6a]' : 'border-[#e4e4ed]'
        } border-[1px] ${featured ? '' : 'hover:border-sky-600'} `}>
        <div className='flex flex-row items-left lg:items-center lg:flex-row  min-w-[217px] lg:mr-8'>
          <div className='flex lg:items-center max-w-[58px] mr-5 rounded-lg border-[1px] border-solid border-[#e4e4ed]'>
            <img
              src={logo}
              className='w-full object-cover inline-block max-w-full rounded-lg'
              alt='company logo'
            />
          </div>
          <div className=''>
            <h3 className='mb-2 text-base font-medium text-[#171728] leading-6 mt-0'>{title}</h3>
            <div className='flex mb-2 lf:mb-0 items-start text-[#686781]'>
              <p className='text-[#33334e] mr-2 underline decoration-1'>{company}</p>
              <div className='relative top-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full max-w-[387px] justify-between items-center'>
          <div className=''>
            <div className='flex lg:mb-3 items-center text-[14px] text-[#686781]'>
              <img
                src='https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg'
                alt=''
                className='max-w-[14px] mr-1 inline-block'
              />
              <p className='text-[14px]'>Location</p>
            </div>
            <p className='text-[#171728] leading-5 font-medium'>{location}</p>
          </div>
          <div className=''>
            <div className='flex lg:mb-3 items-center text-[14px] text-[#686781]'>
              <img
                src='https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg'
                alt=''
                className='max-w-[14px] mr-1 inline-block'
              />
              <p className='text-[14px]'>Level</p>
            </div>
            <p className='text-[#171728] leading-5 font-medium'>{level}</p>
          </div>
          <div className=''>
            <div className='flex lg:mb-3 items-center text-[14px] text-[#686781]'>
              <img
                src='https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg'
                alt=''
                className='max-w-[14px] mr-1 inline-block'
              />
              <p className='text-[14px]'>Department</p>
            </div>
            <p className='text-[#171728] leading-5 font-medium'>{department}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default JobListItem;
