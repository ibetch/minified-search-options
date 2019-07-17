import React from 'react';
import TextBlock from './TextBlock';
import styles from './footer.module';

const Footer = () => {
  return (
    <footer className={`background-gray ${styles.wrapper}`}>
      <TextBlock type={`fine-print`} />
    </footer>
  );
}
export default Footer;