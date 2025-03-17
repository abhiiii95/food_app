'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './header.module.scss';

const AddRestroHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restrurantUser");
    if (!data && pathname === "/resturant/dashboard") {
      router.push("/resturant");
    } else if (data && pathname === "/resturant") {
      router.push("/resturant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, [pathname, router]);

  const logOut = () => {
    localStorage.removeItem("restrurantUser");
    router.push("/resturant");
  };

  return (
    <Container className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.brand}>Food App</div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          {details && details.name ? (
            <>
              <li className={styles.navItem}>
                <button onClick={logOut} className={`${styles.button} ${styles.logoutButton}`}>
                  Log Out
                </button>
              </li>
              <li className={styles.navItem}>
                <button className={styles.button}>Profile</button>
              </li>
            </>
          ) : (
            <li className={styles.navItem}>
              <button className={styles.button}>Login/Sign Up</button>
            </li>
          )}
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

export default AddRestroHeader;
