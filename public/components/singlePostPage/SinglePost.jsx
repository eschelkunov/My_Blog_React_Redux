import React, { Component } from 'react';
import Modal from './Modal.jsx';
import Menu from './MenuSinglePage.jsx';
import Header from './Header.jsx';
import Post from './Post.jsx';
import styles from './css/SinglePost.module.css';

export default function SinglePostHome(props) {
  return (
    <div className={styles.container}>
      <Menu />
      <Header />
      <section className={styles.main}>
        <Post params={props.match.params} />
        <Modal />
      </section>
    </div>
  );
}
