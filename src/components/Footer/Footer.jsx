import styles from './Footer.module.css';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Home',    href: '#home'      },
      { label: 'Studio',  href: '#progress'  },
      { label: 'Service', href: '#services'  },
      { label: 'Blog',    href: '#'          },
    ],
  },
  {
    heading: 'Terms & Policies',
    links: [
      { label: 'Privacy Policy',     href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Explore',            href: '#' },
      { label: 'Accessibility',      href: '#' },
    ],
  },
  {
    heading: 'Follow Us',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'LinkedIn',  href: 'https://linkedin.com'  },
      { label: 'Youtube',   href: 'https://youtube.com'   },
      { label: 'Twitter',   href: 'https://twitter.com'   },
    ],
  },
];

/**
 * Footer — 4-column layout with company links, policies, socials, and contact info.
 */
export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Columns 1–3 */}
          {columns.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h3>{col.heading}</h3>
              <ul role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4 — Contact */}
          <div className={`${styles.col} ${styles.contact}`}>
            <h3>Contact Information</h3>
            <address style={{ fontStyle: 'normal' }}>
              <p>1498 W Fulton st, STE<br />20 Chicago, IL 63867.</p>
              <a href="tel:+12284567890">(228) 456-789 000</a>
              <a href="mailto:info@elementum.com">info@elementum.com</a>
            </address>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            ©2023 Elementum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
