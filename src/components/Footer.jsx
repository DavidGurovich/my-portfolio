import React from 'react'
import {HiChevronDoubleUp} from 'react-icons/hi'
function Footer() {
  return (
    <div className='bg-neutral-900 flex flex-col items-center justify-center pb-5 w-screen h-full'>
     <a href="#home" className='text-red-600 text-3xl animate-bounce pb-6'><HiChevronDoubleUp/></a>
     <p className='text-gray-300 text-center'>
        Design and Code by David Gurovich.
        <br />
        Built with <span className='text-red-600'>ReactJS</span> & 
        <span className='text-red-600'> TailWindCSS</span>.
     </p>
    </div>
  )
}

export default Footer