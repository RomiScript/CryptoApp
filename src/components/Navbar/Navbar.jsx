import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
      <div className="nav-right">
        <select>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="ars">ARS</option>
       </select>
       <button>Sign up <img src={icon} alt="" /> </button>
      </div>
    </div>
  )
}

export default Navbar
