import React from 'react';
import styles from './hero.module';
import Image from './Image';
import TextBlock from './TextBlock';

const Hero = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.image}>
        <Image type={`hero`} />
      </div>
      
      <div className={styles.heading}>
        <TextBlock type={`header`} />
        <TextBlock type={`subheader`} />
      </div>
    </article>
  )
};
export default Hero;