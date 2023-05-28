import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ShortHeroWhite from '@/components/ShortHeroWhite'

const SuccessStories = () => {
  return (
    <>
    <ShortHeroWhite />
      <main className='p-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 pb-40'>
      <h3 className='text-blue font-bold text-4xl md:text-5xl mt-1 mb-8'>
            Success stories
        </h3>

        <section>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
          <div className='relative overflow-hidden h-80 md:h-96 md:rounded-xl md:col-span-2'>
              <img src="/images/success-stories/Screen Shot 2023-03-17 at 11.43.02 AM.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
             <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex justify-center'>
            <Image
                   src="/icons/Homestretch_Small Icons_play.svg"
                   alt="Play Icon"
                   className='align-self-center f'
                   width={100}
                   height={100}
                   priority
              />
          </div>
        </div>
               <div className='md:pl-10 px-6 md:px-0'>
                <h3 className='text-blue font-bold text-3xl md:text-4xl mb-4'>
                  SubHeadline Here
                </h3>
                <p className='text-lg md:text-xl text-brown'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit illo magnam repellendus, animi molestiae? Saepe aut sequi non harum minus nulla sapiente deleniti id debitis commodi, veritatis, accusantium modi.
                </p>
               </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-6 md:px-0 mt-8'>
          <div className='relative h-80 md:h-96 rounded-xl overflow-hidden'>
              <img src="/images/success-stories/60789985fab18e1a58327a8e_marion-img.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
              <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex items-end py-8 px-10'>
               <h6 className='text-white text-2xl font-bold'>Marion</h6>
             </div>
           </div>
           <div className='relative h-80 md:h-96 rounded-xl overflow-hidden '>
              <img src="/images/success-stories/harits-mustya-pratama-g4iBHZM-sKY-unsplash.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
             <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex items-end py-8 px-10'>
               <h6 className='text-white text-2xl font-bold'>Anna</h6>
             </div>
           </div>
           <div className='relative h-80 md:h-96 rounded-xl overflow-hidden'>
              <img src="/images/success-stories/austin-pacheco-zolv5DWZGis-unsplash.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
              <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex items-end py-8 px-10'>
               <h6 className='text-white text-2xl font-bold'>Jane</h6>
             </div>
           </div>
           <div className='relative h-80 md:h-96 rounded-xl overflow-hidden'>
              <img src="/images/success-stories/julian-santa-ana-TPsaDZSs56Y-unsplash.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
              <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex items-end py-8 px-10'>
               <h6 className='text-white text-2xl font-bold'>Lorem</h6>
             </div>
           </div>
           <div className='relative h-80 md:h-96 rounded-xl overflow-hidden'>
              <img src="/images/success-stories/DSC_0027.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
              <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex items-end py-8 px-10'>
               <h6 className='text-white text-2xl font-bold'>Ipsom</h6>
             </div>
           </div>
           <div className='relative h-80 md:h-96 rounded-xl overflow-hidden'>
              <img src="/images/success-stories/colton-sturgeon-KX_EPpmBXZk-unsplash.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
              <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex items-end py-8 px-10'>
               <h6 className='text-white text-2xl font-bold'>Amy</h6>
             </div>
           </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-8'>
          <div className='px-6 md:px-0'>
          <div className='relative h-80 md:h-96 rounded-xl overflow-hidden'>
              <img src="/images/success-stories/dillon-kydd-J6MK67MIs0I-unsplash.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
              <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex items-end py-8 px-10'>
               <h6 className='text-white text-2xl font-bold'>Epsillon</h6>
             </div>
           </div>
          </div>
           <div className='relative h-80 md:h-96 md:rounded-xl md:col-span-2 overflow-hidden'>
              <img src="/images/success-stories/Screen Shot 2023-03-20 at 10.18.46 AM.png" alt="" className='h-full w-full absolute top-0 object-cover'/>
              <div className='h-full w-full absolute top-0 z-10 backdrop-opacity-10 backdrop-invert bg-black/30 flex justify-center'>
            <Image
                   src="/icons/Homestretch_Small Icons_play.svg"
                   alt="Play Icon"
                   className='align-self-center'
                   width={100}
                   height={100}
                   priority
              />
            </div>
           </div>
          </div>
          
           
        </section>
      </main>

      <Footer />
    </>
  )
}

export default SuccessStories