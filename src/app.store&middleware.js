import { applyMiddleware, createStore, compose } from 'redux'
import { combineReducers } from 'redux'
import rootSaga from './app.saga' // does saga has reducer?
import { appReducer } from './app.reducer'
import createSagaMiddleware from 'redux-saga'
import {middleWare} from './app.middleWare/app.middleware'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware(); // define saga

const  createReducer= combineReducers({
	reducer: appReducer,
})

const rootReducer = (store, action) => {
	return createReducer(store, action)
}

export const store = (process.env.NODE_ENV === 'development') ? 
createStore(
	rootReducer, // new root reducer with router state, 
	compose(
		applyMiddleware(
			middleWare
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
			sagaMiddleware, middleWare
		)
	), // mount saga to store before run
)

// sagaMiddleware.run(rootSaga) // initiate saga

