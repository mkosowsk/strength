import { combineReducers } from 'redux';
import exercisesReducer from './exercises-reducer';

const rootReducer = combineReducers({
  exercises: exercisesReducer
})

export default rootReducer
