import ShortHero from '@/components/Short-hero'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

const benefits = [
    {
        icon: '/icons/Homestretch_Icons_employment.svg',
        text: 'Find a full-time job and stay employed'
    },
    {
        icon: '/icons/Homestretch_Icons_high school.svg',
        text: 'Graduate from high school'
    },
    {
        icon: '/icons/Homestretch_Icons_college.svg',
        text: 'Complete college or vocational school'
    },
    {
        icon: '/icons/Homestretch_Icons_self-sufficiency.svg',
        text: 'Focus on building self-sufficiency'
    },
    {
        icon: '/icons/Homestretch_Icons_pay off debt.svg',
        text: 'Pay taxes, pay off debt'
    },
    {
        icon: '/icons/Homestretch_Icons_own a home.svg',
        text: 'Own a home'
    }
]

const AboutUs = () => {
  return (
    <>
      <ShortHero 
        text={"We're here to help"}
        className={'shortHeroBlue'}
      />
     
     {/* ABOUT US */}
      <section className='md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 mt-24 mb-16 text-brown-dark'>
      <div className='md:flex gap-16'>
      <div className='px-6 md:px-0 mb-10 md:mb-0'>
        <h6 className='uppercase text-blue-dark'>About us</h6>
        <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1 mb-5'>
            Homestretch is a non-profit organization designed to address the root causes of homelessness for each family and reverse it.
        </h3>
        <div>
        <p className='text-lg md:text-xl text-brown mt-3 mb-5'>
        Many of our clients arrive at our doorstep in fervent despair. Many are fleeing for their lives from domestic abuse. Many are trapped in the cycle of poverty.
        </p>
        <p className='text-lg md:text-xl text-brown mt-3 mb-5'>
           All our clients have children under the age of 18
        </p>
        <p className='text-lg md:text-xl text-brown mt-3'>
        Homestretch is one of the few programs in the country with the comprehensive services to gather each family, address each dynamic, and enable permanent change.
        </p>
        </div>
       </div>
        <Image
                   src="/images/about-us/DJandJulio_BuildCribandTable3.png"
                   alt="Play Icon"
                   className='flex-shrink object-cover rounded-none md:rounded-xl'
                   width={847}
                   height={347}
                   priority
        />
      </div>
      <div className='px-6 md:px-0 mt-8'>
        <p className='text-lg md:text-xl text-brown mt-3 mb-5'>
        Homestretch families are able to achieve transformational change because they have, perhaps for the first time, the chance to address every problem in their lives with sufficient support to make swift and lasting progress.
        </p>
        <p className='text-lg md:text-xl text-brown mt-3 mb-5'>
        Because our expectations are high and we have such faith in what they can do, and because we remove all the reasons why they can’t, the families tend to make greater and more fundamental changes in their lives than they thought possible.
        </p>
        <p className='text-lg md:text-xl text-brown mt-3 mb-5'>
        Our program isn’t for everybody. It works best for people who really want to change their lives.
        </p>
        <p className='text-lg md:text-xl mt-3 mb-5 text-blue font-bold'>
        But at Homestretch, we – the Homestretch staff – feel like we – our clients, our volunteers, our donors, our supporters – are all in it together, and we hope you feel that way, too.
        </p>
        <p className='text-lg md:text-xl text-brown mt-3 mb-5'>
        With your help, true progress becomes truly possible.
        </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className='px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 flex justify-center pt-10 pb-14 md:pt-16 md:pb-24'>
        <div className='md:w-4/5 xl:w-3/5'>
        <p className='text-blue text-xl md:text-2xl'>
        “By giving them a place to live, their temporary homelessness is addressed; by giving them the tools to become self-sufficient, their poverty is ended. Homestretch aims to go deeper than merely providing housing; we address the fundamental causes of poverty for each family we serve.”
          </p>
          <p className='text-blue-dark font-semibold uppercase my-6'>
            — Christopher Fay, Homestretch Executive Director
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className='bg-gray-100 md:pt-20 pb-20 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 text-brown-dark'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='md:pr-20'>
            <Image
                   src="/images/about-us/haileysadlerselectedimage_26.png"
                   alt="Play Icon"
                   className='flex-shrink object-cover rounded-none md:rounded-xl'
                   width={973}
                   height={449}
                   priority
            />
            </div>
        <div className='px-6 md:px-0 mt-10 md:mt-0'>
       <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1 mb-5'>
            Our mission
        </h3>
        <p className='text-lg md:text-xl text-brown-dark mt-3 mb-5'>
        The mission of Homestretch is to empower homeless families with children living in Virginia to attain permanent housing and self-sufficiency by giving them the skills, knowledge and hope they need to become productive participants in the community.
        </p>
        <p className='text-lg md:text-xl text-brown-dark mt-3 mb-5'>
        Since our inception in 1990, we have assisted over 2,000 families to achieve stability and self-sufficiency. The aim is to surround the homeless families with such vigorous supports that they can address the multiple barriers in their path and make as dramatic progress as possible while they are in Homestretch.
        </p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-12 md:mt-20'>
       <div className='order-2 md:order-1 px-6 md:px-0 mt-10 md:mt-0'>
       <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1 mb-5'>
            Why we do what we do
        </h3>
        <p className='text-lg md:text-xl text-brown-dark mt-3 mb-5'>
            Our program is designed to work with each family, individually, to help the family develop a measurable and achievable service plan which addresses the root causes of homelessness.
        </p>
        <p className='text-lg md:text-xl text-brown-dark mt-3 mb-5'>
        65% of the families we serve are homeless due to domestic violence, while others are homeless due to medical crises, human trafficking, loss of loved ones or some other economic downturn.
        </p>
        <p className='text-lg md:text-xl text-brown-dark mt-3 mb-5'>
        Homestretch graduates break the cycle, which means their lives, and their children’s lives, are uplifted.
        </p>
            </div>
            <div className='md:pl-20 md:order-2'>
            <Image
                   src="/images/about-us/DSC_8924.png"
                   alt="Play Icon"
                   className='flex-shrink object-cover rounded-none md:rounded-xl'
                   width={973}
                   height={449}
                   priority
            />
            </div>
        </div>
      </section>

      {/* AFTER THE HOMESTRETCH PROGRAM */}
      <section className='pt-20 pb-40 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 text-brown-dark'>
        <h3 className='text-blue font-bold text-3xl md:text-4xl  mt-1 mb-10'>
            After the Homestretch program, families are able to:
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {benefits.map((item, index) => (
                <div key={index} className='flex gap-6 items-center pr-16'>
                 <Image
                   src={item.icon}
                   alt="Event Icon"
                   width={72}
                   height={72}
                   priority
                 />
                 <p className='text-lg md:text-xl text-brown'> { item.text } </p>
                </div>
            ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer/>
    </>
  )
}

export default AboutUs