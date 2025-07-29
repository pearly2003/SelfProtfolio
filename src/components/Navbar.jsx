import React from 'react'
import logo from '../assets/logo/Muthu.png'

export const Navbar = () => {
  return (
    <div className='p-4 items-center'>
      
      <div className='flex justify-center items-center gap-4  '>
      <div className='absolute left-10'>
        <img src={logo} alt="logo" />
      </div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Contact</div>
        <div>About</div>
      </div>
    </div>
  )
}
