import React from 'react';
import googleLogoGray from '../assets/google-logo-gray.svg';
import fbLogoGray from '../assets/fb-logo-gray.svg';
import youtubeLogoGray from '../assets/youtube-logo-gray.svg';
import pinterestLogoGray from '../assets/pinterest-logo-gray.svg';
import webflowLogoGray from '../assets/webflow-logo-gray.svg';

const Companies = () => {
  return (
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
  );
};

export default Companies;
