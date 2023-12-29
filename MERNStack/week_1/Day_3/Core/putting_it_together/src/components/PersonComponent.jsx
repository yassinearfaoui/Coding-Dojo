import React ,{useState}  from 'react'

const PersonComponent = (props) => {
  const {user} = props
  const [age , setAge] = useState(user.age)
  const increaseAge = () =>{
  setAge(age+1)
  }
  return (
    <fieldset>
        <legend>Person Card</legend>
        <ul>
            <h1>{user.firstName} {user.lastName}</h1> 
            Age : {age} <br />
            Hair Color : {user.hairColor}
        </ul>
        <button onClick={increaseAge}>Birthday button for {user.firstName} </button>
    </fieldset>
  )
}

export default PersonComponent