import "./Intro.css";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <Introheader />
      <Introxbox />
      <Carbon />
    </>
  );
}

export function Introheader(props) {
  return (
    <>
      <header
        style={{
          background: `url(${props.img}) no-repeat center center/cover`,
        }}
        class="showcase"
      >
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <Link to={props.link} class="btn">
          {props.button}
          <i class="fas fa-chevron-right"></i>
        </Link>
      </header>
    </>
  );
}

export function Introxbox(props) {
  return (
    <>
      <section
        style={{
          background: `url(${props.img}) no-repeat center center/cover`,
        }}
        class="xbox"
      >
        <div class="content">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <Link to={props.link} class="btn">
            {props.button}
            <i class="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export function Carbon(props) {
  return (
    <>
      <section
        style={{
          background: `url(${props.imge}) no-repeat center center/cover`,
        }}
        class="carbon dark"
      >
        <div class="carbon-content">
          <h1>{props.header}</h1>
          <p>{props.desc}</p>
          <Link to={props.link} class="btn">
            {props.button} <i class="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
