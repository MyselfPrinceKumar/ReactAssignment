import React from 'react'
import "./Style/Navbar.css"
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <div className='header'>
        <h2>Header</h2>
        <div className="components">
          <h3><NavLink to={'/first'}>First Component</NavLink></h3>
          <h3><NavLink to={'/second'}>Second Component</NavLink></h3>
          <h3><NavLink to={'/third'}>Third Component</NavLink></h3>
        </div>
      </div>
    </>
  )
}
export default NavBar
