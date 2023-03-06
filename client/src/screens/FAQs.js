import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import Checkout from '../components/Checkout'

export default function Faqsscreen() {



  return (
    <div>

      <div className='col-md-16 mt-8 shadow-lg p-4 mb-5 bg-white rounded'>
        <h1>
          Frequently Asked Questions
        </h1>
      </div>

      
      <div className='col-md-16 mt-8 shadow-lg p-4 mb-5 bg-white rounded'>
        <question>
          Q. What should I look for when I test drive a car?
        </question>
        <br></br>
        <answer>
          A.  When you test drive a new or pre-owned Toyota vehicle at Schaumburg Toyota, we recommend that you keep a checklist of items like comfort, utility, functionality, ease of use with tech features, and the general driving experience. This will help you get a better sense of whether the model matches your driving style and buying criteria.
        </answer>
        
      </div>


      <div className='col-md-16 mt-8 shadow-lg p-4 mb-5 bg-white rounded'>
        <question>
          Q. Do I get the same warranty on your vehicles as I would get if I bought from a franchised dealer?
        </question>
        <br></br>
        <answer>
          A. All our vehicles are supplied with the same manufacturer’s warranty and road side assistance package. The minimum is 3 years but some of the manufacturers have extended the term. For example Toyota is 5 years, Kia 7 years
        </answer>
        
      </div>

      <div className='col-md-16 mt-8 shadow-lg p-4 mb-5 bg-white rounded'>
        <question>
          Q. How long will it take to get a new car?
        </question>
        <br></br>
        <answer>
          A. Prior to taking your order we will check the availability with the manufacturer. If they can locate a vehicle in dealer stock it could be 7 days but a factory order to your specification will be considerably longer.
        </answer>
        
      </div>


      <div className='col-md-16 mt-8 shadow-lg p-4 mb-5 bg-white rounded'>
        <question>
          Q. How and when do I pay for the vehicle?
        </question>
        <br></br>
        <answer>
          A. We understand it is a big decision to buy a new car on the internet so Uk Car discount offer the safest unique payment method for you the customer. You only pay the balance after the car has been delivered to your home address and you are totally happy. Most customers do a same day bank or internet transfer for the balance. We do not accept cheques or card payment for the final balance.
        </answer>
        
      </div>


    </div>
  )
}
