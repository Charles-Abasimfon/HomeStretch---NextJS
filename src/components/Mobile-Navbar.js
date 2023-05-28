import Image from 'next/image';
import Link from 'next/link';

const MobileNavbar = () => {
  return (
    <nav className='bg-white px-4 py-2.5'>
      <div className='flex justify-between items-center'>
        <div>
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
        <div>
          <Image
            src='/icons/hamburger.png'
            alt='Vercel Logo'
            className=''
            width={30}
            height={10}
            priority
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
