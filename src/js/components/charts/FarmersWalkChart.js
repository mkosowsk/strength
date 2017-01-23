import React from 'react';

const LineChart = require("react-chartjs").Line;

const lineChartData = {
    labels: ['9/3', '9/10', '9/17', '9/24', 
    		'10/1', '10/8', '10/15', '10/22', '10/29',
    		'11/5', '11/12', '11/19', '11/26',
   			'12/3', '12/10', '12/17', '12/14'],
    datasets: [{
        label: "Farmer's Walk",
        strokeColor: 'blue',
        fillColor: "rgba(0,0,0,0)",
        data: 	[85, 85, 85, 85, 
        		85, 85, 85, 85, 85,
        		95, 105, 110, 115,
        		120, 125, 125, 125]
    }]
}

const chartOptions = {
	bezierCurve : false
};

export default class FarmersWalkChart extends React.Component {
  render() {
    return (
    	<div>
    		<h2>Farmer's Walk Over Time</h2>
   			<LineChart data={lineChartData} options={chartOptions} width="600" height="250"/>
   		</div>
   	)
  }
}