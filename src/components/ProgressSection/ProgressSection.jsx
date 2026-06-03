import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import styles from './ProgressSection.module.css';
import { progressBlocks } from '../../data/teamMembers';
import { CurvedLine } from '../DecorativeShapes/DecorativeShapes';

/**
 * Arrow icon extracted so it can receive a CSS class for transform animation.
 */
function ArrowRight() {
  return (
    <svg
      className={styles.readMoreArrow}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * ProgressBlock — a single alternating content+image row.
 * Uses useReducedMotion to skip animation for users who prefer it.
 */
function ProgressBlock({ block }) {
  const ref          = useRef(null);
  const reducedMotion = useReducedMotion();

  /*
   * Use a generous margin so the animation fires before the element
   * reaches the viewport edge — avoids the "pop in" on slow scroll.
   */
  const inView = useInView(ref, { once: true, margin: '-60px' });

  /*
   * When reduced motion is requested, skip the animation entirely
   * so the element renders at full opacity immediately.
   */
  const variants = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 32 },
        show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      };

  return (
    <motion.div
      ref={ref}
      className={`${styles.block} ${block.reverse ? styles.blockReverse : ''}`}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {/* Text content */}
      <div className={styles.text}>
        <span className={styles.tag}>{block.tag}</span>

        <h3 className={styles.title}>
          <em>{block.tag}</em>{' '}
          {block.title.replace(block.tag + ' ', '')}
        </h3>

        <p className={styles.body}>{block.body}</p>

        <a
          href="#"
          className={styles.readMore}
          aria-label={`Read more about ${block.title}`}
        >
          Read more
          <ArrowRight />
        </a>
      </div>

      {/* Circular image */}
      <div className={styles.imageWrap}>
        <span className={`${styles.tri} ${styles.triRedTop}`}    aria-hidden="true" />
        <span className={`${styles.tri} ${styles.triRedBottom}`} aria-hidden="true" />

        <div className={styles.circle}>
          <img
            src={block.img}
            alt={block.title}
            /*
             * width/height prevent CLS — browser reserves exact space
             * before the image loads.
             */
            width="420"
            height="420"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * ProgressSection — renders all progress blocks with curved connector line.
 */
export default function ProgressSection() {
  return (
    <section className={styles.section} id="progress" aria-labelledby="progress-heading">
      <div className="container">
        <h2 id="progress-heading" className="sr-only">Our Progress Story</h2>

        {progressBlocks.map((block, i) => (
          <div key={block.id} style={{ position: 'relative' }}>
            <ProgressBlock block={block} />

            {i < progressBlocks.length - 1 && (
              <div className={styles.connector} aria-hidden="true">
                <CurvedLine style={{ position: 'static' }} color="#f7b8d6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
