import React from 'react';
import Image6 from '../../Images/img6.png';
import styles from './Content.module.css';

function Content() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Image6} alt='Image 6'/>
      <div className={styles.content}>
        <p className={styles.title}>About us</p>
        <h1 className={styles.heading}>Efficiency, Building, Budget & Time</h1>
        <p className={styles.description}>Hideva Group is a team of skilled construction professionals with a passion for building and a commitment to excellence. We provide a range of services, from small-scale renovations to large-scale commercial construction. We believe in transparency and communication, and we work closely with our clients to ensure their needs are met. Thank you for considering us for your construction needs.</p>
      </div>
    </div>
  );
}

export default Content;
