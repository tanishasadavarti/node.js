import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"rgb(0, 102, 255)",padding:"10px "}}>
        <Link to="/" style={{color:"white",textDecoration:"none",fontSize:"20px"}}>PRODUCTS</Link>
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px"}} to={"/bookform"}>ADDPRODUCT</Link>
      <Link style={{textDecoration:"none",color:"white",fontSize:"20px"}} to={"/bookdetails/:id"}>EDITPRODUCT</Link>

    </div>
  )
}

export default Navbar
