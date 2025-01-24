import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full '>
    <nav className='flex justify-center items-center mt-5'>
      <ul className='flex items-center gap-5  p-4 rounded-full '>
        <li className='px-5 py-1.5 rounded-full active cursor-pointer font-bold' >Work</li>
        {/* <li className='px-4 py-2 cursor-pointer font-bold'>About</li>
        <li className='px-4 py-2 cursor-pointer font-bold'>Contact</li> */}
      </ul>
    </nav>
    </header>
  )
}

export default Navbar
