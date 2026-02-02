import React from 'react'
import {  NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  let x = useLocation();
  if (x.pathname == '/cart' || x.pathname.startsWith(('/product/')) || x.pathname == '/women' || x.pathname == '/addresses') {
    return null
  }
  else {
    return (
      <div className='sticky flex justify-around p-7  text-white bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500  gap-40'>
        <NavLink to='/'> <img src="ewer" alt="erw" /></NavLink>
        <div className='flex justify-around  gap-25'>
          <NavLink className={({ isActive }) => isActive ? 'text-black font-bold underline decoration-2' : ''} to='/men'>men</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-black font-bold underline decoration-2' : ''} to='/women'>Women</NavLink>
          <NavLink className={({ isActive, isTransitioning }) => isActive ? 'text-black font-bold underline decoration-2' : ''} to="/electronics">Electronics</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-black font-bold underline decoration-2' : ''} to='/jewellery'>Jewellery</NavLink>
          <NavLink to='/profile' className={({ isActive }) => isActive ? 'text-black font-bold underline decoration-2' : ''}>Profile</NavLink>
        </div>
        
      </div>
    )

  }

}

export default Navbar
