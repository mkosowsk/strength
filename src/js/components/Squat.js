import React from "react";

import TableData from "./TableData"

export default class Squat extends React.Component {
  render() {
    return (
      <div>
        <h2>Squat Day</h2>
        <table>
			<tbody style={{textAlign: 'center'}}>
				<tr>
					<th style={{width: '160px', textAlign: 'center', border: '1px solid black'}}>Exercise</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Sets</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Reps</th>
					<th style={{width: '80px', textAlign: 'center', border: '1px solid black'}}>Weight</th>
				</tr>
				<tr>
					<TableData content={"Squats"} />
					<TableData content={"4"} />
					<TableData content={"10"} />
					<TableData content={"275 lbs."} />
				</tr>
				<tr>
					<TableData content={"Standing Press"} />
					<TableData content={"3"} />
					<TableData content={"3"} />
					<TableData content={"155 lbs."} />
				</tr>
				<tr>
					<TableData content={"Reverse Machine Fly"} />
					<TableData content={"4"} />
					<TableData content={"12"} />
					<TableData content={"160 lbs."} />
				</tr>
				<tr>
					<TableData content={"Calf Raises"} />
					<TableData content={"4"} />
					<TableData content={"20"} />
					<TableData content={"225 lbs."} />
				</tr>
				<tr>
					<TableData content={"Hanging Leg Raises"} />
					<TableData content={"4"} />
					<TableData content={"6"} />
				</tr>
			</tbody>
		</table>
      </div>
    );
  }
}