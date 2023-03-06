import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import Checkout from '../components/Checkout'
import logo from './car.png';
export default function AboutUsscreen() {



    return (
        <div>
            
            <div class="mission">
                <div class="content">
                    <div class="main">
                        <hr></hr>
                        <br></br>
                        <h11>Our Mission</h11>
                        <br></br>

                        <p11>
                            Oyee Car is a Professional Automobile Platform. Here we will provide you only interesting content, which you will like
                            very much. We're dedicated to providing you the best of Automobile, with a focus on dependability and Rent and selling. We're working to turn our passion for Automobile into a booming online website. We hope you enjoy our Automobile as much as we enjoy offering them to you.
                            I will keep posting more important posts on my Website for all of you. Please give your support and love.
                            Thanks For Visiting Our Site

                        </p11>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>
                            Have a nice day !
                        </h4>
                        <hr></hr>
                    </div>
                    <div className="image">
                        <img src={logo} />
                        
                        {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/YQkfsMT/car.png" alt="car" border="0"></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
