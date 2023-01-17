import React from 'react'
import { useRef } from 'react'

function NavBar() {
  // const about = useRef(null);
  // const projects = useRef(null);
  // const contact = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo(
  //     {
  //       top: elementRef.current.offsetTop,
  //       behavior: 'smooth'
  //     }
  //   )
  // }
  return (
    <nav className='sticky top-0 left-0 right-0'>
        <ul className='flex flex-row justify-end mr-10 space-x-7 text-2xl pr-14'>
  
              <a href="#home">Home</a>
              <a href= "#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
          
        </ul>
        
    </nav>
  )
}

export default NavBar