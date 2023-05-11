import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const LocationInput = () => {
  return (
    <form
      action=''
      className='relative flex flex-col sm:flex-row  min-h-[68px] w-full lg:max-w-[420px] min-w-[280px] mr-2 items-center flex-1 border-solid border-[1px] border-gray-400 rounded-full pl-2 hover:border-sky-600'>
      {/*!!! <MagnifyingGlassIcon className='h-10' /> */}
      <input
        type='search'
        className="pr-8 pl-8 bg-[url('https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e85a8a662c5393ee8626_icon-search-jobs-job-board-x-template.svg')] bg-no-repeat bg-left outline-none border-none"
        placeholder='Search for jobs'
        required
      />
      <div className=''>
        <Button
          type='submit'
          text='Search'
          styles=' bg-[#0061ff] text-[#fff] font-medium absolute right-2 top-1'
        />
      </div>
    </form>
    // <div className='w-full max-w-[420px] min-w-[328px] mr-1 leading-5 relative inline-block text-left ml-auto z-40'>
    //   <div className='flex min-h-[68px] px-6 items-center border-solid border-[1px] border-gray-400 rounded-full cursor-pointer '>
    //     <MagnifyingGlassIcon />
    //     <input
    //       className='mr-2 text-[#222] text-left whitespace-nowrap'
    //       placeholder='Search for job'
    //     />
    //   </div>
    // </div>
  );
};

export default LocationInput;
