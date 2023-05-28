import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const ShortHero = ({ text, className }) => {
  return (
    <div
      className={className}
    >
      <div className='flex items-center justify-between'>
      <Navbar />
      <div className='block lg:hidden pr-6 md:pr-10 lg:pr-16 xl:pr-24 2xl:pr-32 3xl:pr-40'>
        <Image
            src='/icons/Group 1.png'
            alt='Vercel Logo'
            className=''
            width={30}
            height={10}
            priority
          />
        </div>
      </div>
      <h1 className="mt-24 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 text-white text-left text-4xl md:text-5xl font-bold">
        {' '}
        {text}{' '}
      </h1>
    </div>
  )
}

export default ShortHero