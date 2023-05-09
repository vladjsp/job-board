import React from 'react';

const CopyrightFooter = () => {
  return (
    <div className='flex justify-between items-center text-[#686781]'>
      <div className=''>
        © Copyright Job Board X - Designed by{' '}
        <a
          href='https://brixtemplates.com/'
          rel='noreferrer'
          target='_blank'
          className='text-sky-600 underline'>
          BRIX Templates
        </a>{' '}
        - Powered by{' '}
        <a
          href='https://webflow.com/'
          rel='noreferrer'
          target='_blank'
          className='text-sky-600 underline'>
          Webflow
        </a>
      </div>
    </div>
  );
};

export default CopyrightFooter;
