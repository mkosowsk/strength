import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Main from "./components/Main";
import Squat from "./components/Squat";
import Bench from "./components/Bench";
import Deadlift from "./components/Deadlift";
import Row from "./components/Row";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main}></IndexRoute>
			<Route path="squat" name="squat" component={Squat}></Route>
			<Route path="bench" name="bench" component={Bench}></Route>
			<Route path="deadlift" name="deadlift" component={Deadlift}></Route>
			<Route path="row" name="row" component={Row}></Route>
		</Route>
	</Router>,
app);