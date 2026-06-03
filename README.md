# Elementum — Frontend Assignment

> Pixel-perfect, production-quality React landing page built from a Figma design. Fully responsive, jitter-free, and Vercel-ready.

---

## 📸 Preview

| Section | Description |
|---|---|
| **Hero** | Full-screen headline with pill highlights, avatar grid, decorative shapes |
| **Progress** | Alternating content + circular image blocks with red triangle accents |
| **Services** | "What we can offer you!" — stagger-animated service rows |
| **Testimonials** | Floating avatar ring around a paginated testimonial card |
| **Newsletter** | Green CTA section with purple teardrop decoration |
| **Footer** | 4-column responsive layout with contact info |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [CSS Modules](https://github.com/css-modules/css-modules) | Scoped, modular styles |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered animations |
| [Vercel](https://vercel.com/) | Deployment |

> **No Bootstrap. No Material UI. No jQuery. No Tailwind.**

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar/               # Sticky blur navbar + hamburger drawer
│   ├── Hero/                 # Full-screen headline + avatar grid
│   ├── ProgressSection/      # Alternating content + circular image blocks
│   ├── ServicesSection/      # Animated service rows list
│   ├── Testimonials/         # Floating avatar ring + paginated card
│   ├── Newsletter/           # Green CTA section
│   ├── Footer/               # 4-column footer
│   ├── SectionHeading/       # Reusable heading with pill highlights
│   ├── AvatarGroup/          # Overlapping circular avatar images
│   └── DecorativeShapes/     # Inline SVG organic shapes
│
├── data/
│   └── teamMembers.js        # All site data (team, services, testimonials)
│
├── pages/
│   └── Home.jsx              # Single-page layout assembly
│
├── App.jsx
├── main.jsx
└── index.css                 # Global design tokens & reset
```

---

## 🎨 Design System

```css
/* Colors */
--bg:      #f8f8f8   /* Page background       */
--text:    #111111   /* Primary text           */
--green:   #dfeadf   /* Pill highlights, CTA bg */
--purple:  #8d5cf6   /* Accent, links          */
--orange:  #f5b640   /* Underline strokes      */
--pink:    #f7b8d6   /* Hero pill, wave shapes */

/* Responsive Typography */
font-size: clamp(2.4rem, 6vw, 5.5rem);   /* Hero headline */
font-size: clamp(2rem,   4vw, 3.25rem);  /* Section headings */
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js `v18+`
- npm `v9+`

### Install & Run

```bash
# Clone the repo
git clone https://github.com/Rajdeep2922/Elementum.git
cd Elementum

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build     # Outputs to /dist
npm run preview   # Preview the production build locally
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| **Mobile** | `< 768px` | Stacked layout, hamburger menu, reduced avatars |
| **Tablet** | `768px – 1024px` | Narrower circles, adjusted grid |
| **Desktop** | `> 1024px` | Full layout with decorative shapes |

---

## ⚙️ Performance & Accessibility

### Performance
- ✅ GPU-composited animations (`transform` + `opacity` only — no layout triggers)
- ✅ `backdrop-filter` disabled on mobile (expensive on Android GPUs)
- ✅ All hover effects gated behind `@media (hover: hover) and (pointer: fine)` — no sticky-hover on touch
- ✅ Framer Motion `useReducedMotion()` — animations skipped for users who prefer it
- ✅ rAF-throttled scroll listener (no forced layout on every frame)
- ✅ Explicit `width` / `height` + `aspect-ratio` on every `<img>` (zero CLS)
- ✅ `loading="lazy"` + `decoding="async"` on all below-fold images
- ✅ `will-change` released in mobile breakpoints to free GPU memory
- ✅ Vendor chunk splitting for long-term caching
- ✅ Stable asset filename hashing (`[name]-[hash].js`)

### Accessibility
- ✅ Semantic HTML — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`
- ✅ `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-controls` throughout
- ✅ `role="list"` / `role="listitem"` on dynamic lists
- ✅ Visible `focus-visible` ring on all interactive elements
- ✅ Screen-reader-only headings via `.sr-only`
- ✅ `prefers-reduced-motion` CSS override kills all transitions globally
- ✅ 44×44px minimum touch targets on hamburger button

---

## 🧩 Component Reference

| Component | Props | Description |
|---|---|---|
| `SectionHeading` | `center`, `subtitle` | Reusable heading wrapper |
| `Highlight` | `color`, `underline` | Pill highlight span inside headings |
| `AvatarGroup` | `members`, `size`, `max` | Overlapping circular avatar row |
| `PurpleTeardrop` | `style`, `animate` | SVG teardrop decorative shape |
| `PinkWave` | `style` | SVG wavy stroke decoration |
| `CurvedLine` | `style`, `color` | SVG curved connector line |

---

## 📄 License

MIT © 2024 Rajdeep

---

<p align="center">Built with ❤️ using React + Vite</p>
