import Hero from './Hero';
import FilterForm from './FilterForm';
import Companies from '../../components/Companies';
import JobBoard from './JobBoard';
import CTA from '../../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='absolute -z-10 left-0 top-0 right-0 bottom-auto min-h-[600px] bg-[#f2f5ff]'></div>
      <FilterForm />

      <Companies />
      <JobBoard />
      <CTA />
    </>
  );
};

export default Home;
