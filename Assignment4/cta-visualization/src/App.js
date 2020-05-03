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
                label: 'Population',
                data: [
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',

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
