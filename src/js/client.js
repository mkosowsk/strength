import React from "react";
import ReactDOM from "react-dom";
import {connect, Provider} from 'react-redux'
import {browserHistory, IndexRoute, Router, Route} from 'react-router';

import store from "./store";

import Layout from "./components/Layout";
import Main from "./components/Main";

import {receiveExercises} from './action-creators/exercises';
import ExercisesContainer from "./containers/ExercisesContainer";

import SquatVideos from "./components/videos/SquatVideos";
import StandingPressVideos from "./components/videos/StandingPressVideos";
import ReverseMachineFlyVideos from "./components/videos/ReverseMachineFlyVideos";
import CalfRaisesVideos from "./components/videos/CalfRaisesVideos";
import HangingLegRaisesVideos from "./components/videos/HangingLegRaisesVideos";

import InclineBenchPressVideos from "./components/videos/InclineBenchPressVideos";
import HammerCurlsVideos from "./components/videos/HammerCurlsVideos";
import FacePullsVideos from "./components/videos/FacePullsVideos";
import InclineDumbbellPressVideos from "./components/videos/InclineDumbbellPressVideos";
import DipsVideos from "./components/videos/DipsVideos";

import DeadliftVideos from "./components/videos/DeadliftVideos";
import PulldownVideos from "./components/videos/PulldownVideos";
import BackExtensionVideos from "./components/videos/BackExtensionVideos";
import FarmersWalkVideos from "./components/videos/FarmersWalkVideos";

import BentOverRowVideos from "./components/videos/BentOverRowVideos";
import PullUpVideos from "./components/videos/PullUpVideos";
import CurlsVideos from "./components/videos/CurlsVideos";
import InvertedRowVideos from "./components/videos/InvertedRowVideos";

const squatExercises = [
	["Squat"],
    ["Squat", "4", "10", "275 lbs." ],
    ["Standing Press", "3", "3", "155 lbs."],
    ["Reverse Machine Fly", "4", "12", "160 lbs."],
    ["Calf Raises", "4", "20", "225 lbs."],
    ["Hanging Leg Raises", "4", "6"]
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
	["Deadlift"],
	["Deadlift", "4", "6", "405 lbs." ],
    ["Pulldown", "5", "12", "160 lbs."],
    ["Back Extension", "4", "12", "25 lbs."],
    ["Farmer's Walk", "2", "1", "125 lbs."],
];

const rowExercises = [
	["Row"],
	["Bent Over Row", "5", "10", "250 lbs." ],
    ["Pull-up", "3", "10"],
    ["Curls", "2", "10", "85 lbs."],
    ["Inverted Row", "5", "10"],
];

const onSquatExercisesEnter = () => {
	store.dispatch(receiveExercises(squatExercises));
};

const onBenchExercisesEnter = () => {
	store.dispatch(receiveExercises(benchExercises));
};

const onDeadliftExercisesEnter = () => {
	store.dispatch(receiveExercises(deadliftExercises));
};

const onRowExercisesEnter = () => {
	store.dispatch(receiveExercises(rowExercises));
};

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
				
				<Route path="/squat_videos" component={SquatVideos}></Route>
				<Route path="/standing_press_videos" component={StandingPressVideos}></Route>
				<Route path="/reverse_machine_fly_videos" component={ReverseMachineFlyVideos}></Route>
				<Route path="/calf_raises_videos" component={CalfRaisesVideos}></Route>
				<Route path="/hanging_leg_raises_videos" component={HangingLegRaisesVideos}></Route>

				<Route path="/incline_bench_press_videos" component={InclineBenchPressVideos}></Route>
				<Route path="/hammer_curls_videos" component={HammerCurlsVideos}></Route>
				<Route path="/face_pulls_videos" component={FacePullsVideos}></Route>
				<Route path="/incline_dumbbell_press_videos" component={InclineDumbbellPressVideos}></Route>
				<Route path="/dips_videos" component={DipsVideos}></Route>

				<Route path="/deadlift_videos" component={DeadliftVideos}></Route>
				<Route path="/pulldown_videos" component={PulldownVideos}></Route>
				<Route path="/back_extension_videos" component={BackExtensionVideos}></Route>
				<Route path="/farmer's_walk_videos" component={FarmersWalkVideos}></Route>

				<Route path="/bent_over_row_videos" component={BentOverRowVideos}></Route>
				<Route path="/pull-up_videos" component={PullUpVideos}></Route>
				<Route path="/curls_videos" component={CurlsVideos}></Route>
				<Route path="/inverted_row_videos" component={InvertedRowVideos}></Route>
			</Route>
		</Router>
	</Provider>, 
app);