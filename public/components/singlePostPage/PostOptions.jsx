import React from 'react';
import styles from './css/PostOptions.module.css';
import { NavLink } from 'react-router-dom';

export default function PostOptions(props) {
  const { onSave, onCancel } = props;
  return (
    <div className={styles.optionsShown}>
      <NavLink to="#" className={styles.button} onClick={onSave}>
        Save
      </NavLink>
      <NavLink to="#" className={styles.button} onClick={onCancel}>
        Cancel
      </NavLink>
    </div>
  );
}
