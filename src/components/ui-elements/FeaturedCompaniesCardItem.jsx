import { ArrowRightIcon } from '@heroicons/react/24/outline';

const FeaturedCompaniesCardItem = ({ name = '', icon }) => {
  return (
    <a href='#' className='flex items-center justify-between no-underline max-w-full'>
      <div className='flex mr-4 items-center'>
        <div className='flex items-center max-w-[50px] mr-3 border-solid border border-[#e4e4ed] rounded-lg'>
          <img src={icon} className='w-full object-cover rounded-md' alt='twitter logo' />
        </div>
        <h5 className='mb-0 mt-0 text-[18px] font-medium'>{name}</h5>
      </div>
      <ArrowRightIcon className='h-5 items-center text-[#686781]' />
    </a>
  );
};

export default FeaturedCompaniesCardItem;
