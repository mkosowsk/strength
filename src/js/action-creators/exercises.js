import { RECEIVE_EXERCISES } from '../constants';
// import axios from 'axios';

export const receiveExercises = exercises => ({
    type: RECEIVE_EXERCISES,
    exercises
});