// rfc = react functional component
// rce = react component with export
// rafce

//this component creates the 2nd navigational menu and reflects in containers/home/index.js

import React from 'react'
import './style.css'

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
      <div>
        social media or something else
      </div>
    </header>
  )
}

export default Header


