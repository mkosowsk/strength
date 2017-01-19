import React from "react";
import ReactDOM from "react-dom";
import {connect, Provider} from 'react-redux'
import {browserHistory, IndexRoute, Router, Route} from 'react-router';

import store from "./store";

import {receiveSquatExercises} from './action-creators/squat'
import {receiveBenchExercises} from './action-creators/bench'

import Layout from "./components/Layout";
import Main from "./components/Main";

import SquatContainer from "./containers/SquatContainer";
import BenchContainer from "./containers/BenchContainer";

import Deadlift from "./components/Deadlift";
import Row from "./components/Row";

const squatExercises = [
    ["Squats", "4", "10", "275 lbs." ],
    ["Standing Press", "3", "3", "155 lbs."],
    ["Reverse Machine Fly", "4", "12", "160 lbs."],
    ["Calf Raises", "4", "20", "225 lbs."],
    ["Hanging Leg Raisess", "4", "6"]
 ]

const benchExercises = [
	["Incline Bench Press", "3", "10", "215 lbs." ],
    ["Hammer Curls", "3", "10", "25 lbs."],
    ["Face Pulls", "5", "12", "95 lbs."],
    ["Incline Dumbbell Press", "5", "10", "50 lbs."],
	["Calf Raises", "4", "20", "225 lbs."],	
	["Dips", "3", "12"],
]

const onSquatEnter = () => {
	store.dispatch(receiveSquatExercises(squatExercises));
}

const onBenchEnter = () => {
	store.dispatch(receiveBenchExercises(benchExercises));
}

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Main}></IndexRoute>
				<Route path="/squat" component={SquatContainer} onEnter={onSquatEnter}></Route>
				<Route path="/bench" component={BenchContainer} onEnter={onBenchEnter}></Route>
				<Route path="/deadlift" component={Deadlift}></Route>
				<Route path="/row" component={Row}></Route>
			</Route>
		</Router>
	</Provider>, 
app);