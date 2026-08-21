/**
 * Home page — Brand introduction.
 *
 * Page sections (Hero, Current Board, Featured Event, CTA)
 * will be composed here in later phases.
 */

import { HeroSection } from '@/sections/home/HeroSection';
import { WhatIsGradientSection } from '@/sections/home/WhatIsGradientSection';
import { CurrentBoardSection } from '@/sections/home/CurrentBoardSection';
import { FeaturedEventSection } from '@/sections/home/FeaturedEventSection';
import { HomeCTASection } from '@/sections/home/HomeCTASection';

const HomePage = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <WhatIsGradientSection />
      <CurrentBoardSection />
      <FeaturedEventSection />
      <HomeCTASection />
    </main>
  );
};

export default HomePage;
