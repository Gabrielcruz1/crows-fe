import React from "react";
import { Link } from 'react-router-dom'

const CartPage = () => {
    return (
        <div>
            <Link to={'/home'}>Back</Link>
            <h1>CART PAGE</h1>
        </div>
    )
}

export default CartPage