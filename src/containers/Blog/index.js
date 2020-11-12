import React from 'react'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'
import './style.css'

const Blog = (props) => {
  return (
    <section className="container">
      <BlogPost />
      <Sidebar />

    </section>
  )
}

export default Blog
