import ShortHero from '@/components/Short-hero'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

const Financials = () => {
  return (
    <>
      <ShortHero 
        text={'2021 Financials'}
        className={'shortHeroBlue'}
      />
      <main className='px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 pt-20 md:pt-28 pb-28 md:pb-40'>
        <section className='flex flex-col md:flex-row'>
            <div>
                <h1 className='text-3xl md:text-4xl text-primary font-bold pb-5'>Total income: $3,751,930</h1>
                <Image
                   src="/images/financials/Screen Shot 2023-03-11 at 10.51.43 AM.png"
                   alt="Play Icon"
                   className='flex-shrink rounded-none'
                   width={846}
                   height={410}
                   priority
               />
            </div>
            <div className='mt-4 md:mt-0'>
            <Image
                   src="/images/financials/Screen Shot 2023-03-11 at 10.51.49 AM.png"
                   alt="Play Icon"
                   className='flex-shrink rounded-none'
                   width={902}
                   height={521}
                   priority
               />
            </div>
        </section>

        <section className='mt-16 md:mt-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='relative border-[6px] border-blue rounded-xl flex flex-col items-center justify-center h-72'>
                    <div className='absolute -top-[27px] flex justify-center h-max'>
                    <div className='bg-white px-2 w-max h-max'>
                    <img src="/icons/Homestretch_Small Icons_heart.svg" alt="" className='w-[58px] h-[54px] '/>
                    </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <p className='font-bold text-blue-dark text-xl md:text-2xl mb-4'>our latest audit</p>
                      <Button 
                       value={'Read'}
                       className={'btn-green'}
                      />
                    </div>
                </div>

                <div className='relative border-[6px] border-blue rounded-xl flex flex-col items-center justify-center h-72 mt-8 md:mt-0'>
                    <div className='absolute -top-[27px] flex justify-center h-max'>
                    <div className='bg-white px-2 w-max h-max'>
                    <img src="/icons/Homestretch_Small Icons_heart.svg" alt="" className='w-[58px] h-[54px] '/>
                    </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <p className='font-bold text-blue-dark text-xl md:text-2xl mb-4'>our latest 990</p>
                      <Button 
                       value={'Read'}
                       className={'btn-green'}
                      />
                    </div>
                </div>

                <div className='relative border-[6px] border-blue rounded-xl flex flex-col items-center justify-center h-72 mt-8 md:mt-0'>
                    <div className='absolute -top-[27px] flex justify-center h-max'>
                    <div className='bg-white px-2 w-max h-max'>
                    <img src="/icons/Homestretch_Small Icons_heart.svg" alt="" className='w-[58px] h-[54px] '/>
                    </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <p className='font-bold text-blue-dark text-xl md:text-2xl mb-4'>our latest annual report</p>
                      <Button 
                       value={'Read'}
                       className={'btn-green'}
                      />
                    </div>
                </div>
            </div>

            <div className='mt-6 texl-lg text-brown'>
                <p>
                    Homestretch is funded by the City of Falls Church, corporations, foundations, civic groups, faith institutions, and individuals. Homestretch only receives 2% of its funding from federal grants.
                </p>
            </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Financials