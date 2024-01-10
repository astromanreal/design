import "./Blogcards.css"

export default function Blogcards() {
  return (
   <>
   <Blogcard1/>
   <Blogcard2/>
   <Blogcard3/>
   <Blogcard4/>
   <Blogcard5/>
   <Blogcard6/>
   <Blogcard7/>
   <Blogcard8/>
   
   </>
  )
}
export function Blogcard1({title, desc}) {
  return (
   <>
       <div class="u6-card">
  <div class="u6-content">
    <p class="u6-heading">{title}
    </p><p class="u6-para">
      {desc}
    </p>
    <button class="u6-btn">Read more</button>
  </div>
</div>
   </>
  )
}
export function Blogcard2(props) {
  return (
   <>
        <div id="base">
        <ul>
          <li>
            <img alt="" />
            <div class="crd-details">
              <h3>{props.title}</h3>
              <p>{props.desc}</p>
              <div class="readmore">
                Read More <span>→</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
   </>
  )
}
export function Blogcard3({id, title, desc}) {
  return (
   <>
   <div class="simple-container">
        <div class="simple-card">
          <h2 class="simple-card-title">
            {id}.... {title}
          </h2>
          <img
            class="simple-card-img"
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt=""
          />
          <p class="simple-card-description">
            {desc}
          </p>
          <div class="simple-card-action">
            <div class="action-row">
              <i class="fa-solid fa-heart"></i>
              <p>362</p>
            </div>
            <div class="action-row">
              <i class="fa-solid fa-paper-plane"></i>
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
export function Blogcard4({title, img, desc}) {
  return (
   <>
    <div class="post_section">
        <h2>{title}</h2>
        <div>
          {" "}
          December 28, 2048 | <strong>Author:</strong> John |{" "}
          <strong>Category:</strong> <a href="#">Freebies</a>{" "}
        </div>
        <div
          style={{
            background: `url(${img}) no-repeat center center/cover`,
          }}
          className="img"
        ></div>
        <p>
         {desc}
        </p>
        <button>Continue reading...</button>
      </div>
   </>
  )
}


export function Blogcard5(props) {
  return (
   <>
         <section id="card7-section">
        <div class="card7-container">
          <div class="card7-content">
            <div class="content-img">
              <img
                src={props.img}
                alt="Image is lost!!"
              />
            </div>
            <div class="content-text">
              <h2 class="content-title">{props.title}</h2>
              <h4 class="content-subtitle">{props.title2}</h4>
              <p class="content-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur esse aut deleniti magni. Quaerat unde non beatae hic
                veniam necessitatibus reiciendis reprehenderit tempore alias
                maxime delectus, ullam aut adipisci, aliquid velit dolores
                molestiae, eius nihil nam et ut fugiat iste perspiciatis quis?
                Veniam accusantium ut recusandae eaque quas laudantium nostrum?
              </p>
              <a href="#" class="btn-7">
                View More
              </a>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
export function Blogcard6() {
  return (
   <>
      <div className="ucard-holder">
        <div class="ucard">
          <div class="ucard-inner">YOUR CONTENT HERE</div>
          <div className="ucard-desc">
            <h2>Content</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eaque deleniti nobis blanditiis omnis, aliquam laborum at nulla
              voluptas officiis!
            </p>
            <button className="btn">Know more...</button>
          </div>
        </div>

        <div class="ucard">
          <div class="ucard-inner">YOUR CONTENT HERE</div>
          <div className="ucard-desc">
            <h2>Content</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eaque deleniti nobis blanditiis omnis, aliquam laborum at nulla
              voluptas officiis!
            </p>
            <button className="btn">Know more...</button>
          </div>
        </div>
      </div>
   </>
  )
}
export function Blogcard7({title, desc}) {
  return (
   <>
       <div class="u7-card">
        <div class="u7-img"></div>

        <div class="u7-text">
          <p class="u7-h3"> {title} </p>
          <p class="u7-p">  {desc}</p>

          <button className="u7-btn">Read</button>
        </div>
      </div>
   </>
  )
}
export function Blogcard8() {
  return (
   <>
   
   </>
  )
}
