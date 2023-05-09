import React from 'react';
import {
  googleLogoGray,
  fbLogoGray,
  youtubeLogoGray,
  pinterestLogoGray,
  webflowLogoGray,
} from '../assets';

const Companies = () => {
  return (
    <div className='container px-2'>
      <div className='flex mb-16 justify-between items-center mx-auto text-[#686781]'>
        <p className='font-medium  leading-5'>Trusted by</p>
        <div className='flex w-full max-w-[803px] justify-between items-center'>
          <img src={googleLogoGray} alt='google company' />
          <img src={fbLogoGray} alt='facebook name' />
          <img src={youtubeLogoGray} alt='youtube company' />
          <img src={pinterestLogoGray} alt='pinterest company' />
          <img src={webflowLogoGray} alt='webflow company' />
        </div>
      </div>
    </div>
  );
};

export default Companies;
