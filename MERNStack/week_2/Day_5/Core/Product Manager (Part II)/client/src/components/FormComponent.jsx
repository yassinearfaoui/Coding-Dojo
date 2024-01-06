import {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AllProducts from './AllProducts'


const FormComponent = () => {
    const navigate = useNavigate()
    const [product , setProduct] = useState({title : "" , price : 0.0 , description : "" })
    const newProduct = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/api/products', product)
        .then(Response => {
            console.log(Response)
            navigate('/')
        })
        .catch(Error => {
            console.log(Error);
        })
    }
    return (
        <div className='text-center  d-flex justify-content-center' >
            <form onSubmit={(e)=> newProduct(e)} >
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input  type="text" className="form-control"
                    onChange={(e) => setProduct({...product,title :e.target.value})} value={product.title}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" id="exampleInputPassword1"
                    onChange={(e) => setProduct({...product,price :e.target.value})} value={product.price}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className='form-control' name="" id="" cols="30" rows="10"
                    onChange={(e) => setProduct({...product,description :e.target.value})} value={product.description}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <AllProducts/>
        </div>
    )
}

export default FormComponent