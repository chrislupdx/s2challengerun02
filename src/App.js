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

  deleteHandler = (index) => {
    console.log("sure")
    const holdingpen = this.state.inputtext.split('');
    holdingpen.splice(index, 1);
    const newList = holdingpen.join('');
    this.setState({inputtext: newList})
  }

  render() {

    const charList = this.state.inputtext.split('').map((ch, index) => {
      return <Char
        character = {ch}
        key = {index}
        clicked = {() => this.deleteHandler(index)} />;
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
