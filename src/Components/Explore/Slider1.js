
import Cimg from "../Image/space_expolation.jpg"
import futureMission from "../Data/Future"
import {Missioncard} from "../Cards/Maincards"

export default function Slider1(props) {
  return (
    <>
    
   
    <div class="slider" x-data="{start: true, end: false}">
    <h1 class="title">{props.Slidertitle}</h1>
      <div class="slider__content" x-ref="slider">
        {futureMission.map((element)=>{
          return(
            <div key={element} className="Slider1_gap">
              <Missioncard
                 title={element.name}
                 article={element.article}
                 owner={element.owner}
               launch={element.launch}
               destination={element.destination}
               img={Cimg}
              />

            </div>
          )
        })}
     
      </div>
    </div>
    </>
  )
}