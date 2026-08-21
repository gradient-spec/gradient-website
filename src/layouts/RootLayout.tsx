/**
 * Root layout component.
 *
 * Provides the shared application shell:
 * - Skip navigation link (accessibility)
 * - Navbar
 * - Page content via <Outlet> with cinematic transitions
 * - Footer
 *
 * Route-change focus management is handled here.
 */

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/global/Navbar';
import { Footer } from '@/components/global/Footer';

const RootLayout = () => {
  const { pathname } = useLocation();

  /**
   * Route-change focus management.
   * Spec: "Route changes move focus to the page heading."
   * Moves focus to #page-heading on route change for accessibility.
   */
  useEffect(() => {
    // Small timeout ensures the DOM has updated with the new page content
    const timeout = setTimeout(() => {
      const heading = document.getElementById('page-heading');
      if (heading) {
        heading.focus({ preventScroll: true });
      }
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div id="app-root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      {/* Page content with cinematic transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default RootLayout;
