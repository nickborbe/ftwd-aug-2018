// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/ourprojects'>Take a Loot At Our Dev Projects</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;