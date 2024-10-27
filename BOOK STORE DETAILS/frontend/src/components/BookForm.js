import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const initialstate = {
    author:"",
    title: "",
    price: "",
    image: "",
    description: "",
    isbn: ""
  
  }

const BookForm = () => {
    let { id } = useParams()
    const [formdata, setformdata] = useState(initialstate)
   
    const handlechange = (e) => {
      setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
  
    const handlesubmit = (e) => {
      e.preventDefault(e)
      console.log(formdata)
  
        axios.post(`http://localhost:3232/book/post`, formdata)
          .then((res) => {
            console.log(res);
            alert("Product added successfully!");
          })
          .catch((err) => {
            console.log(err);
          });
    }
  
    // useEffect(() => {
    //   editdata()
    // }, [id])
    const { title, price, isbn, description, image ,author} = formdata
    
  return (
    <div>
       <form onSubmit={(e)=>handlesubmit(e)}  style={{textAlign:"center",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:'30%',margin:"10% auto",padding:"30px 15px"}}>
        <input type="text" name="image" value={image} onChange={(e)=>handlechange(e)}  placeholder="image" /> <br />  <br />
        <input  type='text' name="author" value={author} onChange={(e)=>handlechange(e) }placeholder="author"/>  <br/> <br/>
        <input type="text" name="title" value={title} onChange={(e)=>handlechange(e)} placeholder="title" /> <br /><br />
        <input  type='text' name="isbn" value={isbn} onChange={(e)=>handlechange(e) }placeholder="isbn"/>  <br/> <br/>
        <input type="text" name='price' value={price}onChange={(e)=>handlechange(e)}  placeholder='price' /> <br /><br />
        <input type="text" name='description' value={description} onChange={(e)=>handlechange(e)}  placeholder='description' /> <br /> <br />
        <input type="submit" />
        </form>
    </div>
  )
}

export default BookForm
