import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styles from './site.module';

const Site = () => {
  return (
    <section className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
export default Site;