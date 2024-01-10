import "./Ecom.css";
import { Link } from "react-router-dom";

export function Mostpopular({ imge, title, desc }) {
  return (
    <>
      <section id="Most-popular-Missions">
        <div class="container">
          <div class="sc-content">
            <div className="sc-tag">featured content</div>
            <h1>{title} </h1>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Link to="/">discover now</Link>{" "}
          </div>
          <div class="sc-media">
            <div class="sc-media-bg">
              {/* <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412556/E-commerce%20landing%20page/summer-collection/cold-fashion-man-women_3x.jpg" alt="sc-image" />  */}
              <img src={imge} alt="sc-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Popularproducts() {
  return (
    <>
      <section id="products">
        <div class="container">
          <div class="products-header">
            <h2>popular products</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="product product-1">
            <figure>
              {" "}
              <img
                src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg"
                alt="product-image"
              />
              <figcaption>cold fashion</figcaption>
              <figcaption>$ 56.00</figcaption>
            </figure>
          </div>
          <div class="product product-2">
            <figure>
              {" "}
              <img
                src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412546/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg"
                alt="product-image"
              />
              <figcaption>women fashion</figcaption>
              <figcaption>$ 84.00</figcaption>
            </figure>
          </div>
          <div class="product product-3">
            <figure>
              {" "}
              <img
                src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg"
                alt="product-image"
              />
              <figcaption>women fashion</figcaption>
              <figcaption>$ 48.00</figcaption>
            </figure>
          </div>
          <div class="product product-4">
            <figure>
              {" "}
              <img
                src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg"
                alt="product-image"
              />
              <figcaption>men fashion</figcaption>
              <figcaption>$ 89.00</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export function Topiccollection({ title, img1, img2, img3 }) {
  return (
    <>
      <section id="collections">
        <div class="container">
          <div class="c-1">
            <div class="c-1-image-holder">
              <img src={img1} alt="image" />{" "}
            </div>
          </div>
          <div class="c-2">
            <h2>featured {title}</h2>
            <hr />
            <div class="c-2-image-holder">
              {" "}
              <img class="left" src={img2} alt="" />
              <img class="right" src={img3} alt="" />
            </div>
            <p class="button">view all {title}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function Letestblogs() {
  return (
    <>
      <section id="blog">
        <div class="container">
          <div class="blog-header">
            <h2>latest from blog</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="blog-content">
            <div class="blog-1">
              <div class="blog-1-image-holder">
                {" "}
                <img
                  src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412548/E-commerce%20landing%20page/blog/blog-2-img_3x.jpg"
                  alt="image"
                />{" "}
              </div>
              <div class="blog-1-content">
                <h4>Lorem Ipsum</h4>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <p class="button">view post</p>
              </div>
            </div>
            <div class="blog-2">
              <div class="blog-2-image-holder">
                {" "}
                <img
                  src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/blog/blog-1-img_3x.jpg"
                  alt="image"
                />{" "}
              </div>
              <div class="blog-2-content">
                <h4>Lorem Ipsum</h4>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <p class="button">view post</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Ecom() {
  return (
    <>
      <Mostpopular />
      <Popularproducts />
      <Letestblogs />
      <Topiccollection />
    </>
  );
}
