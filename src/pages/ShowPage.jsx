import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

const ShowPage = () => {
    const [products, setProducts] = useState([])
    const params = useParams();
    const { id } = params

    const URL = `https://fakestoreapi.com/products/${id}`

    const getProductDataForShowPage = async () => {
        try {
            const response = await fetch(URL);
            const singleProduct = await response.json();
            setProducts(singleProduct);

        } catch (err) {
            console.log(err)
        }
    }

    const loaded = () => {
        return (
            <div className='showPageProductContainerDiv'>
                <h1 className='titleOfProductOnShowPage'>{products.title}</h1>
                <img className='imageOfProductOnShowPage' src={products.image} />
            </div>
        )
    }

    const loading = () => {
        return (
            <divv>
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

            </divv>
        )
    }

    useEffect(() => {
        getProductDataForShowPage();
    }, [])


    return (
        <div>
            {products ? loaded() : loading()}
        </div>
    )
}

export default ShowPage