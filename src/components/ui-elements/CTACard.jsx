import React from 'react';
import Button from './Button';

const CTACard = ({ title = 'free', description = '' }) => {
  return (
    <div
      className={`border border-solid rounded-3xl border-[#e4e4ed] shadow-sm  text-[#686781] max-w-[586px] pt-20 pr-11 pb-16 pl-12 ${
        title !== 'free' ? 'bg-[#0061ff]' : ''
      }`}>
      <h2
        className={`text-[32px] font-medium mb-4 ${
          title !== 'free' ? 'text-[#fff]' : 'text-[#000]'
        }`}>
        Post a {title} job
      </h2>
      <p
        className={`relative z-[1] opacity-[.8] mb-8 mt-0 leading-loose ${
          title !== 'free' ? 'text-[#fff]' : 'text-[#686781]'
        } `}>
        {description}
      </p>
      <Button
        text={`Post a ${title} job`}
        styles={`font-medium ${
          title !== 'free' ? 'text-[#0061ff] bg-[#fff]' : 'text-[#fff] bg-[#0061ff]'
        }`}
      />
    </div>
  );
};

export default CTACard;
