import React, { useState} from 'react'
import './style.css'
import search1 from '../../search.svg'
import { NavLink } from 'react-router-dom'

const Navvy = (props) => {

  //react hooks
  // useState returns an array 
  // 1. value itself ie. false 
  // 2. setter function to set the value of search (for making the class change dynamically)
  //useState(setIntialValue)

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert('enter');
    
  }

  const openSearch = () => {
    // search = true;
    setSearch(true);
  }

  // dynamically generate class with the search input
  const searchClass = search ? 'searchInput active' : 'searchInput';

  return (
    <div className="navvybar">
      <ul className="navvybarMenu">
      <li><NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/about">About</NavLink></li>
        <li><NavLink to ="/blog">Blog</NavLink></li>
        <li><NavLink to ="/gear">Gear</NavLink></li>
        <li><NavLink to ="/contact">Contact</NavLink></li>
      </ul>
      <div className="search">
        <form onSumbit={submitSearch}>
          <input type="text" className={searchClass} placeholder="search"/>
          <img src={search1} onClick={openSearch} className= "searchIcon" width="30px" height="32px" alt="Search"/>
        </form>
      </div>
    </div>
  )
}

export default Navvy
