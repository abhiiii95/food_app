'use client';
import React, { useEffect } from 'react';
import styles from './homeBanner.module.scss';

const HomeBanner = () => {
    useEffect(()=>{},[])
    const locationItem = async()=>{
        
    }
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Welcome to Our Food App</h1>
          <form className={styles.form}>
            <input type="text" placeholder="Select Location" className={`${styles.input} ${styles?.input1}`} />
            <input type="text" placeholder="Enter Food or resturant name" className={`${styles.input} ${styles?.input2}`} />
            <button type="submit" className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
