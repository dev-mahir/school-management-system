import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware =[thunk]

// create store 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware) ));


export default store;