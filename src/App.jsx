import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Enroll from './Enroll'
import ColorSchemesExample from './Navbar'
function App() {
 
  return (
    <div>
  <ColorSchemesExample/>
     <Routes>
      <Route  path='/' element={<Home/>} ></Route>
      <Route  path='/about' element={<About/>}></Route>
      <Route exact path='/Enroll' element={<Enroll/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      
     </Routes>
    </div>
  )
}

export default App
