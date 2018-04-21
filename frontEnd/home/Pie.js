import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';
import { getDevices } from '../actions/statisticsActions'

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = { devices: {}}
  }

  componentWillMount () {
    getDevices()
    .then((result) => {
      this.setState({ devices: result.data.devices });
    })
  }
  render() {
    const labels = Object.keys(this.state.devices);
    const data = Object.values(this.state.devices);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'percentage of devices',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)'
          ]
        }
      ]
    };
    return (
      <Pie
        width={150}
        height={150}
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'percentage of devices',
            fontSize: 25
          },
          legend: {
            display: true,
            position: 'bottom'
          }
        }}
      />
    );

  }

};


export default PieChart;
