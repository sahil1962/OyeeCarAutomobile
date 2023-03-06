import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react'
import { Modal } from "react-bootstrap"
import { addToCart } from "../actions/cartActions";

import { useNavigate } from "react-router-dom";

export default function Car(props) {
    const car = props.car;
    const colors = props.colors;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart() {
        dispatch(addToCart(car, colors))
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/cart";
        navigate(path);
        addtocart();
    }

    return (
        <div className="shadow-lg p-0 mb-5 bg-white rounded" key={car._id}>
            
            <div class='flex-container' onClick={handleShow}>
                <div class='w-100 m-1'>
                    <img src={car.image} class="img-fluid" style={{ height: '200px', width: '300px' }} />
                </div>
            </div>

            <div class='flex-container'>
                <div class='w-100 m-1'>
                    <p>{car.name}</p>
                </div>
            </div>

            <div class='flex-container'>
                <div class='w-100'>
                    <p>Model - {car.year}</p>
                </div>
                <div class='w-100'>
                    <p>Transmission : {car.Transmission}</p>
                </div>
            </div>

            <div class='flex-container'>

                <div class='w-100'>
                    <p>Color : </p>
                </div>

                <div class='w-100'>
                    <select >
                        {colors.map(color => {
                            return <option value={color}> {color} </option>
                        })}
                    </select>
                </div>
            </div>

            <div class='flex-container'>

                <div class='w-100'>
                    <p> PKR -  {car.prices}</p>
                </div>
                <div class='w-100'>
                    <p>mileage - {car.Mileage} km</p>
                </div>
            </div>

            <div class='flex-container'>
                <div class="w-100 m-1">
                    <button class="btn btnBuyNowHover" onClick={routeChange}><span> Add to cart </span></button>
                </div>
            </div>
            
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{car.year} - {car.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class='flex-container'>
                        <div class='w-100'>
                            <img src={car.image} class="img-fluid" style={{ height: '300px', width: '500px' }} />
                        </div>
                    </div>

                    <div class='flex-container'>
                        <div class='w-100'>
                            <p>Model : {car.year}</p>
                            <p>Name : {car.name}</p>
                            <p>Transmission : {car.Transmission}</p>
                        </div>

                        <div class='w-100'>
                            <p>Body Style : {car.BodyStyle}</p>
                            <p>Mileage : {car.Mileage}</p>
                            <p>Engine Displacement (cc): {car.EngineDisplacement}</p>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button class="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}