import React from 'react';
import styles from './Section.module.css';

function Section() {
  return (
    <div>
      <p className={styles.title}>Get in Touch</p>
      <h1 className={styles.subtitle}>Reach out to us and let's turn your construction dreams into reality</h1>
      <div className={styles.formContainer}>
        <p className={styles.label}>Name</p>
        <input className={styles.input} type='text' placeholder='Enter name'/>
        <p className={styles.label}>Email</p>
        <input className={styles.input} type='email' placeholder='Enter email'/>
        <p className={styles.label}>Message</p>
        <input className={styles.textarea} type='text' placeholder=''/>
        <button className={styles.button}>Send</button>
      </div>
    </div>
  );
}

export default Section;
