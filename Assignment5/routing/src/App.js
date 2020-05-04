import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            Jess Bender - Routing
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default App;
