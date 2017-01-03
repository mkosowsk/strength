import React from "react";

export default class TableData extends React.Component {
  render() {
  const cellStyle = {border: '1px solid black'};
  	return ( 
  	<td style={cellStyle}>{this.props.content}</td>
    );
  }
}