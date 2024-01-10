import "./Maincards.css";
import { Link } from "react-router-dom";

export default function Maincards() {
  return (
    <>
      <Missioncard />
      <Rocketcard />
      <Productcard />
      <Usercard />
      <Scrollcard />
      <Seriescard />
      <Seriescard2 />
      <Maincard1 />
    </>
  );
}
export function Missioncard({ title, img, launch, owner, destination }) {
  return (
    <>
      <ul class="card3-container">
        <li class="card3">
          <img src={img} alt="Philadelphia skyline." class="card__img" />
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque
            deleniti nobis blanditiis omnis, aliquam laborum at nulla voluptas
            officiis!
          </p>
          <ul className="card3-ul">
            <li>Launch: {launch}</li>
            <li>Owner: {owner}</li>
            <li>Destination: {destination}</li>
          </ul>

          <Link to="/" target="_blank">
            Learn More →
          </Link>
        </li>
      </ul>
    </>
  );
}
export function Rocketcard() {
  return (
    <>
      <div class="card8-wrapper">
        <div class="card8-widget">
          <div class="widget__photo"></div>
          <div class="widget__button">More...</div>
          <div class="widget__details">
            <div class="widget__name">Space launch system</div>
            <div class="widget__type">Nasa, US</div>
            <div class="widget__info">
              <span>It is used for Artemis program</span>
              <span>Most powerful rocket ever</span>
            </div>
            <div class="widget__hidden">
              <hr />
              <table class="widget__table">
                <tr>
                  <td>Type</td>
                  <td>Super-Heavy lift off</td>
                </tr>
                <tr>
                  <td>Fuel</td>
                  <td>Hydrogen</td>
                </tr>
                <tr>
                  <td>Human-launch</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Yes</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Productcard() {
  return (
    <>
      <div class="Product-container">
        <div class="Product-card">
          <div class="imgBx">
            <img src="https://assets.codepen.io/4164355/shoes.png" />
          </div>
          <div class="contentBx">
            <h2>Nike Shoes</h2>
            <div class="Product-size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div class="Product-color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export function Usercard({ title, desc }) {
  return (
    <>
      <div class="u5-card-client">
        <div class="u5-user-picture"></div>
        <p class="u5-name-client">
          {title}
          <span>{desc}</span>
        </p>
        <div class="u5-social-media">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
            <span class="u5-tooltip-social">Twitter</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
            <span class="u5-tooltip-social">Instagram</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
            <span class="u5-tooltip-social">Facebook</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
            <span class="u5-tooltip-social">LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
}

export function Scrollcard({ title, desc }) {
  return (
    <>
      <div class="u8-card">
        <div class="u8-card-img"></div>
        <div class="u8-card-info">
          <p class="u8-text-title">{title}</p>
          <p class="u8-text-body"> {desc}</p>
          <button class="btn">learn more..</button>
        </div>
      </div>
    </>
  );
}
export function Seriescard(props) {
  return (
    <>
      <div id="contain">
        <div id="in">
          <h1>{props.title}</h1>
          <div class="on">
            <h3>life in technicolor</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export function Seriescard2() {
  return (
    <>
      <section class="Seriescard2-cards">
        <article class="Seriescard2-card Seriescard2-card--1">
          <div class="Seriescard2-card__info-hover">
            <svg class="Seriescard2-card__like" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
              />
            </svg>
            <div class="Seriescard2-card__clock-info">
              <svg class="Seriescard2-card__clock" viewBox="0 0 24 24">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
              </svg>
              <span class="Seriescard2-card__time">15 min</span>
            </div>
          </div>
          <div class="Seriescard2-card__img"></div>
          <a href="#" class="Seriescard2-card_link">
            <div class="Seriescard2-card__img--hover"></div>
          </a>
          <div class="Seriescard2-card__info">
            <span class="Seriescard2-card__category"> Galaxy</span>
            <h3 class="Seriescard2-card__title">
              Wonders of the Milkey way Galaxy
            </h3>
            <span class="Seriescard2-card__by">
              by{" "}
              <a href="#" class="Seriescard2-card__author" title="author">
                The Mikey way..
              </a>
            </span>
          </div>
        </article>
      </section>
    </>
  );
}

export function Maincard1() {
  return (
    <>
      <div class="main4">
        <ul class="cards4">
          <li class="cards_item">
            <div class="card4" tabindex="0">
              <div class="card_image">
                <img
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="mixed vegetable salad in a mason jar. "
                />
              </div>
              <div class="card_content">
                <h2 class="card_title">Farmstand Salad &#x2022; $9</h2>
                <div class="card_text">
                  <p>
                    Dig into the freshest veggies of the season! This
                    salad-in-a-jar features a mixture of leafy greens and
                    seasonal vegetables, fresh from the farmer's market.
                  </p>
                  <p>
                    Served with your choice of dressing on the side:{" "}
                    <strong>
                      housemade ranch, cherry balsamic vinaigrette, creamy
                      chipotle, avocado green goddess, or honey mustard.
                    </strong>
                  </p>
                  <p class="upcharge">
                    Add your choice of protein for $2 more.{" "}
                  </p>
                </div>
              </div>
            </div>
          </li>
          ​
        </ul>
      </div>
    </>
  );
}
