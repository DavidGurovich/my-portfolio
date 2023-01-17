import React from 'react'
import backGround from '../images/spaceBackground.jpg'
function Home() {
  return (
    <div 
    id = "home"
    className='w-screen p-20 bg-zinc-800 h-screen flex justify-center '>
      
      <div className='flex flex-col justify-center items-center text-4xl text-white'>
        <h1 className='text-7xl'>Hello, I'm David.</h1>
        <p> I'm a Computer Science Student and Aspiring Developer</p>
        <button className='p-3 mt-5 w-60 border-white bg-white text-black text-center rounded-md text-2xl'>View my Work</button>
      </div>
      
    </div>
  )
}

export default Home