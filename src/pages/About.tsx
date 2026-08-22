/**
 * About page — Editorial story.
 *
 * Page sections (History, Mission, Vision, Timeline)
 * will be composed here in later phases.
 */

import { AboutHistorySection } from '@/sections/about/AboutHistorySection';
import { MissionVisionSection } from '@/sections/about/MissionVisionSection';
import { TimelineSection } from '@/sections/about/TimelineSection';

const AboutPage = () => {
  return (
    <main id="main-content">
      <AboutHistorySection />
      <MissionVisionSection />
      <TimelineSection />
    </main>
  );
};

export default AboutPage;
