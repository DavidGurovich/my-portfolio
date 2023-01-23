import React, {useState} from 'react'
import {
  VscClose,
  VscThreeBars,
  VscHome,
  VscPerson,
  VscProject,
  VscMail,
} from 'react-icons/vsc';

const navLinks = [
  {name: "Home", link: "#home", logo: <VscHome/>},
  {name: "About", link: "#about", logo: <VscPerson/>},
  {name: "Projects", link: "#projects", logo: <VscProject/>},
  {name: "Contact", link: "#contact", logo: <VscMail/>},

]
function NavBar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <header className='text-gray-300 fixed h-[70px] w-full flex justify-end items-center px-4'>
            {/* Mobile three bars logo for menu */}

            <div className='md:hidden z-10' onClick={handleClick}>
                {!nav ? <VscThreeBars/> : <VscClose/>}
            </div>

            <ul className='md:flex md:flex-end hidden'>
              {navLinks.map((nav, i) => (
                <li key={i} className='hover:text-red-600 flex gap-5'>
                  <div>{nav.logo}</div>
                  <a href={nav.link}> {nav.name}</a>
                </li>
              ))}
            </ul>

            {/* menu for a mobile device/ smaller screen*/}
            <ul className={
              !nav ? 'hidden': 
              'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }
            >
              {navLinks.map((nav, i) => (
                <li key={i} className='hover:text-red-600 flex gap-5 py-6'>
                  <div>{nav.logo}</div>
                  <a href={nav.link} onClick={handleClick}> {nav.name}</a>
                </li>
              ))}
            </ul>

      
    </header>
  )
}

export default NavBar