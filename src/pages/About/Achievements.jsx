import Button from '../../components/ui-elements/Button';

const Achievements = () => {
  return (
    <div className='py-36 bg-[#fafafa]'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='max-w-[425px] mr-7'>
            <h2 className='mb-4 mt-0 text-[#171728] text-3xl font-medium'>Our numbers</h2>
            <p className='mb-12 mt-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fames faucibus
              egestas integer scelerisque. Morbi non viverra arcu arcu luctus in vel.
            </p>
            <a href='/post-a-job'>
              <Button text='Post a free job' styles=' bg-[#0061ff] text-[#fff] font-medium' />
            </a>
          </div>
          <div className='flex w-full max-w-[661px] justify-between'>
            <div className='w-full max-w-[318px] mr-5 mb-16'>
              <div className='mb-6 py-14 px-8 text-center overflow-hidden border border-solid border-[#e4e4ed] rounded-2xl shadow-sm'>
                <div className='mb-2 text-[#171728] text-4xl font-medium text-center '>
                  20,583
                  <span className='text-[#0061ff] text-4xl font-medium text-center '>+</span>
                </div>
                <div className='text-xl text-center leading-[1.4em] '>Job posted</div>
              </div>
              <div className='mb-6 py-14 px-8 text-center overflow-hidden border border-solid border-[#e4e4ed] rounded-2xl shadow-sm'>
                <div className='mb-2 text-[#171728] text-4xl font-medium text-center '>
                  581
                  <span className='text-[#0061ff] text-4xl font-medium text-center '>+</span>
                </div>
                <div className='text-xl text-center leading-[1.4em] '>Verified companies</div>
              </div>
            </div>
            <div className='w-full max-w-[318px] mt-16'>
              <div className='mb-6 py-14 px-8 text-center overflow-hidden border border-solid border-[#e4e4ed] rounded-2xl shadow-sm'>
                <div className='mb-2 text-[#171728] text-4xl font-medium text-center '>
                  3,896
                  <span className='text-[#0061ff] text-4xl font-medium text-center '>+</span>
                </div>
                <div className='text-xl text-center leading-[1.4em] '>Successful hires</div>
              </div>
              <div className='mb-6 py-14 px-8 text-center overflow-hidden border border-solid border-[#e4e4ed] rounded-2xl shadow-sm'>
                <div className='mb-2 text-[#171728] text-4xl font-medium text-center '>
                  100K
                  <span className='text-[#0061ff] text-4xl font-medium text-center '>+</span>
                </div>
                <div className='text-xl text-center leading-[1.4em] '>Monthly visits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
