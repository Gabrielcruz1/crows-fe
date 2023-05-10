import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/LandingPage.css"

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">Lorem Ipsum text Lorem Ipsum Text on screen will appear in awesome font with animation </div>
      <Link to="/home"><button className="enterButton"> Enter </button > 
      </Link> 
    </>
  )
}

export default LandingPage