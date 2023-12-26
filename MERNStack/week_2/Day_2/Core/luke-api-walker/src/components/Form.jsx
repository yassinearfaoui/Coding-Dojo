import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const[type , settype] = useState([])
    const navigate = useNavigate()
    const [person , setperson] = useState(0)
    const searchperson = (e) =>{
        e.preventDefault()
        console.log("person" , person);
        console.log("type" , type);
        navigate(`/${type}/${person}`)
        // setperson(0)
        
    }
    return (
        <form >
        <div className='form-group d-flex m-3'>
            <div className='d-flex  align-items-center m-3'>
            <label className='m-1' htmlFor="person">Search </label>
            <select onChange={(e) => {settype(e.target.value)}} value={type}
            name="" id="">
                <option value="people">people</option>
                <option value="people">people</option>
                <option value="planet">planets</option>
            </select>
            </div>
            <input type="number" className='form-control' id='person' 
            onChange={(e) => { setperson(e.target.value)}} value={person}
            />
            <button onClick={(e) => {searchperson(e)}} className='btn btn-outline-secondary m-1 '>    Search</button>
        </div>
        </form>
    )
}

export default Form