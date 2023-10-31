import React from 'react'
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {CgFileDocument} from 'react-icons/cg'
import {HiMail} from 'react-icons/hi';

function Contact() {
  return (
    <div id="contact" className='bg-neutral-900 flex flex-col justify-center items-center w-screen h-[90vh]'>
      
      <h1 className="text-white md:text-6xl text-4xl font-bold"> Let's Work Together. </h1>
      <p className='mt-10 text-gray-300 text-lg md:text-2xl'>
        I'm currently based in <span className='text-red-600'>San Diego, California</span>.
        <br/>
        Please let me know if you have any questions. 
      </p>

      <div className='md:flex md:flex-row gap-5 mt-8 grid grid-cols-2 '>
          
      <a target = "_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1L9nIFawwNvmaubYv86krGduE1Wd4G0iK/view?usp=sharing" >
              <button className='w-[128px] h-[44px] flex flex-row justify-center items-center gap-2 px-5 py-2 border-2 rounded-lg hover:border-red-600 text-white'>
                  <span className='text-red-600'><CgFileDocument/></span>
                   <p>Resume</p>
              </button> 
          </a>
            
          <a target = "_blank" rel="noopener noreferrer" href="https://github.com/DavidGurovich" >
              <button className='w-[128px] h-[44px] flex flex-row justify-center items-center gap-2 px-5 py-2 border-2 rounded-lg hover:border-red-600 text-white'>
                  <span className='text-red-600'><SiGithub/></span>
                   <p>Github</p>
              </button> 
          </a>
          
          <a target= "_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/davidgurovich98/">
              <button className='w-[128px] h-[44px] flex flex-row justify-center items-center gap-2 px-5 py-2 border-2 rounded-lg hover:border-red-600 text-white'>
                  <span className='text-red-600'><SiLinkedin/></span>
                   <p>LinkedIn</p>
              </button> 
          </a>
          <a target= "_blank" rel="noopener noreferrer" href="mailto: david.gurovich@outlook.com">
              <button className='w-[128px] h-[44px] flex flex-row justify-center items-center gap-2 px-5 py-2 border-2 rounded-lg  hover:border-red-600 text-white'>
                  <span className='text-red-600'><HiMail/></span>
                   <p>Email</p>
              </button> 
          </a>
        </div>
    </div>
  )
}

export default Contact