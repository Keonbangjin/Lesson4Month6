import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>HIDEVA GROUP</h1>
      <div className={styles.links}>
        <a href="#" className={styles.link}>Home</a>
        <a href="#" className={styles.link}>Services</a>
        <a href="#" className={styles.link}>About</a>
        <a href="#" className={styles.link}>Blog</a>
        <button className={styles.button}>Contact us</button>
      </div>
    </div>
  );
}

export default Navbar;
