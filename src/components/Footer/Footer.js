import React from 'react';
import Image10 from '../../Images/img10.jpg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HIDEVA GROUP</h1>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h1 className={styles.sectionTitle}>Services</h1>
          <p className={styles.sectionItem}>New Builds</p>
          <p className={styles.sectionItem}>Renovations</p>
          <p className={styles.sectionItem}>Conversions</p>
          <p className={styles.sectionItem}>Fit Out</p>
        </div>
        <div className={styles.section}>
          <h1 className={styles.sectionTitle}>Information</h1>
          <p className={styles.sectionItem}>Events</p>
          <p className={styles.sectionItem}>Contact us</p>
          <p className={styles.sectionItem}>Privacy police</p>
          <p className={styles.sectionItem}>Terms of services</p>
        </div>
        <div className={styles.section}>
          <h1 className={styles.sectionTitle}>Address</h1>
          <p className={styles.sectionItem}>Nyeri Town - Nyeri</p>
          <p className={styles.sectionItem}>Mumbi</p>
          <p className={styles.sectionItem}>Call us</p>
          <p className={styles.sectionItem}>Email us</p>
        </div>
      </div>
      <img className={styles.logo} src={Image10} alt='Image 10'/>
    </div>
  );
}

export default Footer;
