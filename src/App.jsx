import React, { useState } from 'react'
import './App.css'
import nature from '../src/assets/nature.jpg'
import cantoon from '../src/assets/panda.png'
import Navbar from '../src/Components/Navbar/Navbar'
import Form from '../src/Components/Navbar/Form-page/Form'

function App() {
  // const [showPassword, setShowPassword] = useState(false)

  return (
    <>
    {/* <img src={nature} alt="" /> */}
    <div className='navbar-42'>
      <Navbar/>
      <Form/>
   
    </div>
    </>
    
  )
}

export default App;