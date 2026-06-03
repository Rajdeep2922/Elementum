import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './Testimonials.module.css';
import { testimonials, teamMembers } from '../../data/teamMembers';
import SectionHeading, { Highlight } from '../SectionHeading/SectionHeading';

/* Avatars around the card — camelCase pos class names */
const floatPositions = [
  { member: teamMembers[0], posClass: styles.pos1 },
  { member: teamMembers[1], posClass: styles.pos2 },
  { member: teamMembers[2], posClass: styles.pos3 },
  { member: teamMembers[3], posClass: styles.pos4 },
  { member: teamMembers[4], posClass: styles.pos5 },
  { member: teamMembers[5], posClass: styles.pos6 },
  { member: teamMembers[6], posClass: styles.pos7 },
];

/**
 * Testimonials — "What our customer says About Us" with floating avatar ring
 * and dot-navigated testimonial card.
 */
export default function Testimonials() {
  const [active, setActive]   = useState(0);
  const reducedMotion         = useReducedMotion();
  const ref                   = useRef(null);
  const inView                = useInView(ref, { once: true, margin: '-60px' });

  const current = testimonials[active];

  const sectionAnim = reducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 30 }, animate: inView ? { opacity: 1, y: 0 } : {} };

  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <motion.div
          ref={ref}
          {...sectionAnim}
          transition={{ duration: reducedMotion ? 0 : 0.55 }}
        >
          {/* Heading */}
          <SectionHeading center>
            What our customer says{' '}
            <Highlight color="orange" underline>
              About Us
            </Highlight>
          </SectionHeading>

          {/* Content area */}
          <div className={styles.inner}>
            {/* Desktop: floating avatar ring with card in centre */}
            <div className={styles.floatGrid} aria-hidden="true">
              {floatPositions.map(({ member, posClass }) => (
                <div key={member.id} className={`${styles.floatAvatar} ${posClass}`}>
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    width="80"
                    height="80"
                  />
                </div>
              ))}

              {/* Testimonial card in centre */}
              <TestimonialCard testimonial={current} />
            </div>

            {/* Mobile: card standalone (floatGrid hidden on mobile) */}
            <div className={styles.mobileCard}>
              <TestimonialCard testimonial={current} />
            </div>

            {/* Dot navigation */}
            <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.active : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  aria-selected={i === active}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** Extracted card sub-component */
function TestimonialCard({ testimonial }) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={testimonial.id}
        className={styles.card}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.35 }}
        aria-label={`Testimonial from ${testimonial.name}`}
      >
        <span className={styles.quoteIcon} aria-hidden="true">"</span>

        <p className={styles.cardText}>{testimonial.text}</p>

        <span className={`${styles.quoteIcon} ${styles.quoteIconClose}`} aria-hidden="true">"</span>

        <div className={styles.author}>
          <img
            className={styles.authorImg}
            src={testimonial.img}
            alt={testimonial.name}
            loading="lazy"
            width="48"
            height="48"
          />
          <div>
            <p className={styles.authorName}>{testimonial.name}</p>
            <p className={styles.authorRole}>{testimonial.role}</p>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}
