
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/Redux/Reducers/rootReducer'

const Store=createStore(rootReducer,applyMiddleware(thunk))

export default Store