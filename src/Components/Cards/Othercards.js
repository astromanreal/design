import "./Othercards.css";
import { Link } from "react-router-dom";

export default function Othercards() {
  return (
    <>
      <Othercard1 />
      <Othercard2 />
      <Othercard3 />
      <Othercard4 />
    </>
  );
}
export function Othercard1({ id, title, desc }) {
  return (
    <>
      <section className="blur-hero-section">
        <div class="blur-card-grid">
          <a class="blur-card" href="#">
            <div class="blur-card__background"></div>
            <div class="blur-card__content">
              <p class="blur-card__category">{id}</p>
              <h3 class="blur-card__heading">{title}</h3>
              <p>{desc}</p>
            </div>
          </a>
          <a class="blur-card" href="#">
            <div class="blur-card__background"></div>
            <div class="blur-card__content">
              <p class="blur-card__category">{id}</p>
              <h3 class="blur-card__heading">{title}</h3>
              <p>{desc}</p>
            </div>
          </a>
          <a class="blur-card" href="#">
            <div class="blur-card__background"></div>
            <div class="blur-card__content">
              <p class="blur-card__category">{id}</p>
              <h3 class="blur-card__heading">{title}</h3>
              <p>{desc}</p>
            </div>
          </a>
          <div></div>
        </div>
      </section>
    </>
  );
}
export function Othercard2() {
  return (
    <>
      <main class="ani-page-content">
        <div class="ani-card">
          <div class="ani-content">
            <h2 class="ani-title">Explore The Galaxy</h2>
            <p class="ani-copy">
              Seriously, straight up, just blast off into outer space today
            </p>
            <button class="ani-btn">Book Now</button>
          </div>
        </div>
      </main>
    </>
  );
}
export function Othercard3() {
  return (
    <>
      <article id="card5-article">
        <section class="card5">
          <div class="text-content">
            <h3>Elevate Your Brand with Exceptional Design</h3>
            <p>
              Your website is often the first point of contact for potential
              customers. We believe great design can help elevate your brand and
              make a lasting impression.
            </p>
            <Link to="/">Join now</Link>
          </div>
          <div class="visual">
            <img
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMDU1NDY&ixlib=rb-4.0.3&q=80"
              alt=""
            />
          </div>
        </section>

        <section class="card5">
          <div class="text-content">
            <h3>Responsive Design for Every Screen Size</h3>
            <p>
              We specialize in creating responsive designs that look great on
              desktop, tablet, and mobile devices, ensuring your site is
              accessible to all your visitors.
            </p>
            <Link to="/">Join now</Link>
          </div>
          <div class="visual">
            <img
              src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMDU1NDY&ixlib=rb-4.0.3&q=80"
              alt=""
            />
          </div>
        </section>

        <section class="card5">
          <div class="text-content">
            <h3>Design that Speaks to Your Audience</h3>
            <p>
              We work closely with you to understand your brand and your
              customers, so we can create a website that speaks directly to your
              target audience.
            </p>
            <Link to="/">Join now</Link>
          </div>
          <div class="visual">
            <img
              src="https://images.unsplash.com/photo-1631085274261-0ace0296eaa0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMTExMDg&ixlib=rb-4.0.3&q=80"
              alt=""
            />
          </div>
        </section>

        <section class="card5">
          <div class="text-content">
            <h3>Design that Drives Results for Your Business</h3>
            <p>
              We specialize in creating websites that not only look great but
              also drive traffic and conversions. Let us help you create a
              website that delivers real business value.
            </p>
            <Link to="/">Join now</Link>
          </div>
          <div class="visual">
            <img
              src="https://images.unsplash.com/photo-1611703372231-02ffff8abee6?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMTEyNTU&ixlib=rb-4.0.3&q=80"
              alt=""
            />
          </div>
        </section>
      </article>
    </>
  );
}
export function Othercard4() {
  return (
    <>
      <div class="projects-section">
        <div class="card6-card-container">
          <div class="card6-card">
            <img
              src="https://media.discordapp.net/attachments/1005458726662180894/1023385029914669056/Dusko_hyperrealistic_floating_in_the_sky_island_3d_game_art_wit_1cd582c0-8dd9-4252-9228-3dba1b718ebc.png"
              alt=""
            />
            <h3>Fantasy Islands</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              fugiat!
            </p>
            <div class="card6-link">
              <a to="#">See project</a>
            </div>
          </div>

          <div class="card6-card">
            <img
              src="https://media.discordapp.net/attachments/1005458726662180894/1023693255017242674/Dusko_low_angle_hyperrealistic_photography_of_shiny_diamonds_on_7a65d835-84c9-4d34-bbe3-53a92ca0b2a1.png"
              alt=""
            />
            <h3>Forest Diamonds</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              fugiat!
            </p>
            <div class="card6-link">
              <Link to="#">See project</Link>
            </div>
          </div>

          <div class="card6-card">
            <img
              src="https://media.discordapp.net/attachments/1005458726662180894/1016992197586989086/Dusko_fantasy_storybook_illustration_of_a_castle_78e4a5df-2800-4f7f-afa3-e1bf06f016eb.png"
              alt=""
            />
            <h3>Fantasy Castles</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              fugiat!
            </p>
            <div class="card6-link">
              <Link to="#">See project</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Othercard5() {
  return <></>;
}
export function Othercard6() {
  return <></>;
}
