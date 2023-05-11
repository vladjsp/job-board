import { useState } from 'react';
import { headerLinks } from '../../data/headerLinks';
import { nanoid } from 'nanoid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  return (
    <>
      {headerLinks.map((link) => (
        <div key={nanoid()}>
          <div className='px-3 text-left md:cursor-pointer group'>
            <h1
              className='py-7 flex justify-between items-center text-[#171728] md:pr-0 pr-5 group hover:text-sky-600'
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}>
              {link.name}
              {/*<span className='text-xl'>
                <ChevronUpIcon /> <ChevronDownIcon />
              </span> */}
              <span className='w-6 h-5 md:block group-hover:-rotate-180 ease-out duration-200 '>
                <ChevronDownIcon />
              </span>
            </h1>
            {link.submenu && (
              <div className='absolute top-20 hidden group-hover:md:block hover:md:block  border rounded-3xl shadow-xl'>
                <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                  {link.sublinks.map((mysublinks) => (
                    <div key={nanoid()}>
                      <h1 className='text-lg text-[#171728] font-medium'>{mysublinks.Head}</h1>
                      {mysublinks.sublink.map((slink) => (
                        <li className='text-sm text-[#171728] my-2.5' key={nanoid()}>
                          <a to={slink.link} className='text-[#171728] hover:text-sky-600'>
                            {slink.name}
                          </a>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={nanoid()}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading('')
                    }
                    className='py-4 pl-7  md:pr-0 pr-5 flex justify-between items-center'>
                    {slinks.Head}

                    <span className='text-xl md:mt-1 md:ml-2 inline'>
                      {subHeading === slinks.Head ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? 'md:hidden' : 'hidden'}`}>
                    {slinks.sublink.map((slink) => (
                      <li className='py-3 pl-14' key={nanoid()}>
                        <a to={slink.link}>{slink.name}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
