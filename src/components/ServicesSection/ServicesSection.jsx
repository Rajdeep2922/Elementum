import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './ServicesSection.module.css';
import { services } from '../../data/teamMembers';
import { CurvedLine } from '../DecorativeShapes/DecorativeShapes';

/* Arrow icon */
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 13L13 3M13 3H6M13 3V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const rowVariants = {
  hidden: { opacity: 0, x: -24 },
  show:   (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: 'easeOut' },
  }),
};

/**
 * ServicesSection — "What we can offer you!" with stagger-animated service rows.
 */
export default function ServicesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      {/* Decorative curve */}
      <div className={styles.curve} aria-hidden="true">
        <CurvedLine style={{ position: 'static' }} color="#f7b8d6" />
      </div>

      <div className="container">
        {/* Heading */}
        <header className={styles.header}>
          <h2 id="services-heading">
            What we{' '}
            <span className={styles.canPill}>can</span>{' '}
            <span className={styles.offerUnderline}>offer</span>{' '}
            you!
          </h2>
        </header>

        {/* Service list */}
        <ul className={styles.list} ref={ref} role="list">
          {services.map((service, i) => (
            <motion.li
              key={service.id}
              className={styles.row}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              role="listitem"
            >
              <p className={styles.desc}>{service.description}</p>
              <h3 className={styles.title}>{service.title}</h3>
              <span className={styles.arrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
