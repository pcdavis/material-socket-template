import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout'
import Buttons from './components/material-ui/Buttons';
import Avatars from './components/material-ui/Avatars';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>

        <Layout title="socket.io app" />
    
           

    </MuiThemeProvider>
    );
  }
}

export default App;
