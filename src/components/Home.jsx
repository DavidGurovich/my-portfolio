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
    className='bg-gray-900 min-h-screen flex md:flex-row flex-col items-center'>
      
      <div className='flex-1'>
        <div className='md:text-left text-center md:ml-10'>
          <h1 className='text-white font-bold md:text-5xl md:leading-normal text-2xl leading-10'>
              <span className='md:text-6xl text-5xl text-red-700 '>Hi, I'm David.</span>
              <br/>
              Computer Science Student | Aspiring developer
          </h1>
          <h4 className ="font-bold text-gray-700 md:leading-normal leading-5 md:text-2xl text-lg"> Based In San Diego, California </h4>
        </div>
        
        <a href="#about" className='text-red-500 pt-4'>
          
          <HiOutlineChevronDoubleDown/>
        </a>
      </div>
      
    </section>
  )
}

export default Home