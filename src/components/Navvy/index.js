import React from 'react'
import './style.css'
import search from '../../search.svg'

const Navvy = (props) => {
  return (
    <div className="navvybar">
      <ul className="navvybarMenu">
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Gear</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="search">
        <input type="text" placeholder="search"/>
        <img src={search} width="30px" height="32px" />
      </div>
    </div>
  )
}

export default Navvy
