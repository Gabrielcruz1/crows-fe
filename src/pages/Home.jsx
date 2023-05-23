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
      {products.map((product, index) =>{
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img className="mappedImage" src={product.image} alt={product.title}/>
          </div>
        )})}
      <h1>Hero/ Image/ Clothing Content</h1>
      
    </div>
  )
}

export default Home