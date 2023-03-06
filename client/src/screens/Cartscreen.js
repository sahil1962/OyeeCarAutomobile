import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import Checkout from '../components/Checkout'

export default function Cartscreen() {

  const cartstate = useSelector(state => state.cartReducer)
  const cartItems = cartstate.cartItems

  var subTotal = cartItems.reduce((x, item) => x + item.price, 0)

  function cartSubTotal() {
    if (subTotal === 0){
      return "Empty Cart"
    }

    else{
      return subTotal
    }

  }
  subTotal = cartSubTotal()


  return (
    <div>
      <div className='shadow-lg p-5 mb-5 bg-white rounded'>
        {cartItems.map(item => {
          return <div>

            <div class='flex-container'>
              <div class='w-100'>
                <h1>{item.year} - {item.name} - {item.color}</h1>
                <img src={item.image} class="img-fluid" style={{ height: '500px', width: '800px' }} />
              </div>
            </div>

            <h2>Overwiew</h2>

            <div class='flex-container'>
              <div class='w-100 m-1'>
                <h5 class="left">Model - {item.year}</h5>
              </div>
              <div class='w-100 m-1'>
                <h5 class="right">Transmission : {item.transmission}</h5>
              </div>
            </div>

            <div class='flex-container'>
              <div class='w-100 m-1'>
                <h5 class="left">Price - {item.price} pkr</h5>
              </div>
              <div class='w-100 m-1'>
                <h5 class="right">Engine Displacement : {item.EngineDisplacement} cc</h5>
              </div>
            </div>

            <div class='flex-container'>
              <div class='w-100 m-1'>
                <h5 class="left">Body Style - {item.BodyStyle}</h5>
              </div>
              <div class='w-100 m-1'>
                <h5 class="right">Mileage : {item.Mileage} km</h5>
              </div>
            </div>
          </div>
        })}
      </div>
      
      <div className='col justify-content-center shadow-lg p-5 mb-5 bg-white rounded'>
                <h5 style={{ fontSize: "45px" }}>subTotal : {subTotal}  pkr/-</h5>
        <Checkout cartSubTotal = {subTotal}/>
      </div>
    </div>
  )
}
