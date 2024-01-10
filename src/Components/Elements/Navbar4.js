import React from 'react'
import './Navbar4.css'
import { Link } from 'react-router-dom'

export default function Navbar4() {
  return (
    <>
    <nav role="navigation">
  <div id="menuToggle">
   
    <input type="checkbox" />
 
    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu">
      <Link to="/"><li>Home</li></Link>
      <Link to="mission"><li>Mission</li></Link>
      <Link to="blog"><li>Blogs</li></Link>
      <Link to="connect"><li>Join us!</li></Link>

    </ul>
  </div>
</nav>
    </>
  )
}
