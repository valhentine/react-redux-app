import React, { Component, Fragment } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers';
import Home from './pages/home';
import Login from './pages/login';
import logo from './logo.svg';
import './App.css';

const store = createStore(appReducer)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Fragment>
            <nav>
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
            </nav>
            <br />
            <Switch>
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/login" render={() => <Login />} />
              <Redirect to="/home" />
            </Switch>
          </Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;
