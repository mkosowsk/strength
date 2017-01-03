import React from "react";

import TableData from "./TableData"

export default class Deadlift extends React.Component {
  render() {
    return (
      <div>
        <h2>Deadlift Day</h2>
        <table>
			<tbody style={{textAlign: 'center'}}>
				<tr>
					<th style={{width: '160px', textAlign: 'center', border: '1px solid black'}}>Exercise</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Sets</th>
					<th style={{width: '40px', textAlign: 'center', border: '1px solid black'}}>Reps</th>
					<th style={{width: '80px', textAlign: 'center', border: '1px solid black'}}>Weight</th>
				</tr>
				<tr>
					<TableData content={"Deadlift"} />
					<TableData content={"4"} />
					<TableData content={"6"} />
					<TableData content={"405 lbs."} />
				</tr>
				<tr>
					<TableData content={"Pulldown"} />
					<TableData content={"5"} />
					<TableData content={"12"} />
					<TableData content={"160 lbs."} />
				</tr>
				<tr>
					<TableData content={"Back Extension"} />
					<TableData content={"4"} />
					<TableData content={"12"} />
					<TableData content={"25 lbs."} />
				</tr>
				<tr>
					<TableData content={"Farmer's Walk"} />
					<TableData content={"2"} />
					<TableData content={"1"} />
					<TableData content={"125 lbs."} />
				</tr>
			</tbody>
		</table>
      </div>
    );
  }
}