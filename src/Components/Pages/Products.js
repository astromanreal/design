import { Letestblogs, Mostpopular, Popularproducts, Topiccollection } from "../Items/Ecom"
import "./Products.css"
import Tags from "../Data/Tags"
import { Scrollcard } from "../Cards/Maincards"


export default function Products() {
  return (
    <>
    <div className="one-flex">
    {Tags.map((e)=>{
      return(

<Scrollcard
title={e.name}
desc={e.desc}

/>
      )
      
    })}

</div>
    <Mostpopular/>
    <Popularproducts/>
    <Topiccollection/>
    <Letestblogs/>

    </>
  )
}
