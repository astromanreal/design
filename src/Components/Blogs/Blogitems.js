import "./Blogs.css";

export default function Blogitems() {
  return (
    <>
      <BlogGroup />
      <div className="blog-flex-container">
      </div>
    </>
  );
}

export function BlogGroup() {
  return (
    <>
      <main class="blog-container">
        <section class="main-title">
          <p class="title">Productivity</p>
        </section>

        <section class="blog-article">
          <img
            className="blog-main-img"
            src="https://i.imgur.com/FTKva1B.png"
            alt=""
          />
          <h1 class="article-title">Little Things Do Make A Difference</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            mollitia eum tempora dolore neque alias placeat deserunt harum nobis
            maiores tenetur eaque, commodi assumenda facere dicta voluptate
            quibusdam officia voluptates? Nobis iste esse ab? Quidem, iure
            laudantium excepturi reprehenderit, quod id alias explicabo harum
            aliquam perspiciatis pariatur aliquid! At, sapiente.
          </p>

          <section class="author">
            <img
              class="author-img"
              src="https://i.imgur.com/iXanLwS.png"
              alt="Kathryn Shelton"
            />
            <p class="author-name">Kathryn Shelton</p>
          </section>
        </section>

        <section class="recent">
          <h1>Recent Articles</h1>
          <section class="recent-article">
            <img
              class="recent-img"
              src="https://i.imgur.com/giuxWkS.png"
              alt=""
            />
            <div class="article-content">
              <h2>Common Symbols And Their Meanings</h2>
              <section class="author">
                <img
                  class="author-img"
                  src="https://i.imgur.com/Bv95d2q.png"
                  alt="Susie Russell"
                />
                <p class="author-name">Susie Russell</p>
              </section>
            </div>
          </section>

          <section class="recent-article">
            <img
              class="recent-img"
              src="https://i.imgur.com/sD5LPzc.png"
              alt=""
            />
            <div class="article-content">
              <h2>Success Steps For Your Business</h2>
              <section class="author">
                <img
                  class="author-img"
                  src="https://i.imgur.com/l9ursB3.png"
                  alt="Connor Parsons"
                />
                <p class="author-name">Connor Parsons</p>
              </section>
            </div>
          </section>

          <section class="recent-article">
            <img
              class="recent-img"
              src="https://i.imgur.com/6kwitTR.png"
              alt=""
            />
            <div class="article-content">
              <h2>The strength Of Your Belief</h2>
              <section class="author">
                <img
                  class="author-img"
                  src="https://i.imgur.com/eADyPVB.png"
                  alt="Jonathan Yates"
                />
                <p class="author-name">Jonathan Yates</p>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

