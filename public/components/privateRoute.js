import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

PrivateRoute.PropTypes = {
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.Auth.currentUser,
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
