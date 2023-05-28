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

const Navbar = () => {
  return (
    <nav className='flex justify-between px-6 xl:px-10 2xl:px-12 3xl:px-16 pt-4'>
      <div className='flex gap-8 3xl:gap-16'>
        <div className='hidden lg:block'>
          <Link className='' href='/'>
            <Image
              src='/logos/Homestretch Logos_stacked_white.svg'
              alt='Vercel Logo'
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
              src='/logos/Homestretch Logos_horizontal_white.svg'
              alt='Vercel Logo'
              className=''
              width={106}
              height={44}
              priority
            />
          </Link>
        </div>
        <div className='text-white uppercase hidden lg:block'>
          <ul className='flex gap-6 pt-6'>
            {menuItems.map((item) => (
              <li key={item.title} className=' flex align-middle gap-2'>
                <Link href={item.link} className='nav-link 2xl:text-lg'>
                  {item.title}{' '}
                </Link>
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
      <div className='hidden h-max lg:flex items-center justify-self-end gap-6 pt-4'>
        <ul className='h-max'>
          <li className='text-white underline w-max h-max'>
            <Link href='#' className='tracking-[0.06em]'> Client Login </Link>
          </li>
        </ul>
        <Button value={'Donate'} className={'btn-green'} />
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
  );
};

export default Navbar;
