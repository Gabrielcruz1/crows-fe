import React from 'react'
import { useState, useEffect } from 'react';

const SearchBar = () => {
    return (
        <div>SearchBar
            <div className='searchBar'>
                <input
                    type="text"
                    placeholder="Search Product Here"
                />
            </div>
        </div>

    )
}

export default SearchBar