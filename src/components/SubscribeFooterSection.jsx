import { logo } from '../assets';
import SubscribeForm from './ui-elements/SubscribeForm';

const SubscribeFooterSection = () => {
  return (
    <div className='container'>
      <div className='flex flex-col md:flex-row justify-between items-center mt-7'>
        <div className='max-w-[408px] mr-7 text-[#686781]'>
          <img src={logo} className='mb-8 w-48' alt='company logo' />
          <p className='mb-0 leading-loose'>
            Join our newsletter and receive the best job openings of the week, right on your inbox.
          </p>
        </div>
        <div className='w-full mb-0 mt-3 max-w-[510px]'>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default SubscribeFooterSection;
