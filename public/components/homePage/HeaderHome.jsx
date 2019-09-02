import React, { Component } from 'react';
import styles from './css/HeaderHome.module.css';
import { connect } from 'react-redux';
import { switchTheme } from '../../actions/visibilityActions';
import { submitLogout } from '../../actions/authActions';
import { withRouter } from 'react-router';

class HeaderHome extends Component {
  debugger;
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.toolbar}>
          <button value="dark" onClick={() => this.props.switchTheme('dark')}>
            dark
          </button>
          <button value="light" onClick={() => this.props.switchTheme('light')}>
            light
          </button>
          <button value="logout" onClick={() => this.props.submitLogout()}>
            Logout
          </button>
        </div>
        <h1>Blog posts</h1>
        <h1 id={styles.header2}>Welcome to my blog...</h1>
      </div>
    );
  }
}

const mapDispatchToProps = {
  switchTheme,
  submitLogout,
};

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(HeaderHome));
