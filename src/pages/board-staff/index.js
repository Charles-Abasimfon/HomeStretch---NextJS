import ShortHeroWhite from '@/components/ShortHeroWhite';
import React from 'react'
import Image from 'next/image';
import Footer from '@/components/Footer';
import Link from 'next/link';

const directors = [
    {
        name: 'Kerry Morgan',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: 'President',
        company: 'BrandRev Consulting'
    },
    {
        name: 'Mahreen Rashid',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: 'Vice President',
        company: 'Excella'
    },
    {
        name: 'Mike Leavit',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: 'Secretary',
        company: 'John Moriarty & Associates of Virginia'
    },
    {
        name: 'Amy Thorn',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: 'Treasurer',
        company: 'BDO USA, LLP'
    },
    {
        name: 'Mark Bronfman',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'Sagemark Consulting'
    },
    {
        name: 'Bill Landon',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'CMG Financial'
    },
    {
        name: 'Michael Long',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'The MITRE corporation'
    },
    {
        name: 'JP Long',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'Christ Crossman United Methodist Church'
    },
    {
        name: 'Trent Smith',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'Insight Property'
    },
    {
        name: 'Claudia Flamenco',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: 'Graduated Client',
        company: 'RE MAX Home Realty'
    },
    {
        name: 'Bill Fortier',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'Hilton'
    },
    {
        name: 'Scott Adams',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'McGuire Woods'
    },
    {
        name: 'John Streeten',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: '',
        company: 'Vienna Presbyterian Church'
    },
    {
        name: 'Patricia Tetro',
        img: '/images/board-staff/Rectangle 127 copy 5.png',
        role: 'Community Member',
        company: ''
    }
];

const staff =[
    {
        name: 'Christopher Fay',
        role: 'Executive Director'
    },
    {
        name: 'Brenda Wilks',
        role: 'Deputy Director'
    },
    {
        name: 'Alejandra Carrera',
        role: 'Senior Case Manager'
    },
    {
        name: 'Buthaina Abu Bader',
        role: 'Senior Case Manager'
    },
    {
        name: 'Jasmine Craun',
        role: 'Case Manager'
    },
    {
        name: 'Kimberly Ventura',
        role: 'Case Manager'
    },
    {
        name: 'Reina Escobar',
        role: 'Housing Navigator'
    },
    {
        name: 'Dania Liebergesell',
        role: 'Child Services Manager'
    },
    {
        name: 'Emma Ryanmiller',
        role: 'Child Services Manager'
    },
    {
        name: 'Soneli Bhadra',
        role: 'Manager of Employment Services'
    },
    {
        name: 'Valerie Darden',
        role: 'Employment Counselor'
    },
    {
        name: 'Nekita Jones',
        role: 'Employment Counselor'
    },
    {
        name: 'Nan Monday',
        role: 'Grants and Communications Manager'
    },
    {
        name: 'Fatima Paniagua Emestica',
        role: 'Development Associate'
    },
    {
        name: 'Elisabeth Tropea',
        role: 'Volunteer and Development Coordinator'
    },
    {
        name: 'Mary Marcellin',
        role: 'Financial Consultant'
    },
    {
        name: 'Heather Lynskey',
        role: 'Credit Counselor'
    },
    {
        name: 'Rosemary Jellish',
        role: 'Bookkeeper'
    },
    {
        name: 'Kim Rose',
        role: 'Kidstretch Director'
    },
    {
        name: 'Hope Magness-Sullivan',
        role: 'Kidstretch Lead Teacher'
    },
    {
        name: 'Carla Gray',
        role: 'Kidstretch Program Assistant'
    },
    {
        name: 'Maria Cerna',
        role: 'Early Childhood Specialist'
    },
    {
        name: 'John Crone',
        role: 'Maintenance'
    }
]

const BoardStaff = () => {
  return (
    <>
    <ShortHeroWhite 
      text={'Board of Directors and staff'}
    />

    {/* DESKTOP VIEW */}
        <main className='md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 mb-40 hidden md:block'>
            <div className='mt-10 mb-8'>
                <div className='uppercase font-bold flex gap-8 border-b-2 border-blue-dark'>
                    <Link href="/" className='text-white bg-blue-dark py-2 px-4'>Board of Directors</Link>
                    <Link href="/" className='text-blue bg-white border-blue-dark border-r-2 border-l-2 border-t-2 py-2 px-4'>Homestretch staff</Link>
                </div>
            </div>

            <section>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {directors.map((item, index) => (
                        <div key={index} className='mt-7'>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='mt-3'>
                            {item.role !== '' && <p className='uppercase text-sm text-blue-dark'>{item.role}</p> }
                            <div className='flex justify-between pr-3'>
                            <h4 className='text-blue text-xl font-bold'>{item.name}</h4>
                            <Image
                               src="/icons/Homestretch_Small Icons_plus w- circle.svg"
                               alt="Vercel Logo"
                               className=""
                               width={30}
                               height={30}
                               priority
                             />
                            </div>
                            {item.company !== '' && <p className='text-sm text-primary underline'>{item.company}</p> }
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </main>


         {/* MOBILE VIEW */}
        <main className='px-6 mb-24 md:hidden'>
            <section>
            <div className='border-b-2 border-blue-dark pb-3 mb-12 mt-10'>
                <h2 className='font-bold uppercase text-blue-dark'>Board of directors</h2>
            </div>
                <div className='grid grid-cols-1 gap-6'>
                    {directors.map((item, index) => (
                        <div key={index} className='flex gap-8'>
                        <div className='shrink-0'>
                            <img src={item.img} alt="" className='w-[150px] h-[150px] '/>
                        </div>
                        <div className='mt-3 col-span-2'>
                            {item.role !== '' && <p className='uppercase text-sm text-blue-dark'>{item.role}</p> }
                            <div>
                            <h4 className='text-blue text-xl font-bold'>{item.name}</h4>
                            </div>
                            {item.company !== '' && <p className='text-sm text-primary underline'>{item.company}</p> }
                            <Image
                               src="/icons/Homestretch_Small Icons_plus w- circle.svg"
                               alt="Vercel Logo"
                               className="mt-3"
                               width={30}
                               height={30}
                               priority
                             />
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            <section>
            <div className='border-b-2 border-primary pb-3 mb-10 mt-24'>
                <h2 className='font-bold uppercase text-primary'>Homestretch staff</h2>
            </div>
                <div>
                    {staff.map((item, index) => (
                        <div key={index} className='mt-6'>
                           <h5 className='text-blue-dark text-2xl font-bold'>{ item.name }</h5>
                           <p className='text-blue text-lg'>{ item.role }</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>

        <Footer />
    </>
  )
}

export default BoardStaff