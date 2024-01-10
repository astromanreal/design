import "./Blogs.css";
import Blogitems, { BlogGroup } from "./Blogitems";
import Blogcards, { Blogcard3 } from "../Cards/Blogcards";
import Blogdata from "../Data/Blogdata";
import { Blogcard4 } from "../Cards/Blogcards";
import Wonderofmilkeyway from "../Data/Wonderofmilkeyway";

export default function Blogs() {
  return (
    <>
      <Blogcards />
      <div className="my-container">
        <BlogGroup />
        <div className="Page-flex-center">
          {Blogdata.map((e) => {
            return <Blogcard3 title={e.title} desc={e.description} id={e.id} />;
          })}

          <h1 className="title">Wonder of Milkeyway</h1>
          {Wonderofmilkeyway.map((e) => {
            return (
              <Blogcard4 title={e.title} desc={e.description} img={e.image} />
            );
          })}
        </div>
      </div>
    </>
  );
}
