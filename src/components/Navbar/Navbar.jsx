import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home',     href: '#home'      },
  { label: 'Studio',   href: '#progress'  },
  { label: 'Services', href: '#services'  },
  { label: 'Contact',  href: '#newsletter'},
  { label: 'FAQs',     href: '#faqs'      },
];

/**
 * Navbar — sticky top nav with blur-on-scroll and hamburger mobile drawer.
 *
 * Performance notes:
 *  - Scroll listener throttled via requestAnimationFrame to avoid forced
 *    layout recalculations on every scroll event.
 *  - backdrop-filter is GPU-accelerated; we promote the element via
 *    will-change only when scrolled to avoid unnecessary layers.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  /* rAF-throttled scroll handler to eliminate scroll jank */
  const handleScroll = useCallback(() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    const fn = handleScroll();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [handleScroll]);

  /* Lock body scroll when drawer is open — use scrollbar-gutter to prevent CLS */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.navbarInner}>
          {/* Logo */}
          <a href="#home" className={styles.navbarLogo} aria-label="Elementum home">
            Elementum
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation">
            <ul className={styles.navbarLinks} role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.navbarLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger button (mobile) */}
          <button
            className={`${styles.hamburger} ${open ? styles.open : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-drawer"
            className={styles.drawer}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.navbarLink}
                onClick={closeDrawer}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
