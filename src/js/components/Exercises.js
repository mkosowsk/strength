import React from "react";
import {Link} from 'react-router'

import TableData from "./TableData"

export default function(props) {
	const titleAndExercises = props.exercises;
	const title = titleAndExercises[0];
	const exercises = titleAndExercises.slice(1);

	// const navigate = function() {
	// 	console.log('hello');
 //    	const { router } = this.context
 //    	router.transitionTo('/some/new/location')
 //  	}

  	const handleClick = function() {
  		console.log('hello');
   		router.transitionTo('index');
  	}

    return (
      <div>
        <h2>{title} Day</h2>
        <table>
			<tbody style={{textAlign: 'center'}}>
				<tr key="Title Row">
					<th style={{width: '160px', textAlign: 'center', border: '1px solid black'}}>Exercise</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Sets</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Reps</th>
					<th style={{width: '80px', textAlign: 'center', border: '1px solid black'}}>Weight</th>
				</tr>
				{
					exercises && exercises.map(exercise => (
						<tr key={exercise}>
							<TableData key={exercise[0] + " Name"} content={exercise[0]} onClick={handleClick}/>
							<TableData key={exercise[0] + " Sets"} content={exercise[1]} />
							<TableData key={exercise[0] + " Reps"} content={exercise[2]} />
							<TableData key={exercise[0] + " Weight"} content={exercise[3]} />
						</tr>
						)
					)
				}
			</tbody>
		</table>
      </div>
    );
}
							// <Link to="/squat">
							// </Link>