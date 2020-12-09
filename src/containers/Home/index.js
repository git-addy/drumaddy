import React from 'react'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/UI/Card'
import './style.css'


const Home = (props) => {
  return (
    <div>
      <Sidebar />
      <Card>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, inventore dolor! Atque ad corrupti adipisci saepe quae nulla. Mollitia earum excepturi eos at et alias tempora delectus quisquam iste molestiae.
      </Card>
    </div>
  )
}


export default Home