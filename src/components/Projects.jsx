import React from 'react'
import "aos/dist/aos.css";
import calcPhoto from '../images/calculator.png';
import weatherPhoto from '../images/weatherapi.png';



function Projects() {
  
  return (
    <div className='bg-neutral-900 w-screen ' id='projects'>
        <div className='flex flex-col justify-center items-center mx-auto gap-16 '>
          <h1 className='text-center text-5xl my-10 text-white font-bold border-b-4 border-red-600'>My Work</h1>
          <div className='flex md:flex-row flex-col justify-center gap-5 px-20' >
              <a rel="noopener noreferrer" href="https://davidgurovich.github.io/weatherapi/" target="_blank" className='md:h-auto md:w-auto w-screen px-4'>
                <img src={weatherPhoto} alt="" className="hover:border-red-600 border-2 hover:cursor-pointer rounded-3xl shadow-lg shadow-blue-500/60"/>
                </a>
              <div className=' pt-10 w-1/2 ml-10'>
                <h1 className='text-white text-3xl font-bold mb-6'> Weather App</h1>
                <p className='text-2xl text-white'> A weather app created using ReactJS, TailWindCSS, and the OpenWeatherMap API.  </p> 
                <div className='flex flex-col gap-5 pt-10 font-bold text-xl '>
                  <a rel="noopener noreferrer" href="https://davidgurovich.github.io/weatherapi/" target="_blank" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-neutral-900 text-white'>Live Project</a>
                  <a rel="noopener noreferrer" href="https://github.com/DavidGurovich/weatherapi" target="_blank" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-neutral-900 text-white'>View Code</a>
                </div>
              </div>
          </div>
          <div className='flex md:flex-row flex-col-reverse justify-center gap-5 px-20' >
              <div className=' pt-10 w-1/2 mr-10'>
                <h1 className='text-white text-3xl font-bold mb-6'> JavaScript Calculator</h1>
                <p className='text-2xl  text-white'>One of the first projects I created while learning
                programming through the Odin Project. Made using only JavaScript, CSS, and HTML. I avoided using the </p>
                <div className='flex flex-col gap-5 pt-10 font-bold text-xl'>
                  <a rel="noopener noreferrer" href="https://davidgurovich.github.io/Calculator/" target="_blank" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-neutral-900 text-white'>Live Project</a>
                  <a rel="noopener noreferrer" href="https://github.com/DavidGurovich/Calculator" target="_blank" className='w-fit px-5 py-2 border-b-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-neutral-900 text-white'>View Code</a>
                </div>
              </div>
              <a rel="noopener noreferrer" href="https://davidgurovich.github.io/Calculator/" target="_blank" className='md:h-auto md:w-auto w-screen px-4' >
              <img src={calcPhoto} alt="Calculator Image" className="hover:border-red-600 border-2 hover:cursor-pointer duration-500 rounded-3xl shadow-lg shadow-red-500/60"/>
              </a>
          </div>
          
        </div>
    </div>
  )
}

export default Projects