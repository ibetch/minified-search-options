import React from 'react';
import styles from './nav.module';

const Nav = () => {
  return (
    <ul className={`list-unstyled ${styles.nav}`}>
      <li className={`db dib-m ${styles.navItem} `}><span className={`dib background-gray ${styles.navItemContent}`}></span></li>
      <li className={`db dib-m ${styles.navItem} `}><span className={`dib background-gray ${styles.navItemContent}`}></span></li>
      <li className={`db dib-m ${styles.navItem} `}><span className={`dib background-gray ${styles.navItemContent}`}></span></li>
    </ul>
  );
}
export default Nav;