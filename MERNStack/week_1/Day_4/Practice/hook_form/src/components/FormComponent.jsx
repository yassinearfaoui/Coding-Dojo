import React , {useState} from 'react'
import DisplayComponent from './DisplayComponent'

const FormComponent = () => {
    const [fname , setfname] = useState("")
    const [lname , setlname] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const [cpassword , setcpassword] = useState("")
    const diplay =[fname , lname , email , password , cpassword]
return (
    <fieldset>
        <legend><h3>Form</h3></legend>
        <form>
        <p>
            <label htmlFor="">First Name : </label>
            <input type="text" onChange={ (e) => setfname(e.target.value) }/>
        </p>
        <p>
            <label htmlFor="">Last Name : </label>
            <input type="text" onChange={ (e) => setlname(e.target.value) } />
        </p>
        <p>
            <label htmlFor="">Email  : </label>
            <input type="text" onChange={ (e) => setemail(e.target.value) } />
        </p>
        <p>
            <label htmlFor="">Password  : </label>
            <input type="password" onChange={ (e) => setpassword(e.target.value) }  />
        </p>
        <p>
            <label htmlFor="">Confirm Password  : </label>
            <input type="password" onChange={ (e) => setcpassword(e.target.value) }   />
        </p>
        </form>
        <DisplayComponent display = {diplay}/>
    </fieldset>
    
  )
}

export default FormComponent