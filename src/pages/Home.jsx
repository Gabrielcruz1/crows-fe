import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import "../styles/Home.css"

const Home = () => {
  const [products, setProducts] = useState([])

  const BASE_URL = "https://fakestoreapi.com/products"

  const getProductData = async () => {
    try {
      const response = await fetch(BASE_URL);
      // console.log(response);
      const allProducts = await response.json();
      setProducts(allProducts);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getProductData()
  }, []);

  // function categorize(productName){
  //   return productName === "men's clothing"
  // }

  const loaded = () => {
    return (
      <div className="Home">
        <h3 className='brandStatement'>"Quote Brand Statement, Something Lorem Ipsum Lorem Ipsum Some random Wording"</h3>

        <SearchBar />

        {/* HERO IMAGE */}
        <img className='heroImage' src='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0f1ad52b9c71f9437f7492c8b5e1d0de.jpg' />
        <img className='heroImage' src='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0f1ad52b9c71f9437f7492c8b5e1d0de.jpg' />

        <h3 className='productsHeading'>Products</h3>
        <div className='productsLayout'>
          {products.map((product, index) => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div className="productBox">
                  {/* {product.category === "men's clothing" ? product.title : null } */}
                  <p>{product.title}</p>
                  <img className="mappedImage" src={product.image} alt={product.title} />
                </div>
              </Link>
            )
          })
          }
        </div>
      </div>
    )
  };

  const loading = () => {
    return (
      <section className="loading">
        <h1>
          Loading...
          <span>
            <img
              className="spinner"
              src="https://freesvg.org/img/1544764567.png"
            />{" "}
          </span>
        </h1>
      </section>
    )
  };


  return (
    <div>
      {products ? loaded() : loading()}
    </div>
  )
}

export default Home