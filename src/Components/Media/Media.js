import Faq from "./Faq"
import Community from "./Community"
import Events from "./Events"
import "./Media.css"
import futureMission from "../Data/Future"
import Mediacard from "./Mediacard"
import { Comment2 } from "../Uiverse/Comment"

export default function Media() {
  return (
    <>
    <Events/>
    <Comment2/>
    <div className="flex-media-test">
    {futureMission.map((e)=>{
      return(
        <Mediacard/>
      )
    })}
    </div>
    <Community/>
    <Faq/>
    </>
  )
}
