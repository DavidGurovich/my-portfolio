import React, {useState} from 'react';
import {
  VscClose,
  VscThreeBars,
  VscHome,
  VscPerson,
  VscProject,
  VscMail,
} from 'react-icons/vsc';
import DG from '../images/Logo.png'

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
    <header className='bg-neutral-900 text-gray-300 fixed h-[70px] w-full flex justify-between items-center px-4 border-b-[.5px] border-gray-700'>
            
            <div>
              <img src={DG} alt="David's Logo" style={{ width: '150px' }}/>
            </div>
            
            {/* Mobile three bars logo for menu */}

            <div className='md:hidden z-10' onClick={handleClick}>
                {!nav ? <VscThreeBars/> : <VscClose/>}
            </div>

            <ul className='md:flex md:flex-end hidden'>
              {navLinks.map((nav, i) => (
                <li key={i} className='hover:text-red-600 flex gap-5 text-2xl'>
                  <div className='ml-5 mt-1'>{nav.logo}</div>
                  <a href={nav.link}> {nav.name}</a>
                </li>
              ))}
            </ul>

            {/* menu for a mobile device/ smaller screen*/}
            <ul className={
              !nav ? 'hidden': 
              'absolute top-0 left-0 w-full h-screen bg-neutral-900 flex flex-col justify-center items-center'
            }
            >
              {navLinks.map((nav, i) => (
                <li key={i} className='hover:text-red-600 flex gap-5 py-6 text-4xl'>
                  <div className='my-1'>{nav.logo}</div>
                  <a className='' href={nav.link} onClick={handleClick}> {nav.name}</a>
                </li>
              ))}
            </ul>

      
    </header>
  )
}

export default NavBar