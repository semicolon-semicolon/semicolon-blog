import Link from 'next/link';
import { products } from '../lib/data';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.nav}`}>
          <div className={styles.logo}>
            <div className={styles.brandIcon}>
              <div className={styles.brandDot}></div>
              <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                 <path d="M15 4c0 4.5-4 10-12 16 4-6 5-11 5-16h7z" fill="var(--brand-color)" />
              </svg>
            </div>
            <span className={styles.logoText}>semicolon</span>
          </div>
          {/* Add nav links if needed in future, keeping minimal for now */}
        </div>
      </header>

      <div className={styles.container}>
        <section className={`${styles.hero} animate-fade-in-up`}>
          <h1 className={styles.heroTitle}>
            Elevate your workspace. <br />
            <span className={styles.accent}>Curated for you.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover handpicked premium products and aesthetics that transform your 
            desk into a station of absolute focus.
          </p>
        </section>

        <section className={styles.productsSection}>
          {/* This is the fixed div / grid that automatically updates from the products array */}
          <div className={`${styles.grid} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            {products.map((product) => (
              <a 
                key={product.id} 
                href={product.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  {/* Using standard img for external flexibility */}
                  <img src={product.imageUrl} alt={product.title} loading="lazy" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardDesc}>{product.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{product.price}</span>
                    <button className={styles.buyButton}>View Deal</button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} semicolon-blogs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
