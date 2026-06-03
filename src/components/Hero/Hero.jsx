import { motion, useReducedMotion } from 'framer-motion';
import styles from './Hero.module.css';
import { teamMembers } from '../../data/teamMembers';
import { PinkWave, PurpleTeardrop } from '../DecorativeShapes/DecorativeShapes';

/* Avatar size class per index */
const sizeClass = [
  styles.avatarSm,
  styles.avatarMd,
  styles.avatarLg,
  styles.avatarMd,
  styles.avatarLg,
  styles.avatarMd,
  styles.avatarSm,
];

/**
 * Hero — full-screen landing section with large headline, pill highlights,
 * floating avatar grid, and organic decorative shapes.
 *
 * Performance notes:
 *  - useReducedMotion: animations disabled for users who prefer it.
 *  - First avatar uses loading="eager" — it's above the fold.
 *  - Stagger reduced on mobile (slower CPU) via shorter delay.
 *  - Decorative shapes hidden via CSS on mobile (avoids extra paint layers).
 */
export default function Hero() {
  const reducedMotion = useReducedMotion();

  /* Skip all animations if user prefers reduced motion */
  const fadeUp = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 28 },
        show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren:   reducedMotion ? 0 : 0.3,
      },
    },
  };

  return (
    <section className={styles.hero} id="home" aria-label="Hero section">
      {/* Decorative shapes — hidden on mobile via CSS */}
      <div className={styles.shapeWave} aria-hidden="true">
        <PinkWave />
      </div>
      <div className={styles.shapeTeardrop} aria-hidden="true">
        <PurpleTeardrop style={{ position: 'static' }} />
      </div>

      <div className="container">
        {/* Headline */}
        <motion.h1
          className={styles.headline}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          The{' '}
          <span className={styles.underline}>thinkers</span>{' '}
          and doers were{' '}
          <span className={styles.pillPink}>changing</span>{' '}
          the{' '}
          <span className={styles.pillGreen}>status</span>{' '}
          Quo with
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className={styles.sub}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: reducedMotion ? 0 : 0.12 }}
        >
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </motion.p>

        {/* Avatar grid */}
        <motion.div
          className={styles.avatars}
          variants={stagger}
          initial="hidden"
          animate="show"
          role="list"
          aria-label="Team members"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              className={`${styles.avatarItem} ${sizeClass[i] ?? ''}`}
              variants={fadeUp}
              role="listitem"
            >
              <img
                className={styles.avatarImg}
                src={member.img}
                alt={member.name}
                /*
                 * First avatar is above the fold → eager load to avoid
                 * blank space flash (LCP improvement).
                 * Rest are lazy to save bandwidth.
                 */
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                /* Explicit dimensions prevent CLS */
                width="80"
                height="80"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
