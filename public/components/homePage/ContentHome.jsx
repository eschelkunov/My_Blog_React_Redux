import React, { Component } from 'react';
import SinglePostHome from './SinglePostHome.jsx';
import styles from './css/ContentHome.module.css';
import { NavLink } from 'react-router-dom';

export default function ContentHome() {
  return (
    <div className={styles.content}>
      <div className={styles.tabs}>
        <div className="left-tab">
          <NavLink className={styles.allPosts} id="posts" to="/posts">
            <i className="fas fa-bars" /> Posts
          </NavLink>
        </div>
        <div className="right-tab">
          <NavLink className={styles.newPost} id="new" to="/new">
            <i className="fas fa-plus" /> Add new post
          </NavLink>
        </div>
      </div>
      <SinglePostHome />
    </div>
  );
}
