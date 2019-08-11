import React from 'react';
import styles from '../singlePostPage/css/MenuSinglePage.module.css';
import { NavLink } from 'react-router-dom';

export default function MenuAddPostPage() {
  return (
    <div className={styles.menu}>
      <NavLink to="/posts" id="btn-back-to-posts">
        <i className="fas fa-long-arrow-alt-left" /> Back to Posts
      </NavLink>
    </div>
  );
}
