import { RECEIVE_BENCH_EXERCISES } from '../constants';
// import axios from 'axios';

export const receiveBenchExercises = benchExercises => ({
    type: RECEIVE_BENCH_EXERCISES,
    benchExercises
});