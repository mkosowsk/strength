import React from "react";

export default class TableExerciseName extends React.Component {
  render() {
  const cellStyle = {color: 'blue', border: '1px solid black', textDecoration: 'underline'};
  	return ( 
  	<td style={cellStyle}>{this.props.content}</td>
    );
  }
}