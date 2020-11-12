import React from 'react'
import Card from '../UI/Card'
import './style.css'
import snareandseat from '../../snareandseat.jpg'

const Sidebar = (props) => {
  return (
    <div className="sidebarContainer">
      <Card style={{marginBottom:'20px'}}>
        <div className="cardHeader">
          <span>Latest News</span>
        </div>
        <div className="imageContainer">
          <img src={snareandseat} alt="image of a snaredrum bass drum and sticks" />
        </div>
      </Card>

      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

    </div>
    
  )
}

export default Sidebar
