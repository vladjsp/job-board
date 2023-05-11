import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  StarIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';
import { accordions } from '../../data/accordions';

import Button from '../../components/ui-elements/Button';
import Accordion from '../../components/Accordion';

const index = () => {
  return (
    <div className='relative pt-16 pb-36'>
      <div className='container'>
        <div className='flex mb-24 justify-between'>
          <div className='slide max-w-[35%] mr-7'>
            <h1 className='mt-0 mb-6 text-5xl text-[#171728] font-medium'>Contact us</h1>
            <p className='mb-12 text-[18px] mt-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolrer Fringilla nunc, amet
              vitae senectus. A consequat dui.
            </p>
            <div className='grid justify-items-start grid-cols-1 grid-rows-auto gap-x-4 gap-y-6'>
              <a
                href='mailto:contact@jobboard.com'
                className='flex text-[#171728] text-[18px] max-w-full items-center font-medium no-decoration bg-transparent'
                style={{
                  transitionProperty: 'color',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease',
                  transitionDelay: '0s',
                }}>
                <div
                  className='max-w-[48px] min-w-[48px] mr-3 rounded-xl bg-[#F2F5FF] p-1'
                  style={{
                    transform:
                      'translate3d(0px, 0px, 0px); scale3d(1, 1, 1); rotateX(0deg); rotateY(0deg); rotateZ(0deg); skew(0deg) ',
                    transformStyle: 'preserve-3d',
                  }}>
                  <EnvelopeIcon className='text-sky-600 inline-block max-w-full' />
                </div>
                <div
                  className='hover:text-sky-600'
                  style={{
                    transform:
                      'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
                    transformStyle: 'preserve-3d; color: rgb(23, 23, 40)',
                  }}>
                  contact@jobboard.com
                </div>
              </a>
              <a
                href='tel:(415)897-0427'
                className='flex text-[#171728] text-[18px] max-w-full items-center font-medium no-decoration bg-transparent hover:text-sky-600'
                style={{
                  transitionProperty: 'color',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease',
                  transitionDelay: '0s',
                }}>
                <div
                  className='max-w-[48px] min-w-[48px] mr-3 rounded-xl  bg-[#F2F5FF] p-1'
                  style={{
                    transform:
                      'translate3d(0px, 0px, 0px); scale3d(1, 1, 1); rotateX(0deg); rotateY(0deg); rotateZ(0deg); skew(0deg) ',
                    transformStyle: 'preserve-3d',
                  }}>
                  <DevicePhoneMobileIcon className=' text-sky-600 inline-block max-w-full' />
                </div>
                <div
                  className=''
                  style={{
                    transform:
                      'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
                    transformStyle: 'preserve-3d; color: rgb(23, 23, 40)',
                  }}>
                  (415) 897 - 0427
                </div>
              </a>
            </div>
          </div>
          <div className='slide card flex w-full max-w-[688px] min-h-[636px] px-12 pt-12 pb-14 items-center '>
            <div className='m-0 flex-1'>
              <form className='contact-form'>
                <div className=''>
                  <label htmlFor='Name-2' className='block mb-2 font-medium text-[#33334e]'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='Name'
                    id='name'
                    placeholder='What’s your name?'
                    required
                    className='min-h-[68px] mb-0 px-5 border border-[#e4e4ed] rounded-full bg-white text-[#171728] w-full block h-[38px]'
                  />
                </div>
                <div className=''>
                  <label htmlFor='Email-3' className='block mb-2 font-medium text-[#33334e]'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='Email'
                    id='email'
                    placeholder='What’s your email?'
                    required
                    className='min-h-[68px] mb-0 px-5 border border-[#e4e4ed] rounded-full bg-white text-[#171728] w-full block h-[38px]'
                  />
                </div>
                <div className=''>
                  <label htmlFor='Phone' className='block mb-2 font-medium text-[#33334e]'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    name='Phone'
                    id='phone'
                    placeholder='What’s your phone?'
                    required
                    className='min-h-[68px] mb-0 px-5 border border-[#e4e4ed] rounded-full bg-white text-[#171728] w-full block h-[38px]'
                  />
                </div>
                <div className=''>
                  <label htmlFor='Phone-2' className='block mb-2 font-medium text-[#33334e]'>
                    Subject
                  </label>
                  <input
                    type='text'
                    name='Subject'
                    id='subject'
                    placeholder='Ex. Support'
                    required
                    className='min-h-[68px] mb-0 px-5 border border-[#e4e4ed] rounded-full bg-white text-[#171728] w-full block h-[38px]'
                  />
                </div>
                <div className='col-span-2 row-span-1 '>
                  <label htmlFor='Message' className='block mb-2 font-medium text-[#33334e] '>
                    Message
                  </label>
                  <textarea
                    placeholder='Please write your message...'
                    maxLength='5000'
                    id='message'
                    name='Message'
                    className=' min-h-[126px] h-auto max-h-[250px] max-w-full mb-0 py-5 px-6 border border-[#e4e4ed] rounded-lg bg-white text-[#171728] block w-full overflow-auto'></textarea>
                </div>
                <Button
                  type='submit'
                  text='Submit message'
                  styles='col-span-2 row-span-1 justify-self-start  rounded-full bg-sky-600 hover:bg-sky-700 py-5 px-10 text-white font-bold text-center inline-block border-none'
                />
              </form>
            </div>
          </div>
        </div>
        <div className='slide'>
          <h2 className='mb-7 text-center mt-0 font-medium text-[#171728] text-3xl'>
            You can also email us directly
          </h2>
          <div className='grid gap-x-6 grid-cols-[1fr_1fr_1fr] grid-rows-[auto] auto-cols-[1fr]'>
            <a
              href='mailto:support@jobboard.com'
              className='card flex w-full max-w-[382px] p-8 justify-center flex-wrap items-center no-underline hover:border-sky-500'>
              <div className='flex -mb-5 flex-wrap'>
                <div className='flex items-center justify-center  min-h-[64px] min-w-[64px] mr-5 mb-5  rounded-xl  bg-[#F2F5FF] p-1'>
                  <ChatBubbleOvalLeftEllipsisIcon className='text-6xl text-sky-500' />
                </div>
                <div className='mb-5'>
                  <h3 className='mb-2 text-[18px] font-medium mt-0 hover:text-sky-500'>Support</h3>
                  <div className='text-sky-500 font-medium'>support@jobboard.com</div>
                </div>
              </div>
            </a>
            <a
              href='mailto:support@jobboard.com'
              className='card flex w-full max-w-[382px] p-8 justify-center flex-wrap items-center no-underline hover:border-sky-500'>
              <div className='flex -mb-5 flex-wrap'>
                <div className='flex items-center justify-center  min-h-[64px] min-w-[64px] mr-5 mb-5  rounded-xl  bg-[#F2F5FF] p-1'>
                  <StarIcon className='text-6xl text-sky-500' />
                </div>
                <div className='mb-5'>
                  <h3 className='mb-2 text-[18px] font-medium mt-0 hover:text-sky-500'>
                    Featured jobs
                  </h3>
                  <div className='text-sky-500 font-medium'>featured@jobboard.com</div>
                </div>
              </div>
            </a>
            <a
              href='mailto:support@jobboard.com'
              className='card flex w-full max-w-[382px] p-8 justify-center flex-wrap items-center no-underline hover:border-sky-500'>
              <div className='flex -mb-5 flex-wrap'>
                <div className='flex items-center justify-center  min-h-[64px] min-w-[64px] mr-5 mb-5  rounded-xl  bg-[#F2F5FF] p-1'>
                  <BuildingOffice2Icon className='text-6xl text-sky-500' />
                </div>
                <div className='mb-5'>
                  <h3 className='mb-2 text-[18px] font-medium mt-0 hover:text-sky-500'>
                    Partnerships
                  </h3>
                  <div className='text-sky-500 font-medium'>partners@jobboard.com</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='absolute left-0 top-auto right-0 bottom-0 -z-10 min-h-[588px] bg-[#fafafa] '></div>
      <div className='py-32 '>
        <div className='slide mb-10 text-center max-w-[560px] mx-auto px-6'>
          <h2 className='mb-4 mt-0 text-[#171728] text-[32px] font-medium'>
            Frequently Asked Questions
          </h2>
          <p className='my-0 text-[18px] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolrer Fringilla nunc, amet
            vitae senectus.
          </p>
        </div>
        <div className='max-w-[890px] mx-auto px-6'>
          {accordions.map((acc) => (
            <Accordion title={acc.title} text={acc.text} expanded={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
