export const addToCart = (car, color) => (dispatch, getState)=>{


    var cartItem = {
        _id : car._id,
        year : car.year,
        name : car.name,
        price : Number(car.prices),
        transmission : car.Transmission,
        EngineDisplacement : car.EngineDisplacement,
        color : car.color,
        BodyStyle : car.BodyStyle,
        Mileage : car.Mileage,
        image : car.image
    }

    dispatch({type:"ADD_TO_CART", payload : cartItem})

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

}