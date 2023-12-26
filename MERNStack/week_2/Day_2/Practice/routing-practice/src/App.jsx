import {
  Routes, Route
} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Number from './components/Number'


function App() {
  return (
    <>
      <Routes>
      <Route path='/'/>
        <Route path='/home' element={<Home />} />
        <Route path="/:variable/:color1/:color2" element={<Number />}/>
        <Route path="/:variable" element={<Number />}/>
      </Routes>
    </>
  )
}

export default App
