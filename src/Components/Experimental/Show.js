import { Link } from "react-router-dom";
import "./Show.css";

export default function Show() {
  return (
    <>
      <div class="expand-container">
        <div id="universe" class="expand-section">
          <div class="expand-content">
            <Link to="/">
              <h1>Universe</h1>
            </Link>
          </div>

          <div class="expand-overlay"></div>
        </div>

        <div id="technology" class="expand-section">
          <div class="expand-content">
            <Link to="/">
              <h1>Technology</h1>
            </Link>
          </div>
          <div class="expand-overlay"></div>
        </div>
        <div id="mission" class="expand-section">
          <div class="expand-content">
            <Link to="/mission">
              <h1>Missions</h1>
            </Link>
          </div>
          <div class="expand-overlay"></div>
        </div>
      </div>
    </>
  );
}
