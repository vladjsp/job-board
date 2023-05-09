import { nanoid } from 'nanoid';
import { leftBlockLinks, rightBlockLinks } from '../helpers/footerLinks';

import SubscribeFooterSection from './SubscribeFooterSection';
import CopyrightFooter from './ui-elements/CopyrightFooter';

const Footer = () => {
  return (
    <div className='pt-15 pb-7 border-t border-solid border-[#e4e4ed] block'>
      <SubscribeFooterSection />
      {/* Divider */}
      <div className='mt-14 mb-14 w-full min-h-[1px] bg-[#e4e4ed]'></div>
      {/* Actually Footer */}
      <div className='container px-2'>
        <div className='flex justify-between text-[#686781]'>
          {/* Left side */}
          <div className='flex justify-between w-full max-w-[552px] mr-10 -mb-7'>
            {leftBlockLinks.map((obj) => (
              <div className='' key={nanoid()}>
                <h2 className='mb-8 text-[#171728] text-[18px] font-medium '>{obj.categoryName}</h2>
                <div className='flex'>
                  <ul className='mr-9 mb-0 pl-0'>
                    {obj.links.map((item) => (
                      <li key={nanoid()} className='mb-6 leading-4'>
                        <a
                          href={item.link}
                          className='text-[#686781] no-underline whitespace-nowrap list-none hover:text-sky-600'>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {/* Rigth side */}
          <div className='flex justify-between w-full max-w-[552px] mr-10 -mb-7'>
            {rightBlockLinks.map((obj) => (
              <div key={nanoid()} className=''>
                <h2 className='mb-8 text-[#171728] text-[18px] font-medium '>{obj.categoryName}</h2>
                <div className='flex'>
                  <ul className='mr-9 mb-0 pl-0'>
                    {obj.links.map((item) => (
                      <li key={nanoid()} className='mb-6 leading-4'>
                        <a
                          href={item.link}
                          className='text-[#686781] no-underline whitespace-nowrap list-none hover:text-sky-600'>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className='mt-14 mb-14 w-full min-h-[1px] bg-[#e4e4ed]'></div>
      <div className='container px-2'>
        <CopyrightFooter />
      </div>
    </div>
  );
};

export default Footer;
