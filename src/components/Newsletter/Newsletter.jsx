import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Newsletter.module.css';
import { PurpleTeardrop } from '../DecorativeShapes/DecorativeShapes';

/**
 * Newsletter — green-background subscribe section with decorative purple shape.
 */
export default function Newsletter() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className={styles.section}
      id="newsletter"
      aria-labelledby="newsletter-heading"
    >
      {/* Decorative pink curve at top */}
      <div className={styles.shapePinkCurve} aria-hidden="true">
        <svg width="160" height="80" viewBox="0 0 160 80" fill="none">
          <path
            d="M0 70 C40 70, 60 10, 80 10 C100 10, 120 70, 160 70"
            stroke="#f7b8d6"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative purple teardrop */}
      <div className={styles.shapePurple} aria-hidden="true">
        <PurpleTeardrop style={{ position: 'static' }} animate />
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          className={styles.inner}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="newsletter-heading" className={styles.heading}>
            Subscribe to<br />our newsletter
          </h2>

          <p className={styles.sub}>
            To make your stay special and even more memorable
          </p>

          <button
            className={styles.btn}
            aria-label="Subscribe to Elementum newsletter"
          >
            Subscribe Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
