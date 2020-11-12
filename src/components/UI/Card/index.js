import React from 'react'
import './style.css'

//spread function <div className="card" {...props}>
//the properties we use in the card component will also be available here
//this way we can reuse card component and alter its props to suit the UI

const Card = (props) => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  )
}

export default Card