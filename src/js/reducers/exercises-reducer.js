import {
  RECEIVE_EXERCISES
} from '../constants';


const initialExercisesState = {
  list: []
};

export default function (state = initialExercisesState, action) {
  // console.log(action);
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_EXERCISES:
      newState.list = action.exercises;
      break;

    // case RECEIVE_PRODUCT:
    //   newState.selected = action.product;
    //   break;  

    default:
      return state;
  }

  return newState;
}