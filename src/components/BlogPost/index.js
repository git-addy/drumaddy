import React, { useState, useEffect } from 'react'
import Card from '../UI/Card'
import './style.css'

import blogPost from '../../data/posts.json' 

const BlogPost = (props) => {

  const [post,setPost] = useState({
      id:"",
      category:"",
      title:"",
      date:"",
      author:"",
      image:"",
      text:""
  });

  const [postId, setPostId] = useState([]);
  
  //this method gets called after every render
  //why: we need an updated data picture for some functions to be meaningful and this takes care of running functions with the updated/asynchronous callback results
  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId)
    setPost(post);
    setPostId(postId);
}, [post, props.match.params.postId]);

  // if (post.image == "") return null;

  return (
    //we will check this out later
    // <Card style={{ width:"70%"}}>
    //   My first blog post
    // </Card>

    //alternative approach
    <div className="blogPostContainer">
      
        <Card>
          <div className="blogPostHeader">
            <span className="blogCategory">{post.category}</span>
            <h1 className="postTitle">{post.title}</h1>
            <span className="author">{post.date}, by: {post.author}</span>
          </div>
 
          <div className="postImageContainer">
            <div key={post}>
              {
                blogPost.data.map(post => post.id == postId ? <img src={post.image} alt="post"/> : null)
              }
            </div>
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
