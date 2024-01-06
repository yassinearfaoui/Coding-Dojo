import  {useEffect , useState}  from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'

const ViewProduct = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:3000/api/products/' + id)
            .then(response => {
                console.log(response)
                setProduct(response.data.data)
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <div>
        <div className='text-center' style={{height:900}}>
            <h1 className='text-warning'>{product.title}</h1>
            <h1>Price : <h3  className='text-warning'>{product.price}$</h3> </h1>
            <h1 className='text-center m-3'>Description : <h6  className='text-warning'>{product.description}</h6> </h1>
        </div>
        </div>
    )
}

export default ViewProduct