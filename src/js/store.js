import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
// import createLogger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'

// const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware))

const store = createStore(rootReducer);

export default store;

