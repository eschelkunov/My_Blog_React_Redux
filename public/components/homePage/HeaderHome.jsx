import React from 'react';
import styles from './css/HeaderHome.module.css';

export default function HeaderHome() {
  return (
    <div className={styles.header}>
      <div className={styles.toolbar}>
        <button value="dark">dark</button>
        <button value="light">light</button>
      </div>
      <h1>Blog posts</h1>
      <h1 id={styles.header2}>Welcome to my blog...</h1>
    </div>
  );
}
