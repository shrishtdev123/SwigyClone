import React from 'react'
import Header from './Header'
import FoodOptions from './FoodOptions'
import Grocery from './Grocery'
import DineoutOption from './DineoutOption'

const Home = () => {
  return (
    <div>
             <Header/>
             <FoodOptions/>
             <Grocery/>
             <DineoutOption/>
    </div>
  )
}

export default Home