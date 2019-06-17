import { applyMiddleware, createStore, compose } from 'redux'
import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
// import { createReducer } from 'redux-orm'

import rootSaga from './app.saga' // does saga has reducer?
import { appReducer } from './app.reducer'
import createSagaMiddleware from 'redux-saga'
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware(); // define saga
// import { appMiddleWares } from './middleWares/index'
// import ormModel from './models'

// const loadData = (orm) => {
// 	const state = orm.getEmptyState();
// 	// const session = orm.mutableSession(state);
// 	return {
// 		ormModel: state,
// 	}
// }

const  createReducer= combineReducers({
	//form: formReducer,
	//ormModel: createReducer(ormModel), //reducer() // store.ajax { user, }
	reducer: appReducer,
})

const rootReducer = (store, action) => {
	if (action.type === '$$mw-LOGOUT') { // this is not needed as used middleware offline 
		store.ormModel = {};
		// store.asyncData = {};
	}
	return createReducer(store, action)
}
export const store = (process.env.NODE_ENV === 'development') ? 
createStore(
	rootReducer, // new root reducer with router state, 
	//loadData(ormModel),
	compose(
		applyMiddleware(
			sagaMiddleware, //...appMiddleWares
		), 
		reduxDevTools
	), // mount saga to store before run
)
:
createStore(
	rootReducer, // new root reducer with router state, 
	//loadData(ormModel),
	compose(
		applyMiddleware(
			sagaMiddleware,//...appMiddleWares
		)
	), // mount saga to store before run
)

sagaMiddleware.run(rootSaga) // initiate saga

