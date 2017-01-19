import {
  RECEIVE_BENCH_EXERCISES
} from '../constants';


const initialBenchExercisesState = {
  list: []
};

export default function (state = initialBenchExercisesState, action) {
  // console.log(action);
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_BENCH_EXERCISES:
      newState.list = action.benchExercises;
      break;

    // case RECEIVE_PRODUCT:
    //   newState.selected = action.product;
    //   break;  

    default:
      return state;
  }

  return newState;
}