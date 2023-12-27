import {
  Routes, Route, Link
} from 'react-router-dom'
import Planet from './components/Planet'
import Error from './components/Error'
import Form from './components/Form'
import People from './components/People'
import Home from './components/Home '
// import './App.css'

function App() {

  return (
    <>
      <div className='container '>
        <Form/>
        <Routes >
        <Route path='/' element = {<Home/>} />
          <Route path='/people/:id' element={<Planet/>} />
          <Route path='/planet/:id' element={<People/>} />
          <Route path='/Error' element={<Error/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
