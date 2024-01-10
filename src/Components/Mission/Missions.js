import {Topiccollection } from '../Items/Ecom'
import Slider1 from '../Explore/Slider1'
import img1 from "../Image/neubula.jpg"
import img2 from "../Image/black_hole.jpg"
import img3 from "../Image/tech.jpg"

import { Blogcard5 } from '../Cards/Blogcards'



export default function Missions() {
  
  return (
    <>



   

   
       <Slider1
       Slidertitle="Trending"
       />
       <Slider1
       Slidertitle="Recent"
       />
       <Topiccollection
       title="missions"
       img1={img1}
       img2={img2}
       img3={img3}
       />
       <Slider1
       Slidertitle="Mars"
       />
       <Slider1
       Slidertitle="Moon"
       />
       <Blogcard5
       title="Artemis mission"
       title2="The next generation of space exploration"
       img={img1}
       />
     <h2>More like this...</h2>
   
  

        </>
  )
}
