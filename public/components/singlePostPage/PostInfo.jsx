import React from 'react';
import styles from './css/PostInfo.module.css';

export default function PostInfo(props) {
  const formatDate = date => {
    return new Date(Date.parse(date)).toDateString();
  };

  return (
    <>
      <div className={styles.postInfo}>
        <div className={styles.singlePostDate}>{formatDate(props.createdAt)}</div>
        <i className="far fa-comments" />
        <span className={styles.comments}>3</span>
        <i className="far fa-heart" />
        <span className={styles.likes}>5</span>
      </div>
    </>
  );
}
