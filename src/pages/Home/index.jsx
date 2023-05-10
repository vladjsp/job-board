import Hero from './Hero';
import FilterForm from './FilterForm';
import Companies from '../../components/Companies';
import JobBoard from './JobBoard';
import CTA from '../../components/CTA';
import Carouselle from './Carouselle';
import Carousel from '../../components/Carousel';

import { testimonial1, testimonial2, testimonial3 } from '../../assets';
const del = [testimonial1, testimonial2, testimonial3];

const Home = () => {
  return (
    <>
      {/* <Hero />
      <div className='absolute -z-10 left-0 top-0 right-0 bottom-auto min-h-[600px] bg-[#f2f5ff]'></div> 
      <FilterForm /> */}
      <div className='max-w-full mx-auto px-6'>
        <Carouselle />
      </div>
      <div className='max-w-lg mx-auto'>
        <Carousel />
      </div>
      {/*<Companies />
      <JobBoard />
      <CTA /> */}
    </>
  );
};

export default Home;
