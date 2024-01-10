import "./Rocket.css"
import Cimg from "../Image/planet.jpg"
import futureMission from "../Data/Future"
import { Rocketcard } from "../Cards/Maincards"

export default function Rocket() {
  return (
    <>
   
        <div className="my-container">
        <RocketSlider
        title="Most popular"
        />
        <RocketSlider
        title="Reusable"
        />
        <RocketSlider
        title="Super heavy lift"
        />
        <RocketSlider
        title="Commercial"
        />
        <RocketSlider
        title="Under development"
        />
        <RocketSlider
        title="Most powerful"
        />
       
        </div>
     
   
    </>
  )
}



export function RocketSlider(props) {
  return (
   <>
    <h2 className="text-center">{props.title}</h2>
    <div class="carousel">
      
      {futureMission.map((element)=>{
        return(
          <div key={element} class="carousel--item">
           
        <Rocketcard
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
   </>
  )
}

