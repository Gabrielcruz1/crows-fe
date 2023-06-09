import React from 'react'
import { useParams } from 'react-router'

const ShowPage = () => {
    const params = useParams();
    const { id } = params


    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}

export default ShowPage