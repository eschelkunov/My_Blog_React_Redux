import React, { Component } from 'react';
import styles from './css/SideBar.module.css';
import LatestPost from './LatestPost.jsx';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.widget}>
        <div>
          <h2>Latest posts(5):</h2>
          <LatestPost />
        </div>
      </div>
    </div>
  );
}
