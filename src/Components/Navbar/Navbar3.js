import React from 'react'
import './Navbar3.css'

export default function Navbar3() {
  return (
    <>
     <input type="checkbox" id="checkbox"/>
     <label class="btn" for="checkbox"><i class="fa fa-bars"></i> <span>Menu</span></label>

      <div class="sidebar">
      <ul>
        <a href="#"><li><i class="fa fa-tachometer"></i>Dashboard</li></a>
        <a href="#"><li><i class="fa fa-lightbulb-o"></i>Widgets</li></a>
        <a href="#" class="active"><li><i class="fa fa-line-chart"></i>Charts</li></a>
        <a href="#"><li><i class="fa fa-television"></i>Front-End</li></a>
        <a href="#"><li><i class="fa fa-send"></i>Email</li></a>
        <a href="#"><li><i class="fa fa-wpforms"></i>Forms</li></a>
        <a href="#"><li><i class="fa fa-paint-brush"></i>UI Elements</li></a>
        <a href="#"><li><i class="fa fa-file-text-o"></i>Pages</li></a>
        <a href="#"><li><i class="fa fa-globe"></i>Google Maps</li></a>
     </ul>
      </div>
    </>
  )
}
