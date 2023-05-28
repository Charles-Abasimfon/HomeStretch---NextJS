import { useState } from 'react';
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

const Footer = () => {
  const [isAlertBarDisplay, setIsAlertBarDisplay] = useState(true);

  return (
    <footer className='relative pt-20 bg-white'>
      <div className='md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 w-full absolute top-[-1.5%] md:top-[-5%] lg:top-[-8%]'>
        <img src='/images/footer/footer-graphic.svg' alt='' />
      </div>
      <div className='flex flex-col md:flex-row justify-between px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40'>
        <div className=''>
          <div className='flex justify-center md:justify-start'>
            <Link className='' href='/'>
              <Image
                src='/logos/Homestretch Logos_stacked_full color.svg'
                alt='Homestretch Logo'
                className=''
                width={138}
                height={118}
                priority
              />
            </Link>
          </div>
          <div className='flex flex-col items-center md:items-start gap-4 mt-16'>
            <Button value={'Donate'} className={'btn-green'}/>
            <Button
              className={'btn-blue'}
              value={'Referral form for transitional housing'}
            />
          </div>
        </div>

        <div className='flex flex-col-reverse md:flex-col'>
          <div className='flex gap-4 justify-center mt-12 mb-12 md:mb-0 md:mt-0'>
            <Link className='' href='#'>
              <Image
                src='/icons/social/primary/Homestretch_Small Icons_youtube.svg'
                alt='Youtube Icon'
                className=''
                width={28}
                height={20}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/primary/Homestretch_Small Icons_linkedin.svg'
                alt='LinkedIn Icon'
                className=''
                width={24}
                height={20}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/primary/Homestretch_Small Icons_twitter.svg'
                alt='Twitter Icon'
                className=''
                width={24}
                height={20}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/primary/Homestretch_Small Icons_facebook.svg'
                alt='Facebook Icon'
                className=''
                width={24}
                height={16}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/primary/Homestretch_Small Icons_instagram.svg'
                alt='Instagram Icon'
                className=''
                width={24}
                height={24}
                priority
              />
            </Link>
          </div>
          <div className='text-blue-light text-md text-center md:text-right mt-12'>
            {menuItems.map((item, index) => (
              <ul key={index}>
                <li key={item.title} className='mt-2'>
                  <Link href={item.link} className="text-lg">{item.title} </Link>
                </li>
              </ul>
            ))}
            <ul className='flex justify-center md:justify-end'>
              <li className='mt-2 underline w-max'>
                <Link href='#' className='tracking-[0.06em]'> Client Login </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-2 items-center justify-between mb-20 md:mb-0 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 md:py-20'>
        <div className='md:pr-10 text-center  md:text-left text-brown'>
          <p>
            To enter the Homestretch program a family must be referred by a
            social service agency. Homestretch is funded by the City of Falls
            Church, corporations, foundations, civic groups, faith institutions
            and individuals. Copyright Homestretch Inc. © |{' '}
            <Link href='#' className='underline'>
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className='flex gap-4 justify-center md:justify-end'>
          <div>
          <Image
            src='/icons/footer-icons/Homestretch_Small Icons_footer logo 04.png'
            alt='Vercel Logo'
            className=''
            width={144}
            height={62}
            priority
          />
          </div>
          <div>
          <Image
            src='/icons/footer-icons/Homestretch_Small Icons_footer logo 01.png'
            alt='Vercel Logo'
            className=''
            width={86}
            height={63}
            priority
          />
          </div>
          <div>
          <Image
            src='/icons/footer-icons/Homestretch_Small Icons_footer logo 02.svg'
            alt='Vercel Logo'
            className=''
            width={63}
            height={63}
            priority
          />
          </div>
          <div>
          <Image
            src='/icons/footer-icons/Homestretch_Small Icons_footer logo 03.svg'
            alt='Vercel Logo'
            className=''
            width={66}
            height={63}
            priority
          />
          </div>
        </div>
      </div>

      {/* ALERT BAR */}
      {isAlertBarDisplay && (
        <div>
          <div className='bg-blue-dark text-white w-screen flex justify-between px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-4'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-6 pr-16 md:pr-0'>
              <span className='text-lg'>
                Promo bar for end of year giving or time-specific campaign
              </span>
              <span className='uppercase font-semibold border-b border-white h-max w-max'>
                {' '}
                <Link href='#' className='flex items-center gap-2'> 
                 <span>Give Now </span>
                 <Image
            src='/icons/angle-right-solid-white.svg'
            alt='Vercel Logo'
            className=''
            width={10}
            height={5}
            priority
          />
                </Link>{' '}
              </span>
            </div>
            <div className='font-bold text-2xl'>
            <Image
            src='/icons/Homestretch_Small Icons_close_white.svg'
            alt='Vercel Logo'
            className=''
            width={30}
            height={33}
            priority
          />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
