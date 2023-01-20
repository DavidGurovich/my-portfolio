import React, {useState} from 'react'
import {
  VscThreeBars,
  VscHome,
  VscPerson,
  VscProject,
  VscMail,
} from 'react-icons/vsc';

const navLinks = [
  {name: "Home", link: "#home", logo: {VscHome}},
  {name: "About", link: "#about", logo: {VscPerson}},
  {name: "Home", link: "#projects", logo: {VscProject}},
  {name: "Home", link: "#contact", logo: {VscMail}},

]
function NavBar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <header className='text-gray-300 fixed h-[70px] w-full flex justify-between items-center px-4'>
      
        
            <ul className='md:flex hidden'>
                  <a href="#home" className='hover:text-red-600'>Home</a>
                  <a href= "#about" className='hover:text-red-600'>About</a>
                  <a href="#projects" className='hover:text-red-600'>Projects</a>
                  <a href="#contact" className='hover:text-red-600'>Contact</a>
            </ul>

       
      
    </header>
  )
}

export default NavBar