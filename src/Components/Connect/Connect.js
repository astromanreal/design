import "./Connect.css";

import Contact from "./Contact";
import Uiregister from "./Uiregister";
import Uilog from "./Uilog";
import Logsign from "./Logsign";
import One from "../Experimental/Show";
import Tags from "../Elements/Tags";

export default function Connect() {
  return (
    <>
      <One />
      <div className="scr-connect my-container">
        <Tags />
        <Uiregister />
        <Logsign />
        <Uilog />
        <Contact />
      </div>
    </>
  );
}
