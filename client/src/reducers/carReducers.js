//work as suppling data from db to front-end
export const getAllCarsReducer = (state = { cars: [] }, action) => {
    switch (action.type) {
        case "GET_CARS_REQUEST":
            return {
                loading: true,
                ...state
            }
        case "GET_CARS_SUCCESS":
            return {
                loading: false,
                cars: action.payload
            }
        case "GET_CARS_FAILED":
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}