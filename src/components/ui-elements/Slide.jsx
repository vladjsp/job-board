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
    <div className='block min-w-full lg:max-w-4xl mx-auto '>
      <div className='flex flex-col-reverse lg:flex-row max-w-4xl justify-between items-end text-left whitespace-normal mx-auto px-14 pb-16 border border-solid border-[#e4e4ed] rounded-2xl shadow-sm'>
        <div className='max-w-[468px] mb-2 items-end text-left whitespace-normal mx-auto lg:mr-7 '>
          <h3 className='mb-4 mt-0 text-2xl font-medium text-[#171728]  text-center md:text-left  whitespace-normal '>
            {title}
          </h3>
          <p className='mb-10 mt-0 text-center md:text-left whitespace-normal'>{description}</p>
          <div className='flex flex-col md:flex-row justify-between whitespace-normal'>
            <div className='text-center md:text-left'>
              <div className='mb-1 font-medium text-lg text-[#171728] text-center md:text-left'>
                {name}
              </div>
              <div className='text-[#8c8c9e] text-center md:text-left whitespace-normal mx-auto'>
                {position}
              </div>
            </div>
            <img
              src={getCompanyLogo(company)}
              className='max-w-full inline-block border-none whitespace-normal mx-auto p-2'
              alt='company logo'
            />
          </div>
        </div>
        <img
          src={getTestimonialPhoto(id)}
          className=' max-w-[180px] md:max-w-[200px] lg:max-w-[236px] inline-block border-none mx-auto text-left'
          alt='testimonial portret'
        />
      </div>
    </div>
  );
};

export default Slide;
