import React from 'react'
import { useDispatch } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { placeOrder } from '../actions/orderActions';
export default function Checkout({ cartSubTotal }) {

    function tokenHandler(token) {
        console.log(token);
        dispatchEvent(placeOrder(token, cartSubTotal))
    }

    return (
        <div>
            <StripeCheckout
                amount={cartSubTotal * 100}
                shippingAddress
                zipCode
                token={tokenHandler}
                stripeKey="pk_test_51KzIqaCwVmjtnYJuQISJr5PIjk2meb8V55SUMwdxdRF6v5NxxmaoSLzG1E7yazU3nzvqju455j0NcgWJSF7paee500V2momStq"
                currency='PKR'
            >

                <button className='button' style={{ fontSize: "30px" }}> <span>Pay Online</span></button>
            </StripeCheckout>
        </div>
    )
}
