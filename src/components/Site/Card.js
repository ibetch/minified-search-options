import React from 'react';
import styles from './card.module';
import Image from './Image';
import TextBlock from './TextBlock';

const Card = () => {
  return (
    <article>
      <div className={styles.image}>
        <Image type={`card`} />
      </div>
      <p className={`${styles.textSection}`}>
        <TextBlock type={`block`} />
        <TextBlock type={`block`} />
        <TextBlock type={`block`} />
        <TextBlock type={`block-end`} />
      </p>
    </article>
  );
}
export default Card;