import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Hero = () => {
  const [showBalloon, setShowBalloon] = useState(false);

  const handleClick = () => {
    setShowBalloon(true);
    // Hide the balloon after 3 seconds.
    setTimeout(() => {
      setShowBalloon(false);
    }, 3000);
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Welcome to Developer - The Silent Builder
      </h1>
      <p className={styles.heroSubtitle}>
        Your platform for building groundbreaking digital experiences with minimal fuss.
      </p>
      <button className={styles.cta} onClick={handleClick}>
        Get Started
      </button>
      {showBalloon && <div className={styles.balloon}>Coming Soon</div>}
    </section>
  );
};

export default Hero;
