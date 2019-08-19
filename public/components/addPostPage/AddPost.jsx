import React from 'react';
import MenuAddPostPage from './MenuAddPostPage.jsx';
import HeaderAddPostPage from './HeaderAddPostPage.jsx';
import Form from './Form.jsx';
import styles from './css/AddPost.module.css';

export default function AddPost() {
  return (
    <div className={styles.container}>
      <MenuAddPostPage />
      <HeaderAddPostPage />
      <section className={styles.main}>
        <Form />
      </section>
    </div>
  );
}
