import React from 'react'
import { useState, useEffect } from 'react';

const SearchBar = ({keyword, onChange}) => {
    const [products, setProducts] = useState([]);
    const [filteredResults, setFilteredResults] = useState([])
    const [searchBarInput, setSearchBarInput] = useState('');

    const BASE_URL = "https://fakestoreapi.com/products"

    const getProductData = async () => {
        try {
            const response = await fetch(BASE_URL);
            console.log(response);
            const allProducts = await response.json();
            setProducts(allProducts);
        } catch (error) {
            console.log(error)
        }
    }


    const searchItems = (searchValue) => {
        getProductData();
        setSearchBarInput(searchValue);
        console.log(searchValue);
        if (searchBarInput !== '') {
            const filteredData = products.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchBarInput.toLowerCase())
            });
            console.log(filteredData)
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(products)
        }

    }

    useEffect(() => {
    }, [])


    return (
        <div>
            <div className='searchBar'>
                <input
                    type="text"
                    placeholder="Search Product Here"
                    value={keyword}
                    onChange={(e) => searchItems(e.target.value)}
                />
            </div>
            {
                searchBarInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div>
                                <p> {item.title}</p>
                            </div>
                        )
                    })
                ) : (products.map((product) => {
                    return (
                        <div>
                            <p>{product.title}</p>
                        </div>
                    )
                }))}
        </div >
    )
}

export default SearchBar