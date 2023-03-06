import React from "react"
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../actions/userAction"

export default function NavBar() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Oyee Car</a>
                <button className="navbar-toggle" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span>&#9778;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="/shopcar">Shop Car</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sell or Trade</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="carfinder">Car Finder</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/aboutus">About us</a>
                                <a className="dropdown-item" href="/faqs">FAQ</a>
                                <a className="dropdown-item" href="/blogs">Blog</a>
                            </div>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {currentUser ? (
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {currentUser.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Orders</a>
                                <a className="dropdown-item" href="#" onClick={()=>dispatch(logoutUser())}><li>Logout</li></a>
                            </div>
                            </li>
                        )
                            :
                            (<li className="nav-item">
                                <a className="nav-link" href="/login">Log in</a>
                            </li>
                            )
                        }


                        <li className="nav-item ">
                            <a className="nav-link" href="/cart" >
                                Cart[{cartstate.cartItems.length}]
                            </a>


                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}