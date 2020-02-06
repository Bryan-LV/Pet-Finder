import React from 'react'
import { Link } from 'react-router-dom'
import ham from '../../imgs/black-ham-nav.png'


export default function Navbar(props) {
  return (
    <header className="navbar">
      <div className="logo">
        <Link className="brand" to="/">Good Bois</Link>
      </div>
      <nav className="mobile-nav">
        <p className="slogan">A pet is waiting for your home</p>
      </nav>
    </header>
  )
}
