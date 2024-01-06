import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products , setProducts ] = useState([])
    useEffect( () =>{
        axios.get('http://localhost:3000/api/products')
        .then(Response =>{
            console.log(Response.data.data);
            setProducts(Response.data.data)
        })
        .catch(Error => console.log(Error))

    } , [Response])

    return (
        <div className='text-center'>

            <h1 className='text-danger'>All Products:</h1>
            {products.map(product => (
                <div key={product._id}>
                    <Link className='text-dark'   to={`/product/${product._id}/view`} ><h3>{product.title}</h3></Link>
                </div>
            ))}
        </div>
    )
}

export default AllProducts