import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home  from './home';
import Login from './login';
import Users from './users';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/users"><Users /></Route>
      </React.Fragment>
    </Router>
  )
}
    