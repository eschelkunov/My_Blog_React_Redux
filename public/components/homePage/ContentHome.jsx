import React, { Component } from 'react';
import SinglePostHome from './SinglePostHome.jsx';
import styles from './css/ContentHome.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ContentHome extends Component {
  debugger;
  render() {
    const { currentUser } = this.props;
    return (
      <div className={styles.content}>
        <div className={styles.tabs}>
          <div className="leftTab">
            <NavLink className={styles.allPosts} id="posts" to="/posts">
              <i className="fas fa-bars" /> Posts
            </NavLink>
          </div>
          <div className={currentUser.role === "admin" ? "rightTab" : styles.hideAddPost}>
            <NavLink className={styles.newPost} id="new" to="/new">
              <i className="fas fa-plus" /> Add new post
            </NavLink>
          </div>
        </div>
        <SinglePostHome />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.Auth.currentUser,
});

export default connect(
  mapStateToProps,
)(ContentHome);
