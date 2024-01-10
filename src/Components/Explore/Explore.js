import "./Explore.css";
import Links from "./Links";
import Faq from "../Media/Faq";
import Objects from "../Data/Objects";
import Stars from "../Data/Stars";
import Theorey from "../Data/Theorey";
import Planets from "../Data/Planets";
import Study from "../Data/Study";
import Technology from "../Data/Technology";

import Slider1 from "./Slider1";
import { Blogcard1 } from "../Cards/Blogcards";
import Wonderofmilkeyway from "../Data/Wonderofmilkeyway";

export default function Explore() {
  return (
    <>
      <div className="my-container">
        <Slider1 Slidertitle="Space missions" />

        <div className="one-flex">
          <h1 className="title">Wonder of Milkeyway</h1>
          {Wonderofmilkeyway.map((e) => {
            return <Blogcard1 title={e.title} desc={e.description} />;
          })}
        </div>
      </div>

      <Faq />
      <Links />
    </>
  );
}
