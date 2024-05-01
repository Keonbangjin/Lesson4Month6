import React from 'react';
import Image1 from '../../Images/img1.png';
import Image2 from '../../Images/img2.jpg';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.highlight}>We are Hideva Group</p>
        <h1 className={styles.title}>Design and Build Contract</h1>
        <p className={styles.description}>With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship</p>
        <button className={styles.button}>Get a quote</button>
        <div>
          <img className={styles.logo} src={Image2} alt='Image 2'/>
        </div>
      </div>
      <img className={styles.image} src={Image1} alt='Image 1'/>
    </div>
  );
}

export default Header;
