import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <p><h2>WELCOME TO INVENTORY SYSTEM</h2><break/>
      Here you can  maintain your products with their name,id,price and quantity.
      </p>
      <h3>please login before trying to use</h3>
      <Link to='/login'>LOGIN</Link>
    </div>
  )
}

export default Home
