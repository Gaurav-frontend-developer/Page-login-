import React from 'react'
import './Navbar.css'

const navbar = () => {
  return (
    
    
    <header className='navbar'>
      <nav className='navbar-inner'>
        
        <ul className='navbar-links'>
          <li><a href='#home'>Home</a></li>
          <li><a href='google.com'>About</a></li>
           <li><a href='#services'>Services</a></li>
          <li><a href='#contact'>Contact</a></li>  
        </ul>
        <div className='navbar-22'>
        <button className='navbar-cta'>Sign Up</button>
        <button className='navbar-cta'>English</button>
        <button className='navbar-cta'>Register</button>
        </div>
      </nav>
    </header>
    
    
  )
}

export default navbar;