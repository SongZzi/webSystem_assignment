import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import reducers from './reducers/todo';
import AddTodo from './components/Form';
import { createTodo } from './actions/todo';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


class App extends Component{
  render(){

  return (
    <div className="App">
      <Header></Header>
      <TodoList> </TodoList>
     
    </div>
  );
}
}

export default App;


