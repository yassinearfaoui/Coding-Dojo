import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {
    const { id } = useParams()
    const [person, setperson] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(Response => {
                console.log(Response.data)
                setperson(Response.data)
            })
            .catch(Error => {
                console.log(Error)
                navigate('/error')
            })
    }, [id])
    return (
        <div>
            {person ?
                <div>
                    <h3>People</h3>
                    <h1>{person.name}</h1>
                    <ul>
                        <li>Height : {person.height}</li>
                        <li>Mass : {person.mass}</li>
                        <li>Hair Color : {person.hair_color}</li>
                    </ul>
                </div>
                : <h2> ... loading</h2>}

        </div>
    )
}

export default Planet