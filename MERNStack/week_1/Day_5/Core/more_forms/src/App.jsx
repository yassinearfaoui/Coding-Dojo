import { useState } from 'react'
import './App.css'

function App() {
  const [fname , setfname] = useState("")
  const [lname , setlname] = useState("")
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  const [cpassword , setcpassword] = useState("")
  const diplay =[fname , lname , email , password , cpassword]

  return (
    <>
      <fieldset>
        <legend><h3>Form</h3></legend>
        <form>
        <p>
            <label htmlFor="">First Name : </label>
            <input type="text" onChange={ (e) => setfname(e.target.value) }/>
            {fname.length<2?<p style={{color : "red"}} >First name must be at least 2 characters</p>:<p style={{color : "green"}} >First name is valid</p> }
        </p>
        <p>
            <label htmlFor="">Last Name : </label>
            <input type="text" onChange={ (e) => setlname(e.target.value) } />
            {lname.length<2?<p style={{color : "red"}} >Last name must be at least 2 characters</p>:<p style={{color : "green"}} >Last name is valid</p> }
        </p>
        <p>
            <label htmlFor="">Email  : </label>
            <input type="text" onChange={ (e) => setemail(e.target.value) } />
            {email.length<2?<p style={{color : "red"}} >Email must be at least 2 characters</p>:<p style={{color : "green"}} >Email is valid</p> }
        </p>
        <p>
            <label htmlFor="">Password  : </label>
            <input type="password" onChange={ (e) => setpassword(e.target.value) }  />
            {password.length<8?<p style={{color : "red"}} >Password must be at least 2 characters</p>:<p style={{color : "green"}} >Password is valid</p> }
            {password != cpassword ?<p style={{color : "grey"}} >passwords must match</p>:<p style={{color : "green"}} >Password matched</p> }
        </p>
        <p>
            <label htmlFor="">Confirm Password  : </label>
            <input type="password" onChange={ (e) => setcpassword(e.target.value) }   />
        </p>
        </form>
    </fieldset>
    </>
  )
}

export default App
