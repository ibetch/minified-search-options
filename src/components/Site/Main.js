import React from 'react';
import Hero from './Hero';
import Card from './Card';
import styles from './main.module';

const Main = () => {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <Card />
        </div>
        <div className={styles.gridItem}>
          <Card />
        </div>
        <div className={styles.gridItem}>
          <Card />
        </div>
        
        
      </div>
    </main>
  );
}
export default Main;