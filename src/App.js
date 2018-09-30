import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { 
    query:"This should mirror the text you typed into the input field." 
  }

  updateEcho(echo){
    this.setState({query:echo})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" onChange={(event) => {this.updateEcho(event.target.value)}} placeholder="Say Something" value={this.state.query} />
          <p className="echo">Echo:</p>
          <p>{this.state.query}</p>
        </div>
      </div>
    );
  }
}

export default App;
