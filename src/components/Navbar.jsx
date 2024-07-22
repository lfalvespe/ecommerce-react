import React from 'react'

import { NavLink } from 'react-router-dom'

import { FaCartArrowDown } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/cart' className='cart'><FaCartArrowDown /></NavLink>
    </nav>
  )
}

export default Navbar