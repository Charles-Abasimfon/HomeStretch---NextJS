import ShortHero from '@/components/Short-hero';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Footer from '@/components/Footer';

const actions = [
  {
    img: '/images/take-action/20221116_175600808_iOS.png',
    header: 'Volunteer',
    text: 'By checking out our volunteer opportunities, you are becoming a tutor, a mentor, or helping to prepare a home for one of our families.',
    btnText: 'Volunteer CTA',
  },
  {
    img: '/images/take-action/cavalier trail.png',
    header: 'Give',
    text: 'Your gift provides support to homeless families. Learn more about how your donation makes a difference.',
    btnText: 'Give CTA',
  },
  {
    img: '/images/take-action/IMG_0686.png',
    header: 'Wish list',
    text: 'Dropping off an item from our wish list helps put new or gently used items to good use.',
    btnText: 'Wish List CTA',
  },
];

const TakeAction = () => {
  return (
    <>
      <ShortHero text={'Help others in need'} className={'shortHeroBlue'} />

      <main className='px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 mt-20 mb-28 md:mb-40'>
        <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1 mb-6'>Take Action</h3>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {actions.map((action, index) => (
            <div className='shadow-xl rounded-xl ' key={index}>
              <div>
                <Image
                  src={action.img}
                  alt='Play Icon'
                  className='w-full'
                  width={483}
                  height={644}
                  priority
                />
              </div>
              <div className='p-10 md:p-6 lg:p-10'>
                <h4 className='text-2xl font-bold text-blue-dark'>
                  {action.header}
                </h4>
                <p className='h-36 px-6 md:h-40 mt-4 mb-2 text-lg md:text-xl text-brown'>{action.text}</p>
                <Button value={action.btnText} className={'btn-green'}/>
              </div>
            </div>
          ))}
        </section>

        <section className='mt-16'>
          <div className='flex gap-4 items-center mt-12 mb-12 md:mb-0 md:mt-0'>
            <h5 className='font-bold text-2xl text-blue-dark'>Stay connected</h5>
            <Link className='' href='#'>
              <Image
                src='/icons/social/Homestretch_Small Icons_youtube.svg'
                alt='Youtube Icon'
                className=''
                width={28}
                height={20}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/Homestretch_Small Icons_linkedin.svg'
                alt='LinkedIn Icon'
                className=''
                width={24}
                height={20}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/Homestretch_Small Icons_twitter.svg'
                alt='Twitter Icon'
                className=''
                width={24}
                height={20}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/Homestretch_Small Icons_facebook.svg'
                alt='Facebook Icon'
                className=''
                width={24}
                height={16}
                priority
              />
            </Link>
            <Link className='' href='#'>
              <Image
                src='/icons/social/Homestretch_Small Icons_instagram.svg'
                alt='Instagram Icon'
                className=''
                width={24}
                height={24}
                priority
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TakeAction;
