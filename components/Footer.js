import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Developer - The Silent Builder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
