import React from 'react';
import styles from './index.css';

export default function Spinner( { isFetching } ) {
  return isFetching ? <div className={styles.spinner} /> : null
}
