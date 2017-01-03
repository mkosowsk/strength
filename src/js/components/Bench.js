import React from "react";

import TableData from "./TableData"

export default class Bench extends React.Component {
  render() {
    return (
      <div>
        <h2>Bench Day</h2>
        <table>
			<tbody style={{textAlign: 'center'}}>
				<tr>
					<th style={{width: '160px', textAlign: 'center', border: '1px solid black'}}>Exercise</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Sets</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Reps</th>
					<th style={{width: '80px', textAlign: 'center', border: '1px solid black'}}>Weight</th>
				</tr>
				<tr>
					<TableData content={"Incline Bench Press"} />
					<TableData content={"3"} />
					<TableData content={"10"} />
					<TableData content={"215 lbs."} />
				</tr>
				<tr>
					<TableData content={"Hammer Curls"} />
					<TableData content={"3"} />
					<TableData content={"10"} />
					<TableData content={"25 lbs."} />
				</tr>
				<tr>
					<TableData content={"Face Pulls"} />
					<TableData content={"5"} />
					<TableData content={"12"} />
					<TableData content={"95 lbs."} />
				</tr>
				<tr>
					<TableData content={"Cross Over Cables"} />
					<TableData content={"4"} />
					<TableData content={"16"} />
					<TableData content={"35 lbs."} />
				</tr>
				<tr>
					<TableData content={"Incline Dumbbell Press"} />
					<TableData content={"5"} />
					<TableData content={"10"} />
					<TableData content={"50 lbs."} />
				</tr>
				<tr>
					<TableData content={"Calf Raises"} />
					<TableData content={"4"} />
					<TableData content={"20"} />
					<TableData content={"225 lbs."} />
				</tr>
				<tr>
					<TableData content={"Dips"} />
					<TableData content={"3"} />
					<TableData content={"12"} />
				</tr>
			</tbody>
		</table>
      </div>
    );
  }
}