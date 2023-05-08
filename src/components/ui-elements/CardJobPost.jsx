import { BriefcaseIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const CardJobPost = () => {
  return (
    <div className='mb-3xl px-[32px] pt-10 pb-12 border-solid border-[1px] border-[#e4e4ed] rounded-2xl shadow-lg'>
      <div className=''>
        <div className='max-w-[58px] mb-5 rounded-lg flex items-center'>
          <BriefcaseIcon className='w-full object-cover inline-block' />
        </div>
        <div className=''>
          <h4 className='mb-3 mt-0 text-[#171728] text-[22px] font-medium '>Post a job today</h4>
          <p className='mb-6 mt-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
          <div className='flex flex-col text-center items-center'>
            <Button text='Post a featured job' type='button' className='block w-full mb-5' />
            <a href='#' className='text-[#8c8c9e] text-[14px] underline decoration-1 mt-5'>
              or post a free job
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardJobPost;
