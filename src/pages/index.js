import Image from 'next/image';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/Mobile-Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Home Stretch',
  description: 'Generated by create next app',
};

const impacts = [
  {
    bigText: '2,000+',
    smallText: 'families helped since 1990',
  },
  {
    bigText: '93%',
    smallText: 'of graduates remain employed after graduation',
  },
  {
    bigText: '$681,352',
    smallText: 'in debts repaid over the last six years',
  },
  {
    bigText: '147.5%',
    smallText: 'the average rise in income for a graduating family',
  },
  {
    bigText: '62%',
    smallText: 'of adult clients enrolled in college or vocational training',
  },
];

const involvements = [
  {
    img: '/images/homepage/60775515f908ece2f5102655_icon-help.png',
    headline: 'Get involved headline',
    text: 'Find out how you can get involved and help the community',
    btnText: 'How you can help',
  },
  {
    img: '/images/homepage/6077559f2ade43ad39367862_icon-volunteer.png',
    headline: 'Volunteer headline',
    text: 'Explore volunteer opportunities we have',
    btnText: 'Volunteer',
  },
  {
    img: '/images/homepage/6077559faef1652a456f7b8d_icon-programs.png',
    headline: 'Programs headline',
    text: 'Discover HomeStretch VA programs',
    btnText: 'Our programs',
  },
];

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <section className='lg:hidden'>
        <MobileNavbar />
      </section>
      <main>
        {/* <!-- HERO SECTION --> */}
        <section id='hero-section' className='h-max overflow-y-hidden'>
          <div className='hero-section bg-hero-img bg-no-repeat bg-cover bg-center h-max md:h-screen overflow-hidden'>
            <div className='h-full w-full backdrop-opacity-10 backdrop-invert bg-black/30 pt-28 pb-40 overflow-hidden'>
              <section className='absolute top-0 w-full hidden lg:block'>
                <Navbar />
              </section>
              <div className='h-full md:flex items-center gap-40 text-white px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 overflow-hidden'>
                <div className='w-full md:w-1/2 lg:pr-4 xl:pr-10'>
                  <div className='block text-left'>
                    <h1 className='text-[3.5rem] mb-10 font-bold leading-tight'>
                      We are empowering families to build lives
                    </h1>
                  </div>
                  <div className='flex gap-6 justify-start'>
                    <Button value={'Give Now'} className={'btn-green'} />
                    <Button className={'btn-white'} value={'Learn more'} />
                  </div>
                </div>

                {/* CALENDER */}
                <div className='bg-white text-blue-dark w-[350px] rounded-lg overflow-hidden hidden md:block'>
                  <div className='flex justify-between px-6 py-4'>
                    <div>
                      <span className='block'>OCTOBER</span>
                      <span className='block font-bold text-6xl tracking-[0.02em] text-blue h-max'>
                        24
                      </span>
                    </div>
                    <div>
                      <Image
                        src='/icons/Homestretch_Small Icons_event.svg'
                        alt='Event Icon'
                        width={42}
                        height={42}
                        priority
                      />
                    </div>
                  </div>
                  <div className='px-6 py-6'>
                    <span className='block font-bold text-blue text-3xl'>
                      Event Title Lorem Ipsom Epsillon
                    </span>
                    <span className='block uppercase pt-2'>7 - 9 pm EST</span>
                  </div>
                  <div className='flex justify-between items-center bg-blue text-white px-6 py-2 mt-6'>
                    <span className='uppercase text-lg font-bold'>Register Now</span>
                    <img src="/icons/Vector Smart Object.png" alt="" />
                  </div>
                </div>
              </div>

              <div className='absolute bottom-[-2px] hidden md:block'>
                <Image
                  src='/images/homepage/homestretch-hero-graphic-01.svg'
                  alt='Event Icon'
                  width={1648}
                  height={40}
                  priority
                />
              </div>
            </div>
          </div>

          {/* MOBILE CALENDER */}
          <div className='bg-blue-dark pb-32 md:hidden relative'>
            <div className='px-8 pt-10'>
              <div className='bg-white text-blue-dark w-full rounded-lg overflow-hidden'>
                <div className='flex justify-between px-6 py-4'>
                  <div>
                    <span className='block'>OCTOBER</span>
                    <span className='block font-bold text-6xl tracking-[0.02em] text-blue'>
                      24
                    </span>
                  </div>
                  <div>
                    <Image
                      src='/icons/Homestretch_Small Icons_event.svg'
                      alt='Event Icon'
                      width={42}
                      height={42}
                      priority
                    />
                  </div>
                </div>
                <div className='px-6 py-6'>
                  <span className='block font-bold text-blue text-xl'>
                    Event Title Lorem Ipsom Epsillon
                  </span>
                  <span className='block uppercase pt-2'>7 - 9 pm EST</span>
                </div>
                <div className='flex justify-between items-center bg-blue text-white px-6 py-2 mt-6'>
                  <span className='uppercase font-bold'>Register Now</span>
                  <img src="/icons/Vector Smart Object.png" alt="" />
                </div>
              </div>
            </div>
            <div className='mt-10 absolute bottom-[-2px]'>
              <Image
                src='/images/homepage/Homestretch_Hero Graphic-02.svg'
                alt='Event Icon'
                //  className='absolute bottom-0'
                width={1648}
                height={20}
                priority
              />
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 my-20 '>
          <div className='xl:pr-20 2xl:pr-24 3xl:32 px-6 md:px-0'>
            <h6 className='uppercase text-blue-dark'>About us</h6>
            <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1'>
              We are building a better world through education
            </h3>
            <p className='text-xl font-light mt-3 mb-5 text-brown-dark'>
              For more than 30 years Homestretch has helped homeless families in
              Virginia become self-sufficient by giving them the skills,
              knowledge and hope they need to become productive participants in
              the community.
            </p>
            <Button value={'About CTA'} className={'btn-green'} />
          </div>
          <div>
            <div className='bg-video-cover bg-no-repeat bg-cover bg-center h-80 md:h-96 md:rounded-xl overflow-hidden'>
              <div className='h-full w-full backdrop-opacity-10 backdrop-invert bg-black/30 flex justify-center'>
                <Image
                  src='/icons/Homestretch_Small Icons_play.svg'
                  alt='Play Icon'
                  className='align-self-center'
                  width={124}
                  height={124}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR IMPACTS */}
        <section className='px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40'>
          <div>
            <h6 className='uppercase text-blue-dark'>Our impact</h6>
            <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1'>
              Headline lorem ipsom
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {impacts.map((impact, index) => (
              <div key={index} className='bg-blue-100 p-8 xl:p-10 2xl:p-12 3xl:p-16'>
                <h1 className='font-bold text-5xl xl:text-6xl tracking-[0.02em] text-blue-dark mb-2'>
                  {impact.bigText}
                </h1>
                <p className='text-xl'> {impact.smallText} </p>
              </div>
            ))}
            <div className='bg-primary-light flex flex-col justify-center p-8 xl:p-10 2xl:p-12 3xl:p-16'>
              <span className='text-2xl font-bold text-blue-dark flex items-center gap-3'>
                Explore our programs 
                <Image
            src='/icons/angle-right-solid.svg'
            alt='Vercel Logo'
            className=''
            width={10}
            height={5}
            priority
          />
              </span>
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className='bg-success-story-img bg-no-repeat bg-cover bg-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-20 my-4'>
          <div>
            <h6 className='uppercase text-blue-dark'>Success Stories</h6>
            <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1'>
              Headline lorem ipsom
            </h3>
          </div>
          <div className='mt-10 flex flex-col md:flex-row md:gap-20'>
            <div className='md:hidden'>
              <Image
                src='/images/homepage/60789985fab18e1a58327a8e_marion-img.png'
                alt='Event Icon'
                width={200}
                height={200}
                priority
              />
            </div>

            <Image
              src='/images/homepage/60789985fab18e1a58327a8e_marion-img.png'
              alt='Event Icon'
              width={400}
              height={400}
              className='hidden md:block'
              style={{ objectFit: 'contain' }}
              priority
            />

            <div className='mt-8 xl:pt-16 md:pr-8 lg:pr-12 xl:pr-16'>
              <p className='text-blue text-2xl'>
                “Over the next two years, Marion blossomed. She learned English,
                got her T visa, went to school to attain a medical assistant
                certificate, followed by a nursing assistant certificate, and
                finally a degree as a registered nurse. She did all of this
                while working full time at a variety of jobs and complying with
                all of the demands of our rigorous program.”
              </p>
              <p className='text-blue-dark font-semibold uppercase my-6'>
                - Marion, Registered Nurse, joined Homestretch 20XX
              </p>
              <Button value={'More Stories'} className={'btn-green'} />
            </div>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section className='text-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 pt-16 pb-20 md:mb-0'>
          <div>
            <h6 className='uppercase text-blue-dark'>Get involved</h6>
            <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1'>
              Headline lorem ipsom
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {involvements.map((item, index) => (
              <div
                key={index}
                className='lg:p-8 2xl:p-16 pt-0 grid grid-cols-2 md:block mt-14 xl:mt-0'
              >
                <div className='hidden md:hidden lg:flex justify-center'>
                  <Image
                    src={item.img}
                    alt='Event Icon'
                    width={216}
                    height={216}
                    priority
                  />
                </div>
                <div className='hidden md:flex lg:hidden justify-center'>
                  <Image
                    src={item.img}
                    alt='Event Icon'
                    width={150}
                    height={150}
                    priority
                  />
                </div>
                <div className='flex justify-center md:hidden h-[100px] w-[100px]'>
                  <Image
                    src={item.img}
                    alt='Event Icon'
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div>
                  <div className='md:mb-6 md:mt-14 text-left md:h-36 md:text-center'>
                    <span className='font-bold text-2xl text-blue-dark mb-2'>
                      {item.headline}
                    </span>
                    <p className='text-xl text-brown-dark mt-4'> {item.text} </p>
                  </div>
                  <div className='flex justify-start md:justify-center mt-3'>
                    <Button value={item.btnText} className={'btn-green'} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUBSCRIPTION */}
        <section className='px-6 py-28 md:py-40 md:p-40 bg-gray-100'>
          <div className='text-center mb-10'>
            <h6 className='uppercase text-blue-dark'>Stay in the know</h6>
            <h3 className='text-blue font-bold text-3xl md:text-4xl mt-1'>
              Headline lorem ipsom
            </h3>
          </div>
          <div className='w-full justify-center hidden md:flex'>
            <div className='relative md:w-4/5 lg:w-3/4 xl:w-1/2'>
              <input
                type='text'
                id='simple-search'
                className='bg-white text-lg text-gray-900 w-full rounded-lg border-0 focus:bg-gray-200 focus:border-0 focus:outline-0 focus:ring-0 block pl-8 pr-3 py-[7px]'
                placeholder='Email'
                required
              />
              <div className='absolute top-0 right-0 bottom-0 my-auto'>
                <Button value={'Subscribe'} className={'btn-blue'} />
              </div>
            </div>
          </div>
          <div className='w-full md:hidden'>
            <div className=' flex justify-center items-center flex-col gap-8'>
              <input
                type='text'
                id='simple-search'
                className='bg-white text-gray-900 w-full rounded-lg border-0 focus:bg-gray-200 focus:border-0 focus:outline-0 focus:ring-0 block pl-8 p-3'
                placeholder='Email'
                required
              />

              <Button value={'Subscribe'} className={'btn-blue'} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
