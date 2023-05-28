import Button from '@/components/Button'
import Footer from '@/components/Footer'
import ShortHeroWhite from '@/components/ShortHeroWhite'
import React from 'react'

const Programs = () => {
  return (
    <>
    <ShortHeroWhite />
        <main className='md:pb-40'>
            <section className='flex flex-col md:flex-row items-center pb-24 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40'>
            <h1 className='text-blue font-bold text-5xl mb-16 md:hidden'>We are powerful together</h1>
                <div className='md:w-3/5 order-2 md:pr-20 mt-6 md:mt-0'>
                    <h1 className='text-blue font-bold text-5xl mb-16 hidden md:block'>We are powerful together</h1>
                    <h3 className='text-blue font-bold text-3xl md:text-4xl mb-4'>Our mission</h3>
                    <p className='text-blue text-2xl'>
                    The mission of Homestretch is to empower families experiencing homelessness in Virginia to attain permanent housing and self-sufficiency by giving them the skills, knowledge and hope they need to become productive participants in the community.
                    </p>
                </div>
                <div className='md:order-2'>
                    <img src="/images/programs/istockphoto-915897178-1024x1024.png" alt="" />
                </div>
            </section>

            <section className='md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40'>
                <div className='bg-gray-100 px-6 py-20 md:py-24 md:px-16'>
                <h3 className='text-blue font-bold text-3xl md:text-4xl mb-4'>The need for Homestretch</h3>
                <p className='text-xl text-brown-dark'>
                Family homelessness is almost always a consequence of three things. First, families become homeless after suffering a crisis such as the loss of a job, domestic violence, or an accident. Second, this crisis triggers an economic spiral where they find themselves unable to pay for housing, food, childcare, health care, and other essentials. And third, the family has a lack of social support networks they can rely on. In other words, they have no family or friends they can move in with.  For a family with young children to end up homeless can be devastating.
                </p>
                </div>
            </section>

            <section className='py-20 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40'>
            <div className='mb-8 hidden md:block'>
        <h6 className='uppercase md:text-lg text-blue-dark'>Life example</h6>
        <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1 mb-2'>How the program works</h3>
      </div>
          
          <div className='flex gap-10 md:hidden items-center'>
          <div>
                   <img src="/images/programs/name_-gravity-fKddmPKvv9U-unsplash.png" alt="" />
                </div>
          <div>
               <h6 className='uppercase md:text-lg text-blue-dark'>Life example</h6>
               <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1'>How the program works</h3>
             </div>
          </div>
                <div className='flex gap-10 md:gap-16 2xl:gap-36 mt-10 md:mt-0'>
                <div className='shrink-0 hidden md:block'>
                   <img src="/images/programs/name_-gravity-fKddmPKvv9U-unsplash.png" alt="" />
                </div>
                <div className='text-lg md:text-xl text-brown px-6'>
                    <div className='border-l-4 pl-12 md:pl-16 border-primary relative pb-10'>
                        <div className='bg-white h-max w-max absolute -left-[29px] rounded-full'>
                          <img src="/images/programs/icons/Homestretch_Icons_1.png" alt=""/>
                        </div>
                        <p>
                        Maria finally fled with her daughter after suffering years of physical abuse from her husband. They found themselves in the Fairfax County homeless shelter system where they were desperate, frightened, and alone. 
                        </p>
                    </div>
                    <div className='border-l-4 pl-12 md:pl-16 border-primary relative pb-10'>
                        <div className='bg-white h-max w-max absolute -left-[29px] rounded-full'>
                          <img src="/images/programs/icons/Homestretch_Icons_2.png" alt=""/>
                        </div>
                        <p>
                        And then they were referred to Homestretch. 
                        </p>
                    </div>
                    <div className='border-l-4 pl-12 md:pl-16 border-primary relative pb-10'>
                        <div className='bg-white h-max w-max absolute -left-[29px] rounded-full'>
                          <img src="/images/programs/icons/Homestretch_Icons_3.png" alt=""/>
                        </div>
                        <p>
                        At Homestretch the family was provided with temporary housing and our skilled team helped Maria get a job, learn English, and study accounting.
                        </p>
                    </div>
                    <div className='border-l-4 pl-12 md:pl-16 border-primary relative pb-10'>
                        <div className='bg-white h-max w-max absolute -left-[29px] rounded-full'>
                          <img src="/images/programs/icons/Homestretch_Icons_4.png" alt=""/>
                        </div>
                        <p>
                        In the two years she was with Homestretch, Maria had the time she needed to address all the barriers she faced and make extraordinary progress. 

                        </p>
                    </div>
                    <div className='pl-16 relative'>
                        <div className='bg-white h-max w-max absolute -left-[29px] rounded-full'>
                          <img src="/images/programs/icons/Homestretch_Icons_5.png" alt=""/>
                        </div>
                        <p>
                        She graduated from Homestretch a couple of years ago and today Maria owns her own home and is a loan officer writing more than a $1 million a month in mortgages.
                        </p>
                    </div>
                </div>
                </div>
            </section>

            <section className='py-16 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40'>
                <div>
                <h3 className='text-blue font-bold text-3xl md:text-4xl mb-2'>The Homestretch impact</h3>
                <p className='text-lg text-brown'>
                   The overall statistics demonstrate the impact of our work. Some critical numbers that help tell the story of success include:
                </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                 <div className='bg-blue-100 p-8 xl:p-10 2xl:p-12 3xl:p-16'>
                   <h1 className='font-bold text-6xl tracking-[0.02em] text-blue-dark mb-2'>92%</h1>
                   <p className='text-xl'>
                    of Homestretch adult clients are employed, up from about 50% when they arrive. 
                   </p>
                 </div>
                 <div className='bg-blue-100 p-8 xl:p-10 2xl:p-12 3xl:p-16'>
                   <h1 className='font-bold text-6xl tracking-[0.02em] text-blue-dark mb-2'>$5,989</h1>
                   <p className='text-xl'>
                    average in savings and $0 debt after only two years. Families enter on average with $4,814 in debt. 
                  </p>
                 </div>
                 <div className='bg-blue-100 p-8 xl:p-10 2xl:p-12 3xl:p-16'>
                   <h1 className='font-bold text-6xl tracking-[0.02em] text-blue-dark mb-2'>$2,354</h1>
                   <p className='text-xl'>
                    family income on average when they graduate. Family average income when they enter is $950. 
                   </p>
                 </div>
                </div>
            </section>

            <section className='px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-16'>
            <h3 className='text-blue font-bold text-3xl md:text-4xl mb-4'>Our clients profile</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-brown-dark'>
                <div>
                <p className='text-lg md:text-xl md:pr-10 lg:pr-20'>
                While families with the least difficult challenges are being rapidly rehoused out of the shelter system, the most challenging cases are referred to Homestretch. Homestretch is commonly sent families with no work history, few marketable skills, chronic health issues, and significant emotional trauma. Some may not speak English. The average age of someone in the program is only 8 years old.
                </p>
                </div>
                <div className='text-lg md:text-xl'>
                    <div className='flex items-center'>
                        <span className='text-3xl font-bold text-primary'>90%</span>
                        <span className='pl-6'>of the adults in Homestretch families are single mothers.</span>
                    </div>
                    <div className='flex mt-6'>
                        <span className='text-3xl font-bold text-primary'>65%</span>
                        <span className='pl-6'>of Homestretch families are homeless due to domestic violence or human trafficking; 75% have been exposed to serious violence.</span>
                    </div>
                    <div className='flex items-center mt-6'>
                        <span className=' text-3xl font-bold text-primary'>10%</span>
                        <span className='pl-6'>of Homestretch families are headed by veterans.</span>
                    </div>
                    <div className='flex items-center mt-6'>
                        <span className=' text-3xl font-bold text-primary'>41%</span>
                        <span className='pl-6'>of Homestretch clients have documented disabilities.</span>
                    </div>
                    <div className='flex items-center mt-6'>
                        <span className=' text-3xl font-bold text-primary'>50%</span>
                        <span className='pl-6'>of Homestretch adults have no work history.</span>
                    </div>
                    <div className='flex items-center mt-6'>
                        <span className=' text-3xl font-bold text-primary'>75%</span>
                        <span className='pl-6'>have damaged credits and high debt loads.</span>
                    </div>
                </div>
            </div>
            </section>

            <section className='py-20 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40'>
            <h3 className='text-blue font-bold text-3xl md:text-4xl mb-4'>Overview of the Homestretch program</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl text-brown'>
                <div>
                    <p>
                    Homestretch is a Transformational Housing program. Housing is a vital component of the Homestretch program, but we see housing as the critical foundation upon which all the other work that leads to transformational change for homeless families takes place.
                    </p>
                    <p className='mt-7'>
                    Homestretch operates on the belief that high expectations produce outstanding achievements. For this reason, compliance with some of our services is mandatory. All our clients are expected to make strides toward self-sufficiency.  Families coming into Homestretch understand that they must change certain things in their lives in order to achieve lasting safety and independence. Each adult, if physically able, is expected to work 40 hours a week or do a combination of 40 hours of work and schooling designed to significantly increase their earning power.
                    </p>
                </div>
                <div>
                    <p>
                    Ten percent of the family income is placed into a managed savings account that Homestretch uses to pay down their debt and later sets aside to establish a nest egg for when they move into their own home.  Another 30 percent of their income is required for rent.
                    </p>
                    <p className='mt-7'>
                    The Homestretch program holds both our clients and our staff accountable for excellent results leading to client debt reduction and income growth. As debts are reduced and income grows, the family moves toward self-sufficiency. To insure progress, our talented staff provides each family with the individualized resources and supports they need to make transformative changes. A rich tapestry of services is provided:
                    </p>
                </div>
            </div>
            </section>

            <section className='flex justify-center bg-primary-light px-6 pb-28 md:pb-20 md:px-0 py-20'>
                <div className='w-max'>
                <h3 className='text-blue font-bold text-center text-3xl md:text-4xl mb-6'>Our impact headline lorem ipsom</h3>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                        <Button 
                          value={'Kidstretch'}
                          className={'btn-green'}
                        />
                        <button className='border-2 text-blue border-blue font-bold uppercase px-6 py-[6px] w-max rounded'>
                            How you can help
                        </button>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </>
  )
}

export default Programs