import React from 'react'
import { Routes, Route } from "react-router-dom"
import LandingPage from '../pages/LandingPage'
import ShowPage from '../pages/ShowPage'
import Home from '../pages/Home'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products/:id' element={<ShowPage />} />
                {/* <Route path='/login' element={<Login />} /> */}
                {/* <Route path='/' element={ } />
    <Route path='/' element={ } /> */}
            </Routes>
        </div>
    )
}

export default Main