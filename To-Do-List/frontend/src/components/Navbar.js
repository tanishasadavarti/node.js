import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"rgb(0, 102, 255)",padding:"10px "}}>
      <NavLink style={{textDecoration:"none",color:"white",fontSize:"20px"}} to={"/"}>productpage </NavLink>
      <NavLink style={{textDecoration:"none",color:"white",fontSize:"20px"}} to={"/editproduct/:id"}>editproduct </NavLink>
      <NavLink style={{textDecoration:"none",color:"white",fontSize:"20px"}} to={"/postproduct"}>postproduct </NavLink>

    </div>
  )
}

export default Navbar
