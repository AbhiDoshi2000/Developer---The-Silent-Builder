import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BackgroundAnimation from "../components/BackgroundAnimation";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <BackgroundAnimation />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
