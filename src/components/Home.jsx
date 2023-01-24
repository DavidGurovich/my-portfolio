import React, {useEffect} from 'react'
import {HiOutlineChevronDoubleDown, HiMail} from 'react-icons/hi';
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {GiBlackBook} from 'react-icons/gi';
import {BiPaint} from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section 
    id = "home"
    className='bg-neutral-900 w-screen h-screen '>
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
          <p className='text-red-600 md:text-3xl'> Hi there! My name is</p>
          <h1 className='text-white font-bold sm:text-7xl md:leading-normal text-2xl leading-10'>
              David Gurovich.
          </h1>
          <h2 className='font-bold sm:text-7xl text-4xl text-gray-500'> I'm a Front-End Developer</h2>
          <p className='text-white max-w-[700px] py-4'>
            I'm a Computer Science student and aspiring Developer specializing in 
            building and designing beautiful websites. Currently, I'm focused on improving my JavaScript skills
            and mastering ReactJS.  </p>
          <p className='text-white'> <GiBlackBook/></p>
        
        
        <div className='flex flex-row gap-5 mt-5 '>
          
            
          <a target = "_blank" rel="noopener noreferrer" href="https://github.com/DavidGurovich" >
              <button className='flex flex-row items-center gap-2 px-5 py-2 border-2 rounded-lg hover:border-red-600 text-white'>
                  <span className='text-red-600'><SiGithub/></span>
                   <p>Github</p>
              </button> 
          </a>
          
          <a href= "_blank" rel="noopener noreferrer">
              <button className='flex flex-row items-center gap-2 px-5 py-2 border-2 rounded-lg hover:border-red-600 text-white'>
                  <span className='text-red-600'><SiLinkedin/></span>
                   <p>LinkedIn</p>
              </button> 
          </a>
          <a href= "_blank" rel="noopener noreferrer" >
              <button className='flex flex-row items-center gap-2 px-5 py-2 border-2 rounded-lg  hover:border-red-600 text-white'>
                  <span className='text-red-600'><HiMail/></span>
                   <p>Email</p>
              </button> 
          </a>
        </div>
        
      </div>
      
    </section>
  )
}

export default Home