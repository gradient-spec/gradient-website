import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  // Initialize Lenis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
