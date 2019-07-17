import React from 'react';
import Nav from './Nav';
import SearchForm from '../SearchForm';
import styles from './header.module';

const Header = () => {
  return (
    <header className={`border-gray ${styles.wrapper}`}>
        <div class={`background-gray ${styles.logo}`}></div>
        <div className={`dn dib-m ${styles.nav} `}>
          <Nav/>
        </div>
        <div className={styles.search}><SearchForm /></div>
        <div className={`${styles.mobileNav}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="3 3 18 18" className="svgIcon dib vam"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </div>
      </header>
  )
}

export default Header;