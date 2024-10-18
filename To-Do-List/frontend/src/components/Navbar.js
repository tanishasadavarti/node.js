import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <NavLink to={"/"}>productpage </NavLink>
      <NavLink to={"/editproduct/:id"}>editproduct </NavLink>
      <NavLink to={"/postproduct"}>postproduct </NavLink>

    </div>
  )
}

export default Navbar
