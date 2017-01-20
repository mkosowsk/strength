import React from "react";
import ReactDOM from "react-dom";
import {connect, Provider} from 'react-redux'
import {browserHistory, IndexRoute, Router, Route} from 'react-router';

import store from "./store";

import {receiveExercises} from './action-creators/exercises';

import Layout from "./components/Layout";
import Main from "./components/Main";

import ExercisesContainer from "./containers/ExercisesContainer";


const squatExercises = [
	["Squat"],
    ["Squats", "4", "10", "275 lbs." ],
    ["Standing Press", "3", "3", "155 lbs."],
    ["Reverse Machine Fly", "4", "12", "160 lbs."],
    ["Calf Raises", "4", "20", "225 lbs."],
    ["Hanging Leg Raisess", "4", "6"]
 ];

const benchExercises = [
	["Bench"],
	["Incline Bench Press", "3", "10", "215 lbs." ],
    ["Hammer Curls", "3", "10", "25 lbs."],
    ["Face Pulls", "5", "12", "95 lbs."],
    ["Incline Dumbbell Press", "5", "10", "50 lbs."],
	["Calf Raises", "4", "20", "225 lbs."],	
	["Dips", "3", "12"],
];

const deadliftExercises = [
	["Deadlifts"],
	["Deadlift", "4", "6", "405 lbs." ],
    ["Pulldown", "5", "12", "160 lbs."],
    ["Back Extension", "4", "12", "25 lbs."],
    ["Farmer's Walk", "2", "1", "125 lbs."],
]

const rowExercises = [
	["Row"],
	["Bent Over Row", "5", "10", "250 lbs." ],
    ["Pull-up", "3", "10"],
    ["Curls", "2", "10", "85 lbs."],
    ["Inverted Row", "5", "10"],
]

const onSquatExercisesEnter = () => {
	store.dispatch(receiveExercises(squatExercises));
}

const onBenchExercisesEnter = () => {
	store.dispatch(receiveExercises(benchExercises));
}

const onDeadliftExercisesEnter = () => {
	store.dispatch(receiveExercises(deadliftExercises));
}

const onRowExercisesEnter = () => {
	store.dispatch(receiveExercises(rowExercises));
}

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Main}></IndexRoute>
				<Route path={"/" + squatExercises[0]} component={ExercisesContainer} onEnter={onSquatExercisesEnter}></Route>
				<Route path={"/" + benchExercises[0]} component={ExercisesContainer} onEnter={onBenchExercisesEnter}></Route>
				<Route path={"/" + deadliftExercises[0]} component={ExercisesContainer} onEnter={onDeadliftExercisesEnter}></Route>
				<Route path={"/" + rowExercises[0]} component={ExercisesContainer} onEnter={onRowExercisesEnter}></Route>
			</Route>
		</Router>
	</Provider>, 
app);