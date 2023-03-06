import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from 'react'
import Checkout from '../components/Checkout'
import Car from "../components/Car"
import { getAllCars } from '../actions/carActions'

export default function Carfinderscreen() {
    const carsstate = useSelector(state => state.getAllCarsReducer)
    const gifpath = "https://i.pinimg.com/originals/9e/9c/68/9e9c68435731c23c00573a1544d539b3.gif"
    const gifpathSomethingWrong = "https://images.squarespace-cdn.com/content/v1/5c49d9402487fdfd161f08e2/1583835592461-9TB7Y9OFRF0LKTZOUZ5F/HTML-404-Crying-Baby-Page.gif?"


    const [searchTerm, setSearchTerm] = useState("")
    const { cars, error, loading } = carsstate

    const dispatch = useDispatch()
    useEffect(() => { //will render the functino once
        dispatch(getAllCars())
    }, [])


    return (
        <div>
            <div className='col-md-16 mt-8 shadow-lg p-1 mb-5 bg-white rounded'>
                <h1>
                    Car Finder
                </h1>
                <div className='row justify-content-center '>
                    <div className='m-2'>
                        <input required type="text"
                            placeholder='Search...'
                            className='form-control'
                            onChange={event => {
                                setSearchTerm(event.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">

                {loading ? (
                    <div>
                        <img src={gifpath} width="600px" height="500px" alt="loading..." />
                        <h1>Loading...</h1>
                    </div>
                ) : error ? (
                    <div>
                        <img src={gifpathSomethingWrong} width="600px" height="500px" alt="loading..." />
                        <h1>Something went wrong 🥺</h1>
                    </div>
                ) : (
                    cars.filter((car) => {
                        if (searchTerm === "") {
                            return car
                        } else if (car.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                            || car.Transmission.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                            || car.BodyStyle.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        ) {
                            return car

                        }
                    }).map(car => {
                        return <div class="col-md-3 m3" key={car._id}>
                            <div>
                                <Car car={car} colors={(car['colors'] !== undefined) ? car.colors : []} />
                            </div>
                        </div>
                    })
                )}
            </div>





        </div>
    )
}
