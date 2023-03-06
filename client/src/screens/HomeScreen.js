import logo from 'D:/Semester_6/SE/CarSite/client/src/logo.svg';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Car from "../components/Car"
// import cars from "../cardata"
import axios from 'axios'
import { getAllCars } from '../actions/carActions'
import Loading from '../components/Loading';
export default function HomeScreen() {

    // const [loadedCars, setLoadedCars] = useState([])
    // const getAllCars = async () => {
    //     await axios.get('http://localhost:8000/api/cars/getallcars').then((response) => {
    //         console.log(response);
    //         setLoadedCars(response.data)
    //     }, (error) => {
    //         console.log("My Error: ", error);
    //     });
    // }
    const dispatch = useDispatch()
    const carsstate = useSelector(state => state.getAllCarsReducer)
    const gifpath = "https://i.pinimg.com/originals/9e/9c/68/9e9c68435731c23c00573a1544d539b3.gif"
    const gifpathSomethingWrong = "https://images.squarespace-cdn.com/content/v1/5c49d9402487fdfd161f08e2/1583835592461-9TB7Y9OFRF0LKTZOUZ5F/HTML-404-Crying-Baby-Page.gif?"
    const { cars, error, loading } = carsstate

    useEffect(() => { //will render the functino once
        dispatch(getAllCars())
        // getAllCars();
    }, [])

    return (
        <div>
            <div class="row justify-content-center">

                {loading ? (
                    <div>
                        <img src={gifpath} width="600px" height="500px" alt="loading..." />
                        <h1>Loading...</h1>
                        {/* <Loading/> */}
                    </div>
                ) : error ? (
                    <div>
                        <img src={gifpathSomethingWrong} width="600px" height="500px" alt="loading..." />
                        <h1>Something went wrong 🥺</h1>
                    </div>
                    // <h1>Something went wrong 🥺</h1>
                ) : (
                    cars.map(car => {
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
