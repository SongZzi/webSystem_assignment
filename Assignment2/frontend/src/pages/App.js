import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';
import CreateReview from './CreateReview';
import Reviews from './Reviews';
import '../App.css';

function App(){

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Reviews} />
        <Route exact path="/review/new" component={CreateReview} />
      </Switch>
    </Router>
  );
}


export default App;
