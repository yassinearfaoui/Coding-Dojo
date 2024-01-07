import { Routes ,  Route } from "react-router-dom"
import { Navigate } from "react-router-dom"
import FormComponent from "./components/FormComponent"
import ViewProduct from "./components/ViewProduct"
import Edit from "./components/Edit"



function App() {

  return (
    <div className="bg-secondary " style={{height:"1000px"}}>
    <h1  className="bg-primary text-center"> Product Manager</h1>
    <Routes>
      <Route path='/' element={<Navigate to={'/products'} />} />
      <Route path="/products" element={<FormComponent/>} />
      <Route path='/product/:id/view' element={<ViewProduct/>}/>
      <Route path='/product/:id/edit' element={<Edit/>}/>
    </Routes>
    </div>
  )
}

export default App
