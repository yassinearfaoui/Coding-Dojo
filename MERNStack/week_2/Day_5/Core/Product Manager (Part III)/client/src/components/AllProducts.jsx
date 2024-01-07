import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const deleteProduct = (id) => {
        axios.delete('http://localhost:3000/api/products/' + id)
            .then(response => {
                console.log(response)
                const filtredProduct = products.filter(product => product._id != id)
                setProducts(filtredProduct)
            })
            .catch(error => console.log(error))
    }

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(Response => {
                console.log(Response.data.data);
                setProducts(Response.data.data)
            })
            .catch(Error => console.log(Error))

    }, [])

    return (
        <div className='text-center'>

            <h1 className='text-danger'>All Products:</h1>
            {products.map(product => (
                <div className='d-flex justify-content-center' key={product._id}>
                    <Link className='text-dark' to={`/product/${product._id}/view`} ><h3>{product.title}</h3></Link>
                    <Link to={`/product/${product._id}/edit`} className='btn btn-outline-warning m-1' > Update</Link>
                    <button onClick={() => deleteProduct(product._id)} className='btn btn-outline-danger m-1'>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default AllProducts