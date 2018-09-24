import React, { Component, Fragment } from 'react';
import { Redirect, Switch, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: null
  }

  updateUser = (user) => {
    this.setState({ user });
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
          </nav>
          <br />
          <Switch>
            <Route exact path="/home" render={() => <Home user={this.state.user} />} />
            <Route exact path="/login" render={() => (
              <Fragment>
                <Login user={this.state.user} updateUser={this.updateUser} />
                <Login user={this.state.user} updateUser={this.updateUser} />
                <Login user={this.state.user} updateUser={this.updateUser} />
              </Fragment>
            )} />
            <Redirect to="/home" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
