import Footer from '@/components/Footer'
import ShortHero from '@/components/Short-hero'
import Link from 'next/link'
import React from 'react'

const SuccessStory = () => {
  return (
   <>
   <ShortHero 
     text={'Marion'}
     className={'shortHeroGreen'}
   />
    <main className='px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 pb-60 relative'>
        <div className='bg-blue'>
            <img src="/images/success-stories/60789985fab18e1a58327a8e_marion-img.png" alt="" className='rounded-full h-36 w-36 md:h-48 md:w-48 lg:h-72 lg:w-72 border-[8px] lg:border-[12px] border-white object-cover absolute -top-[95px] lg:-top-[144px] right-6 md:right-10 lg:right-16 xl:right-24 2xl:right-32 3xl:right-40'/>
        </div>
        <section className='w-full md:w-[70%] pt-20'>
        <div className='text-lg md:text-xl text-brown'>
            <p>
            A teenaged orphan in Kenya, Marion met an American woman who promised her a chance to attend college in the United States. Rather than being flown to a college campus, she was dropped in a brothel in Mexico where she was forced to work. After ten months, she escaped. She stayed in a Mexican shelter for a few months but while there she was raped by a shelter worker and became pregnant. She was forced to leave the shelter due to her pregnancy. She underwent an arduous trek into the United States, having her baby along the way; and was then raped again.  By the time she got to Homestretch, she had become accustomed to the brutality of men.
            </p>
            <p className='mt-8'>
            Over the next two years, Marion blossomed. She learned English, got her T visa, went to school to attain a medical assistant certificate, followed by a nursing assistant certificate, and finally a degree as a registered nurse. She did all of this while working full time at a variety of jobs and complying with all of the demands of our rigorous program.  She took advantage of a gym membership through our program and became much stronger physically, which she would need to be a nurse. With her two beautiful children, she is now a proud American citizen.
            </p>
        </div>
        <div className='mt-12 mb-20'>
        <p className='text-blue text-2xl'>
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.”
          </p>
          <p className='text-blue-dark font-semibold uppercase my-6'>
            — NAME, TITLE, JOINED HOMESTRETCH 20XX
          </p>
        </div>

        <div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <img src="/images/success-stories/20220817_185320425_iOS.png" alt="" />
                </div>
                <div>
                    <img src="/images/success-stories/DJandJulio_BuildCribandTable2.png" alt="" />
                </div>
                <div className='col-span-2'>
                    <img src="/images/success-stories/kenny-krosky-2xjk8WWLFC4-unsplash.png" alt="" />
                </div>
            </div>
            <div className='mt-3'>
                <p className='text-[#636363]'>
                    <span className='font-bold'>Optional photo gallery </span>
                    <span>with caption lorem ipsom epsillon Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</span>
                </p>
            </div>
        </div>

        <div className='flex justify-between text-xl font-bold text-blue-dark mt-12'>
            <Link href='/'><span className='text-2xl'>&#8249;</span> Last story</Link>
            <span className='md:hidden'>|</span>
            <Link href='/'>Back to all stories</Link>
            <span className='md:hidden'>|</span>
            <Link href='/'>Next story <span className='text-2xl'>&#8250;</span></Link>
        </div>
        </section>
    </main>

    <Footer />
    </>
  )
}

export default SuccessStory