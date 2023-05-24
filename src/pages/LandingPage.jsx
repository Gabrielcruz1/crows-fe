import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/LandingPage.css"

const LandingPage = () => {
  return (
    <>
      <div>
        <div className='textContainer'>
          <p className='landingPageText'>Lorem Ipsum text Lorem Ipsum Text on screen will appear in awesome font with animation </p>
        </div>

        <div className="enterButton">
          <Link to="/home" >
            <button > Enter </button >
          </Link>
        </div>
      </div>
    </>
  )
}

export default LandingPage