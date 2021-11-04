import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      content: '',
      result: ''
    }
  }

  updateContent = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  changeState= () => {
    this.setState({
      result: "Hello, "+ this.state.content +"!"
    });
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>Who are you?</p>
        <input type="text" value={this.state.content} onChange={this.updateContent}></input>
        <button onClick={this.changeState}>OK</button>
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.result}</p>
      </header> 
    </div>
  );
}
}

export default App;
