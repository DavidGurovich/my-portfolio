import React, {useEffect} from 'react'
import {HiOutlineChevronDoubleDown} from 'react-icons/hi'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section 
    id = "home"
    className='bg-neutral-900 min-h-screen flex md:flex-row flex-col items-center'>
      
      <div className='flex-1'>
        <div className='md:text-left text-center md:ml-10'>
          <p className='text-red-600'> Hello, my name is</p>
          <h1 className='text-white font-bold sm:text-7xl md:leading-normal text-2xl leading-10'>
              David Gurovich
          </h1>
          <h2 className='font-bold sm:text-7xl text-4xl text-gray-500'> I'm a Front-End Developer</h2>
          <p className='text-white max-w-[700px] py-4'>
            I'm a Computer Science student and aspiring Developer specializing in 
            building and designing beautiful websites. Currently, I'm focused on improving my JavaScript skills
            and mastering ReactJS.  </p>
        </div>
        
        <button className='px-5 py-3 border-2 hover:bg-red-600 hover:border-red-600 text-white'>
          View Work
          <a href="#about" >
                    <HiOutlineChevronDoubleDown/>
          </a>
        </button>
        
      </div>
      
    </section>
  )
}

export default Home