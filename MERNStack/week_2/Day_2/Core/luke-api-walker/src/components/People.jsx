import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const { id } = useParams()
    const [planet, setplanet] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(Response => {
                console.log(Response.data)
                setplanet(Response.data)
            })
            .catch(Error => {
                console.log(Error)
                navigate('/error')
            })
    }, [id])
  return (
    <div>
    {planet ?
        <div>
            <h3>People</h3>
            <h1>{planet.name}</h1>
            <ul>
                <li>terrain : {planet.terrain}</li>
                <li>surface_water : {planet.surface_water}</li>
                <li>population : {planet.population}</li>
            </ul>
        </div>
        : <h2> ... loading</h2>}

</div>
  )
}

export default People