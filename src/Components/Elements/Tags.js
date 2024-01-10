import "./Tags.css";
import Tags from "../Data/Tags"

export default function Tagss() {
  return (
    <>
      <Tag1 />
      <Tag2 />
    </>
  );
}

export function Tag1() {
  return (
    <>
      <div class="tag1-container">
        <p class="tag1-tags">
          <span>Tags</span>
          <a class="tag1-tag" href="#">
            CSS
          </a>
          <a class="tag1-tag" href="#">
            JavaScript
          </a>
          <a class="tag1-tag tag1-active" href="#">
            Trend
          </a>
          <a class="tag1-tag" href="#">
            API
          </a>
          <a class="tag1-more" href="#">
            more...
          </a>
        </p>
      </div>
    </>
  );
}
export function Tag2() {
  return (
    <>
      
<div className="one-flex">
      {Tags.map((e)=>{
        return(
<div class="tag2">
        <a>{e.name}</a>
      </div>
        )
      })}
      </div>
    </>
  );
}
export function Tag3() {
  return <></>;
}
