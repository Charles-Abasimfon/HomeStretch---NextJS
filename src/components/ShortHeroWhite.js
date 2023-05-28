import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const menuItems = [
  {
    title: 'About Us',
    link: '/about-us',
  },
  {
    title: 'Programs',
    link: '/programs',
  },
  {
    title: 'Success Stories',
    link: '/success-stories',
  },
  {
    title: 'Media',
    link: '/media',
  },
  {
    title: 'Take Action',
    link: '/take-action',
  },
];

const ShortHero = ({ text }) => {
  return (
    <div className='pb-6'>
      <nav className='flex justify-between px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 pt-4'>
        <div className='flex gap-16'>
          <div className='hidden lg:block'>
            <Link className='' href='/'>
              <Image
                src='/logos/Homestretch Logos_stacked_full color.svg'
                alt='Homestretch Logo'
                className=''
                width={140}
                height={118}
                priority
              />
            </Link>
          </div>
          <div className='lg:hidden'>
            <Link className='' href='/'>
              <Image
                src='/logos/Homestretch Logos_horizontal_full color.svg'
                alt='Vercel Logo'
                className=''
                width={106}
                height={44}
                priority
              />
            </Link>
          </div>
          <div className='text-blue-dark uppercase hidden lg:block'>
            <ul className='flex gap-6 pt-6'>
              {menuItems.map((item) => (
                <li key={item.title} className=' flex align-middle gap-2'>
                  <Link href={item.link} className='nav-link 2xl:text-lg'>{item.title} </Link>
                  <Image
                    src='/icons/Navbar_down_arrow.svg'
                    width={15}
                    height={10}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='hidden lg:flex justify-self-end gap-6 pt-3'>
          <ul className='h-max pt-3'>
            <li className='text-blue-dark underline w-max h-max'>
              <Link href='#' className='tracking-[0.06em]'> Client Login </Link>
            </li>
          </ul>
          <Button value={'Donate'} className={'btn-green'}/>
        </div>
        <div className='block lg:hidden'>
        <Image
            src='/icons/hamburger.png'
            alt='Vercel Logo'
            className=''
            width={30}
            height={10}
            priority
          />
        </div>
      </nav>
      {text !== '' && (
        <h1 className='mt-24 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 text-blue text-left text-4xl md:text-5xl font-bold'>
          {' '}
          {text}{' '}
        </h1>
      )}
    </div>
  );
};

export default ShortHero;
