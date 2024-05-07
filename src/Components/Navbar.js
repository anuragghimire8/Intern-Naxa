import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="md:flex md:justify-between p-5 items-center shadow-xl bg-white  grid justify-center">
    
    <div className='p-4 text-2xl font-bold'>Naxa</div>

    
    <ul className='md:flex gap-10 md:pl-[205px] pl-4'>
    <li className='hover:cursor-pointer'><Link to="/">Home</Link></li>
    <li className='hover:cursor-pointer'><Link to="/services">Services</Link></li>
    <li  className='hover:cursor-pointer'>Portfolio</li>
    <li  className='hover:cursor-pointer'>Company</li>
    <li  className='hover:cursor-pointer'>Blogs</li>
    <li className='hover:cursor-pointer'>Goals</li>
    <li></li>
    </ul>

    <button className='bg-yellow-500 mt-5  w-[190px] text-xl pt-2 pb-2 '>Lets Talk</button>
      </div>
      
  )
}

export default Navbar
