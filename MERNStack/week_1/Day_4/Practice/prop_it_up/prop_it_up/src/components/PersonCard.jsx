import React from 'react'

const PersonCard = (props) => {
    const {person} = props
    return (
        <fieldset>
            <legend>PersonCard</legend>
            <h1> {person.firstName} {person.lastName}</h1>
            <h3>Age  {person.age}</h3>
            <h3>Hair color : {person.hairColor}</h3>
        </fieldset>
    )
}

export default PersonCard