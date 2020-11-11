// shotcut rafce
//using props.children we can render dynamic content.

import React from 'react'
import Logo from '../Logo'
import Navvy from '../Navvy'
import Card from '../UI/Card'
import './style.css'

const Hero = (props) => {
  return (
    <div>
      <Card>
       <div style={{padding: "50px 0"}}>
          <Logo /> 
        </div>
        <Navvy />
      </Card>
    </div>
  )
}

export default Hero

