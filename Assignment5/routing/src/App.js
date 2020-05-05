import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { render } from '@testing-library/react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(event) {
    alert('A welcome was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="title">
              Jess Bender - Routing
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Paper className="paper">
              <p>Home</p>
              <p>Welcome</p>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className="paper">
              <p>Hello!</p>
              <p></p>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Please enter welcome message:
                  <input type="text" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default App;
