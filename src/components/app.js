import React from 'react';
import {connect} from 'react-redux';
import {Link, Route, withRouter} from 'react-router-dom';
import {refreshAuthToken} from '../actions/auth';

import '../styles/app.css'
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';


import Spread from './scratch/placeCard.js'
import FormDraft from './scratch/formDraft.js'

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      10 * 60 * 1000 // Ten minutes
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return(
      <div className="app">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to='/mock'>Mockups</Link>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/mock" component={FormDraft} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
