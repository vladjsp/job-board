import Companies from '../../components/Companies';
import { about1, about2 } from '../../assets';

const Hero = () => {
  return (
    <div className='pt-16 pb-28'>
      <div className='container'>
        <div className='flex mb-30 justify-between'>
          <div className='max-w-[586px] mr-7'>
            <div className='max-w-[570px] mb-16'>
              <h1 className='mb-5 mt-0 text-[#171728] text-5xl font-medium'>About our job board</h1>
              <p className='my-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id tincidunt
                malesuada pharetra arcu turpis cursus mattis fringilla. Quam enim mi faucibus purus,
                nec turpis mus at odio. Morbi fringilla diam, diam elit, et risus. Sed purus,
                aliquet vel ut ipsum consectetur a turpis.
              </p>
            </div>
            <div className=''>
              <div className='flex overflow-hidden items-center rounded-3xl'>
                <img
                  src={about2}
                  className='w-full object-cover max-w-[991px] inline-block border-none'
                  alt='group of people'
                />
              </div>
            </div>
          </div>
          <div className='max-w-[555px]'>
            <div className='flex overflow-hidden items-center rounded-3xl'>
              <img
                src={about1}
                className='w-full object-cover max-w-[991px] inline-block border-none'
                alt='group of people'
              />
            </div>
          </div>
        </div>
        <Companies />
      </div>
    </div>
  );
};

export default Hero;
