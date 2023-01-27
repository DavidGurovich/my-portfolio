import React from 'react'
import "aos/dist/aos.css";
import calcPhoto from '../images/calculator.PNG';
import weatherPhoto from '../images/weatherapi.PNG';
function Projects() {

    
  return (
    <div className='bg-neutral-900 w-screen ' id='projects'>
        <div className='flex flex-col justify-center items-center mx-auto gap-14'>
          <h1 className='text-center text-5xl text-white font-bold border-b-4 border-red-600'>My Work</h1>
          <div className='flex flex-row justify-center gap-5 px-20' >
              <img src={weatherPhoto} alt="" className=" rounded-3xl shadow-lg shadow-blue-500/60"/>
              <div className=' pt-10'>
              <h1 className='text-white text-3xl font-bold'> Weather App</h1>
                <p className='text-2xl text-white'> A weather app created using ReactJS, TailWindCSS, and the OpenWeatherMap API.  </p> 
                <div className='flex flex-col gap-5 pt-10 font-bold'>
                  <a href="" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-neutral-900 text-white'>Live Project</a>
                  <a href="" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-black text-white'>View Code</a>
                </div>
              </div>
          </div>
          <div className='flex flex-row justify-center gap-5 px-20' >
              <div className=' pt-10'>
                <h1 className='text-white text-3xl font-bold'> JavaScript Calculator</h1>
                <p className='text-2xl text-white relative'>One of the first projects I created while learning
                programming through the Odin Project. Made using only JavaScript, CSS, and HTML. I avoided using the </p>
                <div className='flex flex-col gap-5 pt-10 font-bold'>
                  <a href="" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-neutral-900 text-white'>Live Project</a>
                  <a href="" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-black text-white'>View Code</a>
                </div>
              </div>
              <img src={calcPhoto} alt="" className=" rounded-3xl shadow-lg shadow-red-500/60"/>
          </div>
          
        </div>
    </div>
  )
}

export default Projects