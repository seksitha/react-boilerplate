const initState = {
   
}

export const productListingReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case '$$ui-TOGGLE_SPINNER':
            return state = { ...state, spinnerState: payload }; // set @spinner
        default:
            return state
    }
}
