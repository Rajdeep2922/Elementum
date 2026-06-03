import styles from './DecorativeShapes.module.css';

/**
 * DecorativeShapes — renders inline SVG organic shapes as decorative elements.
 * Each variant is a standalone exported component.
 */

/** Purple teardrop (upper-right of hero / newsletter) */
export function PurpleTeardrop({ style = {}, animate = true }) {
  return (
    <svg
      className={`${styles.shape} ${animate ? styles.animate : ''}`}
      style={style}
      width="90"
      height="120"
      viewBox="0 0 90 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M45 5C65 5 85 25 85 50C85 80 65 115 45 115C25 115 5 80 5 50C5 25 25 5 45 5Z"
        fill="#8d5cf6"
      />
    </svg>
  );
}

/** Pink wavy lines (left of hero) */
export function PinkWave({ style = {} }) {
  return (
    <svg
      className={styles.shape}
      style={style}
      width="80"
      height="160"
      viewBox="0 0 80 160"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M60 10 C30 30, 70 60, 40 80 C10 100, 60 130, 30 150"
        stroke="#f7b8d6"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 10 C10 30, 50 60, 20 80 C-10 100, 40 130, 10 150"
        stroke="#f7b8d6"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Red triangle accent */
export function RedTriangle({ style = {}, size = 40 }) {
  return (
    <svg
      className={styles.shape}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="20,2 38,38 2,38" fill="#e74c3c" />
    </svg>
  );
}

/** Curved connector line */
export function CurvedLine({ style = {}, color = '#f7b8d6' }) {
  return (
    <svg
      className={styles.shape}
      style={style}
      width="300"
      height="120"
      viewBox="0 0 300 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 100 C80 100, 150 10, 300 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Small orange circle */
export function OrangeCircle({ style = {}, size = 24 }) {
  return (
    <svg
      className={`${styles.shape} ${styles.animate}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="12" fill="#f5b640" opacity="0.7" />
    </svg>
  );
}
