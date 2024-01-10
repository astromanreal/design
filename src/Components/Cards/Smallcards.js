import "./Smallcards.css";
import { Link } from "react-router-dom";

export default function Smallcards() {
  return (
    <>
      <Smallcard1 />
      <Smallcard2 />
      <Smallcard3 />
      <Smallcard4 />
      <Smallcard5 />
      <Smallcard6 />
      <Smallcard7 />
    </>
  );
}
export function Smallcard1(props) {
  return (
    <>
      <div class="facts-card">
        <a class="facts-card1" href="#">
          <p>{props.title}</p>
          <p class="facts-small">{props.desc}</p>
          <div class="facts-go-corner" href="#">
            <div class="facts-go-arrow">→</div>
          </div>
        </a>
      </div>
    </>
  );
}
export function Smallcard2(props) {
  return (
    <>
      <div class="tag-card">
        <div class="tag-card-details">
          <p class="tag-text-title">{props.name}</p>
          <p class="tag-text-body">{props.desc}</p>
        </div>
        <button class="tag-card-button">
          <Link to="*">More info</Link>
        </button>
      </div>
    </>
  );
}
export function Smallcard3({ name, desc }) {
  return (
    <>
      <div class="u2-card">
        <h3 class="u2-card__title">{name}</h3>
        <p class="u2-card__content">{desc}</p>
        <div class="u2-card__date">April 15, 2022</div>
        <div class="u2-card__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="15"
            width="15"
          >
            <path
              fill="#fff"
              d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export function Smallcard4({ title, desc }) {
  return (
    <>
      <div class="u3-container">
        <div class="u3-box">
          <span class="u3-title">{title}</span>
          <div>
            <p>{desc}</p>
            <strong>more on explore..</strong>
            <span>VALID</span> <span>01/28</span>
          </div>
        </div>
      </div>
    </>
  );
}
export function Smallcard5({ title, desc }) {
  return (
    <>
      <div class="u9-card">
        <div class="u9-content">
          <span class="u9-title">{title}</span>

          <p>{desc}</p>

          <a href="#" class="u9-action">
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
export function Smallcard6() {
  return (
    <>
      <div class="task" draggable="true">
        <div class="tags">
          <span class="tag">Draggable</span>
          <button class="options"></button>
        </div>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown{" "}
        </p>
        <div class="stats">
          <div>
            <div>Comment: 19</div>
            <div>Like: 7</div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Smallcard7() {
  return (
    <>
      <div class="u4-card">
        <div class="u4-card-info">
          <div class="u4-card-avatar"></div>
          <div class="u4-card-title">Steve Jobs</div>
          <div class="u4-card-subtitle">CEO &amp; Co-Founder</div>
        </div>
        <ul class="u4-card-social">
          <li class="u4-card-social__item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
            </svg>
          </li>
          <li class="u4-card-social__item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
            </svg>
          </li>
          <li class="u4-card-social__item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}
