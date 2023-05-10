import { getCompanyLogo, getTestimonialPhoto } from '../../utils/slide';

const Slide = ({
  id = 0,
  title = 'Title',
  description = 'Description',
  name = 'First Last Name',
  position = 'Position',
  company = 'Company',
}) => {
  return (
    <div className='px-14 pb-20 relative inline-block align-top w-full h-full whitespace-normal text-left translate-x-0 opacity-100 transition-transform'>
      <div className='flex justify-between items-end text-left whitespace-normal'>
        <div className='max-w-[468px] mr-7 mb-2 text-left whitespace-normal'>
          <h3 className='mb-4 mt-0 text-2xl font-medium text-[#171728]  text-left whitespace-normal '>
            {title}
          </h3>
          <p className='mb-10 mt-0 text-left whitespace-normal'>{description}</p>
          <div className='flex justify-between items-center text-left whitespace-normal'>
            <div className='mr-7 text-left'>
              <div className='mb-1 font-medium text-lg text-[#171728] text-left'>{name}</div>
              <div className='text-[#8c8c9e] text-left whitespace-normal'>{position}</div>
            </div>
            <img
              src={getCompanyLogo(company)}
              className='w-[236px] max-w-full inline-block border-none text-left whitespace-normal'
              alt='company logo'
            />
          </div>
        </div>
        <img
          src={getTestimonialPhoto(id)}
          className='w-[236px] inline-block border-none text-left'
          alt='testimonial portret'
        />
      </div>
    </div>
  );
};

export default Slide;
