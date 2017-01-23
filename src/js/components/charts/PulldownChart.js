import React from 'react';

const LineChart = require("react-chartjs").Line;

const lineChartData = {
    labels: ['9/3', '9/10', '9/17', '9/24', 
    		'10/1', '10/8', '10/15', '10/22', '10/29',
    		'11/5', '11/12', '11/19', '11/26',
   			'12/3', '12/10', '12/17', '12/14'],
    datasets: [{
        label: "Pulldown",
        strokeColor: 'orange',
        fillColor: "rgba(0,0,0,0)",
        data: 	[145, 145, 145, 145, 
        		150, 150, 150, 150, 150,
        		155, 155, 155, 155,
        		160, 160, 160, 160]
    }]
}

const chartOptions = {
	bezierCurve : false
};

export default class PulldownChart extends React.Component {
  render() {
    return (
    	<div>
    		<h2>Pulldown Over Time</h2>
   			<LineChart data={lineChartData} options={chartOptions} width="600" height="250"/>
   		</div>
   	)
  }
}