import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import * as moment from 'moment';
import './index.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: null,
      icon: "err",
      iconDesc: "Current Weather",
      Degree: 'imperial'
    };
  }

  handleRefresh() {
    window.location.reload(false);
  }

  handleDegree = (event, newDegree) => {
    console.log(newDegree)
    if (newDegree.length) {
      this.setState({
        Degree: newDegree
      })
      this.getWeatherF(newDegree)
    }
  }

  getWeatherF(scale) {
    var key = "7abc6c8967924c51a42ce462b17be3c2";
    var target = `http://api.openweathermap.org/data/2.5/weather?zip=60654&appid=${key}&&units=` + scale;

    return fetch(target)
      .then((response) => {
        console.dir(response);
        return response.json();
      })

      .then((data) => {
        console.dir(data);
        this.setState({
          temp: data.main.temp,
          icon: "http://openweathermap.org/img/wn/" + data.weather[0]["icon"] + "@2x.png",
          iconDesc: data.weather[0]["description"]
        })
        console.log(this.state.temp);
        console.log(this.state.iconDesc);


      })
      .catch(err => {
        this.setState({
          tempStr: "Could not retrieve"
        })
        console.error("Weather request failed", err);
      });
  }


  componentDidMount() {
    this.getWeatherF('imperial')

  }

  render() {
    return (
      <Card className="root" variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              src={this.state.icon}
              aria-label={this.state.iconDesc}
              className="avatar"
            >
            </Avatar>
          }
          title="Weather"
          subheader={moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
          action={
            <IconButton
              aria-label="refresh"
              onClick={this.handleRefresh}
            >
              <RefreshIcon />
            </IconButton>
          }
        >
        </CardHeader>
        <CardContent>
          <Typography
            variant="h1"
          >
            {this.state.temp}&#xb0;
          </Typography>

        </CardContent>
        <CardActions>
          <ToggleButtonGroup
            size="small"
            value={this.state.Degree}
            onChange={this.handleDegree}
            aria-label="Change-Degrees"
            exclusive
          >
            <ToggleButton value="imperial" aria-label="Fahrenheit">
              F&deg;
          </ToggleButton>
            <ToggleButton value="metric" aria-label="Celsius">
              C&deg;
          </ToggleButton>
          </ToggleButtonGroup>
        </CardActions>
      </Card>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('root')
);