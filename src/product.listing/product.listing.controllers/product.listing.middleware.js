import { API_GET_DATA_CATEGORIES } from "./../../action.creators";
import { trottle } from "./../../app.utils";
const checkRoutIfNoChange = trottle();
export const productListingMiddleWare = store => next => action => {
    next(action);
    
	if (action.type === "$$mw-ROUTE_ON_CHANGE") {
		if (checkRoutIfNoChange(action.payload.location.pathname)) return;
        // store.dispatch({ type: "helo worl", payload: null });
        store.dispatch({ type: "$$api-GET_DATA_ASYNC", payload: {
            url: 'https://backendapi.turing.com/categories/inDepartment/1',
            typeOnSuccess: 'helo'
        } });
        store.dispatch({ type: "$$api-GET_DATA_ASYNC", payload: {
            url: 'https://backendapi.turing.com/categories',
            typeOnSuccess: 'helo'
        } });
        store.dispatch({ type: "$$api-IS_LOGIN_ASYNC", payload: {
            // url: 'https://backendapi.turing.com/categories',
            typeOnSuccess: 'helo'
        } });
        // check the store to see if the data is there if it there, no need to fetch from server?

	}

	if (action.type === API_GET_DATA_CATEGORIES) {
	}
};
