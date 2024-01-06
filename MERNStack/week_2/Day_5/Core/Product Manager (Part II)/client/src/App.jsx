import { Routes ,  Route } from "react-router-dom"
import { Navigate } from "react-router-dom"
import FormComponent from "./components/FormComponent"
import ViewProduct from "./components/ViewProduct"



function App() {

  return (
    <div className="bg-secondary ">
    <h1  className="bg-primary text-center"> Product Manager</h1>
    <Routes>
      <Route path='/' element={<Navigate to={'/products'} />} />
      <Route path="/products" element={<FormComponent/>} />
      <Route path='/product/:id/view' element={<ViewProduct/>}/>
    </Routes>
    </div>
  )
}

export default App
