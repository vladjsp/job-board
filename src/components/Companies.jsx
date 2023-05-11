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
    <div className='container'>
      <div className='flex flex-col lg:flex-row flex-wrap max-w-[402px] lg:max-w-full my-12 justify-between items-center text-[#686781]'>
        <p className='text-center font-medium leading-5'>Trusted by</p>
        <div className='flex w-full flex-wrap max-w-[532px] lg:max-w-[803px] justify-center gap-3 lg:justify-between items-center'>
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
