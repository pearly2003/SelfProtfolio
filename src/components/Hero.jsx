import React from 'react'

export const Hero = () => {
  return (
    <div className='flex justify-center items-center p-4 gap-4'>
        <div className='col-sm-6'>
            <h1>Hey ,This is Muthukumar</h1>
            <p>React Developer</p>
            <button className='bg-black text-white p-2 rounded-md'>Download CV</button>
        </div>
        <div className='col-sm-6'>
            <img src="" alt="hero" />
        </div>
    </div>
  )
}