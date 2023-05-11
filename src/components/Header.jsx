import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './ui-elements/NavLinks';
import Button from './ui-elements/Button';

import { logo } from '../assets';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

const Header = ({ toggleCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='relative z-40 bg-[#fff]'>
      <div className='container'>
        <nav className='bg-white'>
          <div className='flex items-center justify-between'>
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
                <Link
                  to='/'
                  className='py-7 px-3 text-[#171728] inline-block cursor-pointer hover:text-sky-600'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='py-7 px-3 text-[#171728] inline-block cursor-pointer hover:text-sky-600'>
                  About
                </Link>
              </li>
              <NavLinks />
              <li>
                <Link
                  to='/contact'
                  className='py-7 text-[#171728] px-3 inline-block cursor-pointer hover:text-sky-600'>
                  Contact
                </Link>
              </li>
            </ul>
            <div className='md:block hidden'>
              <Button
                type='button'
                text='Post a job'
                styles='rounded-full bg-sky-600 hover:bg-sky-700 py-4 px-6 text-white font-medium text-center inline-block border-none'
              />
            </div>
            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${mobileMenuOpen ? 'left-0' : 'left-[-100%]'}
        `}>
              <li>
                <Link to='/' className='py-7 px-3 inline-block'>
                  Home
                </Link>
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
