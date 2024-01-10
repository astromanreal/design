import Topics from "../Experimental/Topics";
import Show from "../Experimental/Show";
import Aboutcard from "../Elements/Aboutcard";
import Tags from "../Elements/Tags";
import Comment, { Comment2 } from "../Uiverse/Comment";
import Maincards, { Maincard1, Seriescard2 } from "../Cards/Maincards";
import Captioncard from "../Experimental/Captioncard";
import Gridhover from "../Experimental/Gridhover";
import Missionpage from "../Mission/Missionpage";
import Tabpage from "../Mission/Tabpage";
import { Pricing2 } from "../Payments/Payment";
import Singlepage from "../Articles/Singlepage";

export default function Testing() {
  return (
    <>
      <Singlepage />
      <div className="my-container">
        <Maincards />
        <Pricing2 />
        <Tabpage />
        <Missionpage />
        <Gridhover />
        <Captioncard />
        <h1 className="ripple-title">Name of a title</h1>

        <Seriescard2 />
        <Maincard1 />
        <Comment2 />
        <Comment />
        <Aboutcard />
        <Tags />
        <Show />
        <Topics />
      </div>
    </>
  );
}
