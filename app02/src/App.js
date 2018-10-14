import React, { Component } from 'react';
import { ThemeProvider } from 'react-jss'
import { theme } from './style'
import Componente from './componente';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Componente  ref={(node) => { this.node = node }} style={this.props.style}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </ThemeProvider>
    );
  }
}

export default App
