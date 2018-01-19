import React, { Component } from 'react';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout'



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>

        <Layout title="socket.io app is working. This is the layout component on App" />
    
           

    </MuiThemeProvider>
    );
  }
}

export default App;
