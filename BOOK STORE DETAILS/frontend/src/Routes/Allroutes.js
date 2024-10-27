import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookForm from '../components/BookForm'
import BookDetails from '../components/BookDetails'
import BookList from '../components/BookList'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/bookform" element={<BookForm />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  )
}

export default Allroutes
