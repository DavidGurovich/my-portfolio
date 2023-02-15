import React from 'react'
import {HiChevronDoubleUp} from 'react-icons/hi'
import {Link} from 'react-scroll'
function Footer() {
  return (
    <div className='bg-neutral-900 flex flex-col items-center justify-center pb-5 w-screen h-full'>
     <Link 
     
     to='home'
     smooth={true}
     activeClass='active'
     spy={true}
     offset={-200}
     className='text-red-600 text-3xl animate-bounce pb-6
     '><HiChevronDoubleUp/>
     </Link>
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