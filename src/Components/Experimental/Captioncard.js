import "./Captioncard.css";
import img from "../Image/planet.jpg"

export default function Captioncard() {
  return (
    <>
      <ul class="image-list-small">
        <li>
          <a href="#" 
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
          ></a>
          <div class="details">
            <h3>
              <a href="#">In the subway</a>
            </h3>
            <p class="image-author">Matt Stone</p>
          </div>
        </li>
        <li>
          <a href="#" 
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
          ></a>
          <div class="details">
            <h3>
              <a href="#">Industrial</a>
            </h3>
            <p class="image-author">Earnest Leming</p>
          </div>
        </li>
        <li>
          <a href="#" 
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
          ></a>
          <div class="details">
            <h3>
              <a href="#">When in Rome..</a>
            </h3>
            <p class="image-author">Edward Flint</p>
          </div>
        </li>
        <li>
          <a href="#" 
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
          ></a>
          <div class="details">
            <h3>
              <a href="#">Mountain Top</a>
            </h3>
            <p class="image-author">Rick Alpine</p>
          </div>
        </li>
        <li>
        <a href="#" 
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
          ></a>
          <div class="details">
            <h3>
              <a href="#">Vienna Adventure</a>
            </h3>
            <p class="image-author">Stacy River</p>
          </div>
        </li>
        <li>
        <a href="#" 
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
          ></a>
          <div class="details">
            <h3>
              <a href="#">Magnificent beach</a>
            </h3>
            <p class="image-author">Frank Stone</p>
          </div>
        </li>
      </ul>
    </>
  );
}
