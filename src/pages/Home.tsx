/**
 * Home page — Brand introduction.
 *
 * Page sections (Hero, Current Board, Featured Event, CTA)
 * will be composed here in later phases.
 */

import { HeroSection } from '@/sections/home/HeroSection';
import { WhatIsGradientSection } from '@/sections/home/WhatIsGradientSection';
import { FeaturedEventSection } from '@/sections/home/FeaturedEventSection';
import { HomeCTASection } from '@/sections/home/HomeCTASection';

const HomePage = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <WhatIsGradientSection />
      <FeaturedEventSection />
      <HomeCTASection />
    </main>
  );
};

export default HomePage;
