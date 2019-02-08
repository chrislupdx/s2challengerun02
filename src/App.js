import React, { Component } from 'react';
import Val from './Components/Validation';
import Char from './Components/Char';
import './App.css';

class App extends Component {
  state = {
    inputtext: ''
  }

  inputHandler = (event) => {
    this.setState({inputtext: event.target.value});
  }

  render() {

    const charList = this.state.inputtext.split('').map((ch, index) => {
      return <Char
        character = {ch}
        key = {index} />;
    });

    return (
      <div className="App">

      <input
        onChange = {this.inputHandler}
        value = {this.inputtext}
      />

      <p>{this.state.inputtext.length}</p>

      <Val
       length = {this.state.inputtext.length}
      />

      {charList}


      </div>
    );
  }
}

export default App;
