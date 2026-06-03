import Navbar          from '../components/Navbar/Navbar';
import Hero            from '../components/Hero/Hero';
import ProgressSection from '../components/ProgressSection/ProgressSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import Testimonials    from '../components/Testimonials/Testimonials';
import Newsletter      from '../components/Newsletter/Newsletter';
import Footer          from '../components/Footer/Footer';

/**
 * Home — assembles all sections into the single-page layout.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProgressSection />
        <ServicesSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
