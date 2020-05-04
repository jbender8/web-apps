import React, { Component } from 'react';
import './App.css';
import { Bar } from 'react-chartjs-2';

//import Chart from './components/Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
  }

  getChartData() {
    var target = `https://data.cityofchicago.org/resource/w8km-9pzd.json`;

    return fetch(target)
      .then((response) => {
        console.dir(response);
        return response.json();
      })
      .then((data) => {
        console.dir(data);
        console.log(data[1]['year']);
        this.setState({
          chartData: {
            labels:
              [
                data[0]['year'], data[1]['year'], data[2]['year'], data[3]['year'], data[4]['year'], data[5]['year'],
                data[6]['year'], data[7]['year'], data[8]['year'], data[9]['year'], data[10]['year'],
                data[11]['year'], data[12]['year'], data[13]['year'], data[14]['year'], data[15]['year'],
                data[16]['year'], data[17]['year'], data[18]['year'], data[19]['year'], data[20]['year'],
                data[21]['year'], data[22]['year'], data[23]['year'], data[24]['year'], data[25]['year'],
                data[26]['year'], data[27]['year'], data[28]['year'], data[29]['year'], data[30]['year']
              ],
            datasets: [
              {
                label: 'Total',
                data: [
                  data[0]['total'], data[1]['total'], data[2]['total'], data[3]['total'], data[4]['total'], data[5]['total'],
                  data[6]['total'], data[7]['total'], data[8]['total'], data[9]['total'], data[10]['total'],
                  data[11]['total'], data[12]['total'], data[13]['total'], data[14]['total'], data[15]['total'],
                  data[16]['total'], data[17]['total'], data[18]['total'], data[19]['total'], data[20]['total'],
                  data[21]['total'], data[22]['total'], data[23]['total'], data[24]['total'], data[25]['total'],
                  data[26]['total'], data[27]['total'], data[28]['total'], data[29]['total'], data[30]['total']

                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',

              },
              {
                label: 'Rail',
                data: [
                  data[0]['rail'], data[1]['rail'], data[2]['rail'], data[3]['rail'], data[4]['rail'], data[5]['rail'],
                  data[6]['rail'], data[7]['rail'], data[8]['rail'], data[9]['rail'], data[10]['rail'],
                  data[11]['rail'], data[12]['rail'], data[13]['rail'], data[14]['rail'], data[15]['rail'],
                  data[16]['rail'], data[17]['rail'], data[18]['rail'], data[19]['rail'], data[20]['rail'],
                  data[21]['rail'], data[22]['rail'], data[23]['rail'], data[24]['rail'], data[25]['rail'],
                  data[26]['rail'], data[27]['rail'], data[28]['rail'], data[29]['rail'], data[30]['rail']

                ],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
              },
              {
                label: 'Bus',
                data: [
                  data[0]['bus'], data[1]['bus'], data[2]['bus'], data[3]['bus'], data[4]['bus'], data[5]['bus'],
                  data[6]['bus'], data[7]['bus'], data[8]['bus'], data[9]['bus'], data[10]['bus'],
                  data[11]['bus'], data[12]['bus'], data[13]['bus'], data[14]['bus'], data[15]['bus'],
                  data[16]['bus'], data[17]['bus'], data[18]['bus'], data[19]['bus'], data[20]['bus'],
                  data[21]['bus'], data[22]['bus'], data[23]['bus'], data[24]['bus'], data[25]['bus'],
                  data[26]['bus'], data[27]['bus'], data[28]['bus'], data[29]['bus'], data[30]['bus']

                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
              },
              {
                label: 'Paratransit',
                data: [
                  data[0]['paratransit'], data[1]['paratransit'], data[2]['paratransit'], data[3]['paratransit'], data[4]['paratransit'], data[5]['paratransit'],
                  data[6]['paratransit'], data[7]['paratransit'], data[8]['paratransit'], data[9]['paratransit'], data[10]['paratransit'],
                  data[11]['paratransit'], data[12]['paratransit'], data[13]['paratransit'], data[14]['paratransit'], data[15]['paratransit'],
                  data[16]['paratransit'], data[17]['paratransit'], data[18]['paratransit'], data[19]['paratransit'], data[20]['paratransit'],
                  data[21]['paratransit'], data[22]['paratransit'], data[23]['paratransit'], data[24]['paratransit'], data[25]['paratransit'],
                  data[26]['paratransit'], data[27]['paratransit'], data[28]['paratransit'], data[29]['paratransit'], data[30]['paratransit']

                ],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
              }
            ]
          }
        })

        console.log(this.state.chartData)
      })
      .catch(err => {
        this.setState({
          chartData: "Could not retrieve"
        })
        console.error("Weather request failed", err);
      });

  }

  componentWillMount() {
    this.getChartData()
    console.log(this.state.chartData)
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'top',
    displayXAxesLabel: true,
    displayYAxesLabel: true

  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Chicago Transit Authority Ridership Visualizathion',
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: this.props.displayXAxesLabel,
                  labelString: 'Year'
                }
              }],
              yAxes: [{
                type: 'logarithmic',
                ticks: {
                  min: 0,
                  max: 700000000,
                  callback: value => {
                    return Number(value.toString());
                  }
                },
                scaleLabel: {
                  display: this.props.displayYAxesLabel,
                  labelString: 'Boardings'
                }
              }]
            }
          }}
        />
      </div>


      //<div className="App">
      //<Chart chartData={this.state.chartData} legendPosition='top' />
      //</div>
    );
  }
}

export default App;
