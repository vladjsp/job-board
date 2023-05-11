import Hero from './Hero';
import Achievements from './Achievements';
import Carousel from '../../components/Carousel';

const About = () => {
  return (
    <>
      <Hero />
      <Achievements />
      <div className='max-w-full mx-auto px-6'>
        <Carousel />
      </div>
    </>
  );
};

export default About;
