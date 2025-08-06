import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'

function Navbar() {
  const { setCurrency } = useContext(CoinContext)

  const currencyHandller = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: "U$S" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", Symbol: "€" });
        break;
      }
      case "ars": {
        setCurrency({ name: "ars", Symbol: "$" });
        break;
      }
      default: {
         setCurrency({ name: "usd", Symbol: "U$S" });
        break;
        }
    }
  }

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
        <select onChange={currencyHandller}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ars">ARS</option>
        </select>
        <button>Sign up <img src={icon} alt="" /> </button>
      </div>
    </div>
  )
}

export default Navbar;
