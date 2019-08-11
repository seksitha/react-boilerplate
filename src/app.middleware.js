import {API_GET_DATA_CATEGORIES} from './action.creators'

export const middleWare = store => next => action => {
    next(action);
    //TODO: check if the user login and has the profile?
    if (action.type === "$$mw-ROUTE_ON_CHANGE") {
        console.log(action.payload)
    }
    

   
}