import React from "react";
import {browserHistory} from "react-router";

export default class Squat extends React.Component {
  render() {
    return (
      <div>
      	<h1 onClick={ () => browserHistory.push('/example_chart')} >Strength</h1>
      </div>
     );
	}
}