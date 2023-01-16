import React from 'react'

function NavBar() {
  return (
    <nav >
        <ul className='flex flex-row justify-end mr-10 space-x-7 text-2xl pr-14'>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBar