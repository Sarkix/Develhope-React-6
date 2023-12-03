import React from 'react';
import styles from "./Welcome.module.css";

function Welcome({ name, age }) {
  return <p className={styles.welcome}>Welcome, <strong>{name}</strong>! Your age is {age}</p>;
}

export default Welcome;
