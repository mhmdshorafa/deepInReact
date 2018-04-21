import React, { Component } from 'react';
import { getTraffic } from '../actions/statisticsActions'
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = { pages: []}
  }

  componentWillMount () {
    getTraffic()
    .then((result) => {
      this.setState({ pages: result.data.pages });
    })
  }

  render() {
    const hours = {};
    for (var i = new Date().getHours(); i >= new Date().getHours() - 10; i--)
      hours[Math.abs(i)]=0;
    this.state.pages.map((page) => new Date(page.createdAt).getHours())
    .forEach((page) => {
      if(hours[page]) hours[page]++
      else hours[page]=1;
    })

    const chartData = {
      labels: Object.keys(hours),
      datasets: [
        {
          label: 'hour visits',
          data: Object.values(hours),
          backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.6)'
          ]
        }
      ]
    };

    return (
      <Bar
        height={150}
        width={150}
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'last visits',
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


export default BarChart;
