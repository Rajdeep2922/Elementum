import styles from './SectionHeading.module.css';

/**
 * SectionHeading — reusable heading component.
 *
 * Props:
 *  - children: JSX content (headline text with optional <span> highlights)
 *  - subtitle: optional paragraph below the heading
 *  - center: if true, centres the text
 */
export default function SectionHeading({ children, subtitle, center = false }) {
  return (
    <div className={center ? styles['heading--center'] : ''}>
      <h2 className={styles.heading}>{children}</h2>
      {subtitle && <p className={styles.heading__sub}>{subtitle}</p>}
    </div>
  );
}

/**
 * Pill highlight wrapper for words inside SectionHeading.
 * color: 'green' | 'orange' | 'pink' | 'purple'
 */
export function Highlight({ children, color = 'green', underline = false }) {
  const cls = [
    styles.heading__highlight,
    styles[`heading__highlight--${color}`],
    underline ? styles.heading__underline : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={cls}>{children}</span>;
}
