import React from 'react';
import CTACard from './ui-elements/CTACard';

const CTA = () => {
  return (
    <div className='pt-0 pb-20  text-[#686781]'>
      <div className='container'>
        <div className='flex flex-col gap-2 md:flex-row justify-between'>
          <div className='md:mr-5'>
            <CTACard
              title='featured'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit venenatis, vulputate tristique fringilla ut. Vitae pulvina.'
            />
          </div>
          <div className=''>
            <CTACard
              title='free'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit venenatis, vulputate tristique fringilla ut. Vitae pulvina.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
