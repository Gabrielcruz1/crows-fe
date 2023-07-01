import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className="navigationBar">
        <Link to="/home"><h1 className='logo'>LOGO</h1></Link>
        <div className='navigationLinks'>
          <Link className='individualLink'>
            <p>Clothing</p>
          </Link>
          <Link to={'/cart'} className='individualLink'>
            <p>Cart</p>
          </Link>
          <Link className='individualLink'>
            <p>Login/Sign-up</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar 