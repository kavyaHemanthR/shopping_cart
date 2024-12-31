import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './redux/pages/home/Home'
import Cart from './redux/pages/cart/Cart'
import Navbar from './redux/components/navbar/Navbar'


const ECommerce = () => {
  const style = {
    width : '80%',
    margin : '0 auto'
  }
  return (
    <div style={style}>
      <Navbar />
      <hr style={{backgroundColor: 'teal'}}/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
    </div>
  )
}

export default ECommerce
