import React from 'react'
import "./Flexcard.css"
import { Link } from 'react-router-dom'

export default function Flexcard(props) {
  return (
    <>
     <div className="flex-card-section">

        <div className="flex-card-container">
        
        <Flexcarditem
        title={props.title}
        />
        
        </div>
     </div>
    </>
  )
}



export function Flexcarditem(props) {
  return (
    <>
    <div className="flex-card-item">
        <h1>{props.title}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sequi corporis laboriosam, magnam necessitatibus deserunt.</p>
        <Link to={props.title}><button>Read more...</button></Link>
        </div>
    </>
  )
}
