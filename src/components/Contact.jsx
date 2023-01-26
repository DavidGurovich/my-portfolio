import React from 'react'
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {HiMail} from 'react-icons/hi'
function Contact() {
  return (
    <div id="contact" className='bg-neutral-900 flex flex-col justify-center items-center w-screen h-[70vh]'>
      <h1 className="text-white md:text-5xl text-4xl font-bold"> Let's Work Together. </h1>
      <p className='mt-10 text-gray-300 text-lg'>
        I'm currently based in <span className='text-red-600'>San Diego, California</span>.
        <br/>
        Please let me know if you have any questions. 
      </p>

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
  )
}

export default Contact