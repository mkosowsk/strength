import React from 'react';

const LineChart = require("react-chartjs").Line;

const lineChartData = {
    labels: ['9/3', '9/10', '9/17', '9/24', 
    		'10/1', '10/8', '10/15', '10/22', '10/29',
    		'11/5', '11/12', '11/19', '11/26',
   			'12/3', '12/10', '12/17', '12/14'],
    datasets: [{
        label: "Back Extension",
        strokeColor: 'green',
        fillColor: "rgba(0,0,0,0)",
        data: 	[25, 25, 25, 25, 
        		25, 25, 25, 25, 25,
        		25, 25, 25, 25,
        		25, 25, 25, 25]
    }]
}

const chartOptions = {
	bezierCurve : false
};

export default class BackExtensionChart extends React.Component {
  render() {
    return (
    	<div>
    		<h2>Back Extension Over Time</h2>
   			<LineChart data={lineChartData} options={chartOptions} width="600" height="250"/>
   		</div>
   	)
  }
}