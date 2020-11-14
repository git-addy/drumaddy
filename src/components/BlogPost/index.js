import React, { useState, useEffect } from 'react'
import Card from '../UI/Card'
import './style.css'
import sideshot from '../../sideshot.jpg'
import blogPost from '../../data/posts.json'

const BlogPost = (props) => {


  const [post,setPost] = useState({});
  
  //this method gets called after every render
  //why: we need an updated data picture for some functions to be meaningful and this takes care of running functions with the updated/asynchronous callback results
  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId)
    setPost(post);
});

  return (
    //we will check this out later
    // <Card style={{ width:"70%"}}>
    //   My first blog post
    // </Card>

    //alternative approach
    <div className="blogPostContainer">
      
        <Card>
          <div className="blogPostHeader">
            <span className="blogCategory">Featured</span>
            <h1 className="postTitle">{post.title}</h1>
            <span className="author">`By: {post.author}, {post.date}`</span>
          </div>

          <div className="postImageContainer">
            <img src={sideshot} alt="image of snare drum and sticks" />
          </div>

          <div className="postContent">
            <h3>{post.title}</h3>
            <p>{post.text} 
            </p>
          </div>
        </Card>
    </div>

  )
}

export default BlogPost

