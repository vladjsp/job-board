import { useState } from 'react';

import NavLinks from './ui-elements/NavLinks';
import Button from './ui-elements/Button';

import { logo } from '../assets';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

const Header = ({ toggleCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='relative z-40 bg-[#fff]'>
      <div className='container px-2'>
        <nav className='bg-white'>
          <div className='flex items-center justify-around'>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
              <img src={logo} className='md:cursor-pointer h-9' alt='Company logo' />
              <div
                className='text-3xl md:hidden'
                onClick={() => setMobileMenuOpen((prev) => !mobileMenuOpen)}>
                {mobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
              </div>
            </div>
            <ul className='md:flex hidden items-center gap-8'>
              <li>
                <a to='/' className='py-7 px-3 inline-block'>
                  Home
                </a>
              </li>
              <li>
                <a to='/' className='py-7 px-3 inline-block'>
                  About
                </a>
              </li>
              <NavLinks />
              <li>
                <a to='/' className='py-7 px-3 inline-block'>
                  Contact
                </a>
              </li>
            </ul>
            <div className='md:block hidden'>
              <Button />
            </div>
            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${mobileMenuOpen ? 'left-0' : 'left-[-100%]'}
        `}>
              <li>
                <a to='/' className='py-7 px-3 inline-block'>
                  Home
                </a>
              </li>
              <NavLinks />
              <div className='py-5'>
                <Button />
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
