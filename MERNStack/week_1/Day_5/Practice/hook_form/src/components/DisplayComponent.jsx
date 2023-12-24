import React from 'react'

const DisplayComponent = (props) => {
return (
    <fieldset>
    <legend><h3>Your Form Data</h3></legend>
    <label htmlFor="">First Name :{props.display[0]} </label><br />
    <label htmlFor="">Last Name :{props.display[1]} </label><br />
    <label htmlFor="">Email Name :{props.display[2]} </label><br />
    <label htmlFor="">Password  :{props.display[3]} </label><br />
    <label typeof='password' htmlFor="">Confirm Pw :{props.display[4]} </label>
    </fieldset>
)
}

export default DisplayComponent