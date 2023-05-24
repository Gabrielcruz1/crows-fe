import React from 'react'
import "../styles/Home.css"
import { useState, useEffect } from 'react'

const Home = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json)
      })
      .catch(console.error + "error")
  }, []);


  return (
    <div className="Home">
      <h3 className='brandStatement'>"Quote Brand Statement, Something Lorem Ipsum Lorem Ipsum Some random Wording"</h3>

      <div className='searchBar'>
        <input
          type="text"
          placeholder="Search Product Here"
        />
      </div>
      {/* {products.filter(() => { })} */}
      {/* HERO IMAGE */}
      <img className='heroImage' src='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0f1ad52b9c71f9437f7492c8b5e1d0de.jpg' />
      <h3 className='productsHeading'>Products</h3>
      <div className='productsLayout'>
        {products.map((product, index) => {
            return (
              <div key={product.id} className="productBox">
                <p>{product.title}</p>
                <img className="mappedImage" src={product.image} alt={product.title} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home