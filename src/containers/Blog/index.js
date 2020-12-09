import React from 'react'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/UI/Card'
import './style.css'

const Blog = (props) => {

console.log(props);

  return (
    <div><section className="container">
    <BlogPost {...props} />
    <Sidebar />
    
    </section>
    
    <section>
    
    <Card style={{width: "90%", color: "red", boxSizing: "border-box", margin: "0, auto"}}>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet deserunt, laborum eos fuga, exercitationem maiores voluptas, tenetur dolorum voluptate consequatur a culpa sequi voluptatem quo quidem doloribus. Facilis, eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet deserunt, laborum eos fuga, exercitationem maiores voluptas, tenetur dolorum voluptate consequatur a culpa sequi voluptatem quo quidem doloribus. Facilis, eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet deserunt, laborum eos fuga, exercitationem maiores voluptas, tenetur dolorum voluptate consequatur a culpa sequi voluptatem quo quidem doloribus. Facilis, eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet deserunt, laborum eos fuga, exercitationem maiores voluptas, tenetur dolorum voluptate consequatur a culpa sequi voluptatem quo quidem doloribus. Facilis, eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet deserunt, laborum eos fuga, exercitationem maiores voluptas, tenetur dolorum voluptate consequatur a culpa sequi voluptatem quo quidem doloribus. Facilis, eligendi.
      </p>
    </Card> 
    </section></div>
  )
}

export default Blog
