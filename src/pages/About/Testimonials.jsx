import Carousel from '../../components/Carousel';

const Testimonials = () => {
  return (
    <div className='overflow-hidden pb-24 pt-36'>
      <div className='mb-10 text-center max-w-[541px] mx-auto px-6'>
        <h2 className='mt-0 mb-4 text-[#171728] text-3xl font-medium text-center'>
          What recruiters say about us
        </h2>
        <p className='my-0 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fames faucibus egestas
          integer scelerisque.
        </p>
      </div>
      <div className='max-w-[1088px] mx-auto px-6'>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;
