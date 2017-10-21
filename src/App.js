import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {Home,Home2} from './component';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <ul>
         
            <NavLink to="/" activeClassName="active">Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/Home2" activeClassName="active">Home1</NavLink>
          </ul>
        </header>
        <p className="App-intro">
          <Switch>
          <Route path="/" component={Home} exact={true} />
          </Switch>
        </p>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
