import React from 'react'
import "../styles/Home.css"
import {useState, useEffect } from 'react'

const Home = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
              setProducts(json)
            })
            .catch(console.error + "error")
  }, []);

  return (
    <div className="Home">
      <p>"Quote Brand Statement, Something Lorem Ipsum Lorem Ipsum Some random Wording"</p>
      <p>Search Bar Here</p>
      <h1>{products.map((product, index) =>{
        return (
          <div key={product.id}>
            <p>{product.title}</p>

          </div>
        )})}</h1>
      <h1>Hero/ Image/ Clothing Content</h1>
      
    </div>
  )
}

export default Home