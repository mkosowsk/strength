import React from 'react';

const LineChart = require("react-chartjs").Line;

const chartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  };

const chartOptions = {
  title: {
    display: true,
    text: 'Custom Chart Title'
  }
};

export default class ExampleChart extends React.Component {
  render() {
    return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
  }
}