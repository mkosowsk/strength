import React from "react";

import TableData from "./TableData"

export default class Row extends React.Component {
  render() {
    return (
      <div>
        <h2>Row Day</h2>
        <table>
			<tbody style={{textAlign: 'center'}}>
				<tr>
					<th style={{width: '160px', textAlign: 'center', border: '1px solid black'}}>Exercise</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Sets</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Reps</th>
					<th style={{width: '80px', textAlign: 'center', border: '1px solid black'}}>Weight</th>
				</tr>
				<tr>
					<TableData content={"Bent Over Row"} />
					<TableData content={"5"} />
					<TableData content={"10"} />
					<TableData content={"250 lbs."} />
				</tr>
				<tr>
					<TableData content={"Pull-up"} />
					<TableData content={"3"} />
					<TableData content={"10"} />
				</tr>
				<tr>
					<TableData content={"Curls"} />
					<TableData content={"2"} />
					<TableData content={"10"} />
					<TableData content={"85 lbs."} />
				</tr>
				<tr>
					<TableData content={"Inverted Row"} />
					<TableData content={"5"} />
					<TableData content={"10"} />
				</tr>
				<tr>
					<TableData content={"Calf Raises"} />
					<TableData content={"4"} />
					<TableData content={"20"} />
					<TableData content={"225 lbs."} />
				</tr>
			</tbody>
		</table>
      </div>
    );
  }
}