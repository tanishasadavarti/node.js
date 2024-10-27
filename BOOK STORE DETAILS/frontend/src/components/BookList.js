import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BookForm from './BookForm';

const BookList = () => {
    const [product, setProduct] = useState([]);

    const getData = () => {
        axios("http://localhost:3232/book/get")
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handledelete=(id)=>{
        axios.delete(`http://localhost:3232/book/delete/${id}`)
        .then((res)=>{
          console.log(res.data)
          alert("delete !!")
          getData()
        }).catch((err)=>{
          console.log(err)
        })
      }

    useEffect(() => {
        getData();
    }, []);
  return (
    <div>
      
       <h1>Products</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "auto", textAlign: "center" }}>
                {product.map((el) => (
                    <div key={el.id} style={{ margin: "20px", padding: "20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                        <img src={el.image} alt={el.title} height={200} width={200} />
                        <h3>{el.title}</h3>
                        <h3>{el.price}</h3>
                        <p>{el.description}</p>
                        <Link to={`/bookdetails/${el._id}`}> <button    style={{ padding: "5px 10px", margin: "5px", backgroundColor: "black", color: "white" }}>EDIT</button></Link>
                        <button  onClick={()=>handledelete(el._id)} style={{ padding: "5px 10px", margin: "5px", backgroundColor: "black", color: "white" }}>DELETE</button>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default BookList
