import React from "react";
import ReactDOM from "react-dom";
import { browserHistory, IndexRoute, Router, Route } from 'react-router';

import Layout from "./components/Layout";
import Main from "./components/Main";
import Squat from "./components/Squat";
import Bench from "./components/Bench";
import Deadlift from "./components/Deadlift";
import Row from "./components/Row";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main}></IndexRoute>
			<Route path="/squat" component={Squat}></Route>
			<Route path="/bench" component={Bench}></Route>
			<Route path="/deadlift" component={Deadlift}></Route>
			<Route path="/row" component={Row}></Route>
		</Route>
	</Router>,
app);