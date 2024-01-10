import { Link } from "react-router-dom";


export default function Links() {
  return (
    <>
     <section class="ms-links">
        <div class="ms-links-inner">
          <ul>
            <li><h3>What's Trending</h3></li>
            <li><Link to="*">Starship</Link></li>
            <li><Link to="*">Artemis 2</Link></li>
            <li><Link to="*">Space race</Link></li>
            <li><Link to="*">Landing on mars</Link></li>
            <li><Link to="*">Space turism</Link></li>
           
          </ul>
          <ul>
            <li><h3>Space missions</h3></li>
            <li><Link to="*">By status</Link></li>
            <li><Link to="*">By types</Link></li>
            <li><Link to="*">By destination</Link></li>
            <li><Link to="*">By Target</Link></li>
            <li><Link to="*">By owner</Link></li>
          </ul>
          <ul>
            <li><h3>Launch vehicals</h3></li>
            <li><Link to="*">Most powerful</Link></li>
            <li><Link to="*">Reuseable</Link></li>
            <li><Link to="*">By lift type</Link></li>
            <li><Link to="*">By owner</Link></li>
            <li><Link to="*">Under development</Link></li>
          </ul>
          <ul>
            <li><h3>Space Telescopes</h3></li>
            <li><Link to="*">Most popular</Link></li>
            <li><Link to="*">Planet Hunting</Link></li>
            <li><Link to="*">Solar system</Link></li>
            <li><Link to="*">Active</Link></li>
            <li><Link to="*">Future</Link></li>
          </ul>
          <ul>
            <li><h3>Space Agency</h3></li>
            <li><Link to="*">Most popular</Link></li>
            <li><Link to="*">Govermental</Link></li>
            <li><Link to="*">Commercial</Link></li>
            <li><Link to="*">For Militry purpose</Link></li>
            <li><Link to="*">with lauch capacity</Link></li>
          </ul>
          <ul>
            <li><h3>Space Technologies</h3></li>
            <li><Link to="*">Spaceship</Link></li>
            <li><Link to="*">Rockets</Link></li>
            <li><Link to="*">Telescopes</Link></li>
            <li><Link to="*">Solar sail</Link></li>
            <li><Link to="*">Space Station</Link></li>
          </ul>
        </div>
      </section>
    
    </>
  )
}
