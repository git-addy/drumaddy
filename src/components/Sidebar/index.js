import React, { useState, useEffect } from 'react'
import Card from '../UI/Card'
import './style.css'
import snareandseat from '../../snareandseat.jpg'
import blogPost from '../../data/posts.json'
import { NavLink } from 'react-router-dom'


const Sidebar = (props) => {

  const [posts,setPosts] = useState([]);
  
  //this method gets called after every render
  //why: we need an updated data picture for some functions to be meaningful and this takes care of running functions with the updated/asynchronous callback results
  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
});

  return (
    <div className="sidebarContainer">

      <Card style={{marginBottom:'20px', padding:'20px'}}>
        <div className="cardHeader">
          <span>Latest News</span>
        </div>
        <div className="imageContainer">
          <img src={snareandseat} alt="image of a snaredrum bass drum and sticks" />
        </div>
        <div className="cardBody">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil iure dicta atque laudantium ducimus, numquam impedit deleniti reprehenderit quisquam illum recusandae amet optio quos commodi magni pariatur. Ea, sapiente ratione!
          </p>
        </div>
      </Card>

      <Card style={{marginBottom:'20px', padding:'20px'}}>
        <div className="cardHeader">
          <span>News</span>
        </div>
      </Card>

      <Card style={{marginBottom:'20px', padding:'20px'}}>
      <div className="cardHeader">
          <span>Recent Posts</span>
      </div>

      <div className="recentPosts">

        {
          posts.map(post => {
            return(
              <NavLink to={`/blog/${post.id}`}>
                <div className="post">
                <h3>{post.title}</h3>
                <span>{post.date}</span>
              </div>
              </NavLink> 
            );
          })
        }
      </div>

      </Card>

    </div>
  )
}

export default Sidebar
