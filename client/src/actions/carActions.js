// CURD operations for cars
import axios from "axios";

export const getAllCars=() =>async dispatch => {
    // async methods
    dispatch({type:"GET_CARS_REQUEST"})
    
    try {
        const response =await axios.get("http://localhost:8000/api/cars/getallcars")
        console.log(response);
        dispatch({type:"GET_CARS_SUCCESS", payload : response.data})

    } catch (error) {
        console.log(error)
        dispatch({type:"GET_CARS_FAILED", payload : error})
    }

    // await axios.get('http://localhost:8000/api/cars/getallcars').then((response) => {
    //     console.log("Reached")
    //     console.log(response);
    //   }, (error) => {
    //     console.log("My", error);
    //   });
}