import {
  RECEIVE_SQUAT_EXERCISES
} from '../constants';


const initialSquatExercisesState = {
  list: []
};

export default function (state = initialSquatExercisesState, action) {
  // console.log(action);
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_SQUAT_EXERCISES:
      newState.list = action.squatExercises;
      break;

    // case RECEIVE_PRODUCT:
    //   newState.selected = action.product;
    //   break;  

    default:
      return state;
  }

  return newState;
}