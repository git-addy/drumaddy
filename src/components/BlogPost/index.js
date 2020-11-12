import React from 'react'
import Card from '../UI/Card'
import './style.css'
import sideshot from '../../sideshot.jpg'

const BlogPost = (props) => {
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
            <h1 className="postTitle">This is the title of the blog</h1>
            <span className="author">author:git-addy, date: Nov 12,2020</span>
          </div>

          <div className="postImageContainer">
            <img src={sideshot} alt="image of snare drum and sticks" />
          </div>
        </Card>
      
    </div>


  )
}

export default BlogPost

