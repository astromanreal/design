import fimg from "../Image/neubula.jpg"

export default function Exploreitems() {
  return (
    <>
    <UserCircle
    
    />
    </>
  )
}


export function UserCircle() {
  return (
   <>
         <div className="fi-main-container">
     <SingleUserCircle
     name="NASA"
     />
     <SingleUserCircle
     name="ESA"
     />
     <SingleUserCircle
     name="ISRO"
     />
     
      </div>
   </>
  )
}

export function SingleUserCircle(props) {
  return (
    <>
    <div class="fi-person">
        <div class="fi-container">
          <div class="fi-container-inner">
           <img src={fimg} alt="" className="fi-circle" />
           
          </div>
        </div>
        <div class="fi-divider"></div>
        <div class="fi-name">{props.name}</div>
        <div class="fi-title">Top space agency</div>
      </div>
    </>
  )
}
