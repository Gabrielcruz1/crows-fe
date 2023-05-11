import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className="navigationBar">
        <h1>LOGO</h1>
        <Link>
          <p>Login/Sign-up</p>
        </Link>
      </div>
    </>
  )
}

export default NavBar 