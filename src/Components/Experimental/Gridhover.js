import "./Gridhover.css"
import img from "../Image/saturn.jpg"

export default function Gridhover() {
  return (
    <>
      <div class="Gridhover-row">
        <div class="Gridhover-column">
          <a href="#">
            <div class="Gridhover-container">
              <img src={img} class="Gridhover-image"/>
              <div class="Gridhover-overlay">
                <div class="Gridhover-text">Example 1</div>
              </div>
            </div>
          </a>
        </div>
        <div class="Gridhover-column">
          <a href="#">
            <div class="Gridhover-container">
              <img src={img} class="Gridhover-image"/>
              <div class="Gridhover-overlay">
                <div class="Gridhover-text">Example 2</div>
              </div>
            </div>
          </a>
        </div>
        <div class="Gridhover-column">
          <a href="#">
            <div class="Gridhover-container">
              <img src={img} class="Gridhover-image"/>
              <div class="Gridhover-overlay">
                <div class="Gridhover-text">Example 3</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
