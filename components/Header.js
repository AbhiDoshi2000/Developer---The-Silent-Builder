import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Developer - The Silent Builder</div>
      <nav className={styles.nav}>
        <Link href="#" className={styles.navLink}>Home</Link>
        <Link href="#" className={styles.navLink}>About</Link>
        <Link href="#" className={styles.navLink}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
