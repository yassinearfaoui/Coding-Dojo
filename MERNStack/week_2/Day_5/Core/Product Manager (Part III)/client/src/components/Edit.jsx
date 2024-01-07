import { React, useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [updatedproduct, setUpdatedProduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/products/' + id)
            .then(res => {
                console.log(res);
                setUpdatedProduct(res.data.data)
            })
            .catch(Error => console.log(Error))

    }, [id])
    const update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3000/api/products/' + id , updatedproduct).
    then(res =>{
        console.log(res);
    })
    .catch(error => console.log(error))
    navigate('/')
    }

    return (
        <div className='text-center  d-flex justify-content-center' >
            <form onSubmit={(e)=> {update(e)}} >
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setUpdatedProduct({ ...updatedproduct, title: e.target.value })} value={updatedproduct.title}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" id="exampleInputPassword1"
                        onChange={(e) => setUpdatedProduct({ ...updatedproduct, price: e.target.value })} value={updatedproduct.price}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className='form-control' name="" id="" cols="30" rows="10"
                        onChange={(e) => setUpdatedProduct({ ...updatedproduct, description: e.target.value })} value={updatedproduct.description}
                    ></textarea>
                </div>
                <button  className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Edit