import React from 'react'
import "aos/dist/aos.css";
import calcPhoto from '../images/calculator.PNG';
import weatherPhoto from '../images/weatherapi.PNG';
function Projects() {

    
  return (
    <div className='bg-neutral-900 w-screen h-screen' id='projects'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center text-5xl text-white font-bold border-b-4 border-red-600'>My Work</h1>
          <div className='flex flex-row' >
              <img src={weatherPhoto} alt="" width={500} className="w-1/2"/>
              <p className='text-white w-1/2'>One of the first projects I made while learning 
              programming through the Odin Project. </p>
              
          </div>
          <div className='flex flex-row' >
              <p className='text-white w-1/2'>One of the first projects I made while learning 
              programming through the Odin Project. </p>
              <img src={calcPhoto} alt="" width={500} className="w-1/2"/>
          </div>
          
        </div>
    </div>
  )
}

export default Projects