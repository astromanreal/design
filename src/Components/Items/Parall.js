import { Link } from "react-router-dom";
import "./Parall.css";

export default function Parall() {
  return (
    <>
      <Parallcontainer
        title="Space xploration()"
        body="a great place to explore our universe and our place in it.."
      />

      <div class="blank"></div>

      <div class="parall-container second">
        <div class="parall-item">
          <div class="img img-first"></div>
          <div class="parall-card">
            <h3>Space mission</h3>
            <p>
              The goal is to reach the summit of a formation or the endpoint of
              a usually pre-defined route without falling
            </p>
            <Link to="mission">Learn more</Link>
          </div>
        </div>
        <div class="parall-item">
          <div class="img img-second"></div>
          <div class="parall-card">
            <h3>Launch vehicals</h3>
            <p>
              Exploring underground through networks of tunnels and passageways,
              which can be natural or artificial.
            </p>
            <Link to="rocket">Learn more</Link>
          </div>
        </div>
        <div class="parall-item">
          <div class="img img-third"></div>
          <div class="parall-card">
            <h3>Technology & Telescope</h3>
            <p>
              Jumping from an aeroplane and falling through the air before
              opening your parachute.
            </p>
            <Link to="explore">Learn more</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function Parallcontainer(props) {
  return (
    <>
      <div class="parall-container">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <Link to="explore">Explore</Link>
      </div>
    </>
  );
}
