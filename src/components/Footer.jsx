import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-900 flex items-center justify-center pb-5 w-screen'>
     <p className='text-gray-300'>
        Design and Code by David Gurovich.
        <br />
        Built with <span className='text-red-600'>ReactJS</span> & 
        <span className='text-red-600'> TailWindCSS</span>.
     </p>
    </div>
  )
}

export default Footer