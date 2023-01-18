import React from 'react'
import backGround from '../images/spaceBackground.jpg'
import {HiOutlineChevronDoubleDown} from 'react-icons/hi'
function Home() {
  return (
    <div 
    id = "home"
    className='w-screen p-20 h-screen flex justify-center '>
      
      <div className='flex flex-col justify-center items-center text-4xl text-white'>
        <h1 className='text-7xl'>Hello, I'm <span className='text-orange-500'>David</span>.</h1>
        <p className='pt-4'> Computer Science Student |  Aspiring Developer</p>
        <p className='pt-4'> Based in San Diego, California</p>
        <a href="#about" className='pt-4'>
          
          <HiOutlineChevronDoubleDown/>
        </a>
      </div>
      
    </div>
  )
}

export default Home