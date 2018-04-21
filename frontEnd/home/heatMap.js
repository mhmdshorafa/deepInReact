import { Bubble } from 'react-chartjs-2';
import React, { Component } from 'react';
import { getClicks } from '../actions/statisticsActions'

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: []}
  }

  componentWillMount () {
    getClicks()
    .then((result) => {
      this.setState({ clicks: result.data.clicks });
    })
  }
  render() {
    const clicks = this.state.clicks.map((click) => {
      return {x: click.event.clientX, y: click.event.clientY, r:7}
    })
    const data = {
      labels: ['mouse clicks'],
      datasets: [
      {
        label: 'mouse clicks',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: clicks
      }
    ]
};

    return (
      <Bubble   width={150} height={150} data={data} />
    );

  }

};


export default HeatMap;
