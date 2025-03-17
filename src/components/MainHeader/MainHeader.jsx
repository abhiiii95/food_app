'use client';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './mainHeader.module.scss';

const MainHeader = () => {


  return (
    <Container className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.brand}>Food App</div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>Login</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>Cart</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/resturant" className={styles.link}>Add Restaurant</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default MainHeader;
