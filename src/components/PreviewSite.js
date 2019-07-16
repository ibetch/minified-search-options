import React from 'react';
import SearchForm from './SearchForm';
import styles from '../scss/components/preview.module';

const PreviewSite = () => {
  return (
    <section>
      <header className={`border-gray ${styles.header}`}>
        <div class={`${styles.headerLogo}`}>Logo</div>
        <div className={`dn dib-m ${styles.headerNav} `}>
          <ul className={`list-unstyled ${styles.nav}`}>
            <li className={`db dib-m ${styles.navItem} `}><span className={`dib background-gray ${styles.navItemContent}`}></span></li>
            <li className={`db dib-m ${styles.navItem} `}><span className={`dib background-gray ${styles.navItemContent}`}></span></li>
            <li className={`db dib-m ${styles.navItem} `}><span className={`dib background-gray ${styles.navItemContent}`}></span></li>
          </ul>
        </div>
        <div className={styles.headerSearch}><SearchForm /></div>
        <div>
        <div className={`${styles.headerMobileNav}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svgIcon"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </div>
        </div>
      </header>
      <article>ARTICLE</article>
      <footer>FOOTER</footer>
    </section>
  );
}
export default PreviewSite;