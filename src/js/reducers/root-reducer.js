import { combineReducers } from 'redux';
import squatReducer from './squat-reducer';
import benchReducer from './bench-reducer';


const rootReducer = combineReducers({
  squatExercises: squatReducer,
  benchExercises: benchReducer
})

export default rootReducer
