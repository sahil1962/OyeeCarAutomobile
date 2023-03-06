import axios from "axios"
export const placeOrder = (token, subtotal) => async(dispatch, getState) => {

    dispatch({ type: "PLACE_HOLDER_REQUEST" })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems

    try {
        const reponse = await axios.post("http://localhost:8000/api/orders/placeorder", { token, subtotal, currentUser, cartItems })
        dispatch({ type: "PLACE_HOLDER_SUCCESS" })

        console.log(reponse)
    } catch (error) {
        dispatch({ type: "PLACE_HOLDER_FAILED" })

        console.log(error)

    }





}