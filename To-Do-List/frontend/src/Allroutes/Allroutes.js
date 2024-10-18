import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Getproduct from '../components/Getproduct'
import Editproduct from '../components/Editproduct'
import Postproduct from '../components/Postproduct'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Getproduct />} />
        <Route path="/editproduct/:id" element={<Editproduct />} />
        <Route path="/postproduct" element={<Postproduct />} />
      </Routes>
    </div>
  )
}

export default Allroutes
