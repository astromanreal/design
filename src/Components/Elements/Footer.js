import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    
    <footer>
<div class="row1 primary">
  <div class="column about">

  <h3>The Space Exploration</h3>

   <p>
      A website to explore the next era of space exploration, Here in this website you can find all the things need to know about the space.
  </p>

  <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div class="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h3>Some Links</h3>
   <ul>
    <li>
     <a href="#faq">F.A.Q</a>
    </li>
    <li>
     <a href="#cookies-policy">Cookies Policy</a>
    </li>
    <li>
    <a href="#terms-of-services">Terms Of Service</a>
    </li>
    <li>
    <a href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input className='footer-input-email' type="email" placeholder="Enter Your Email..." />
   <button>Subscribe</button>
  </div>

</div>

</div>

<div class="row1 copyright">
  <div class="footer-menu">

  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/connect">Connect</Link>
  <Link to="/more">More...</Link>
  

  </div>
   <p>Copyright &copy; 2023 Space Xploration </p>
</div>
</footer>
    </>
  )
}
