import { RECEIVE_SQUAT_EXERCISES } from '../constants';
// import axios from 'axios';

export const receiveSquatExercises = squatExercises => ({
    type: RECEIVE_SQUAT_EXERCISES,
    squatExercises
});