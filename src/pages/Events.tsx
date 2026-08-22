/**
 * Events page — Activity and energy.
 *
 * Page sections (Events Hero, Upcoming, Ongoing, Past, Gallery)
 * will be composed here in later phases.
 */

import { EventsHeroSection } from '@/sections/events/EventsHeroSection';
import { ActiveEventsSection } from '@/sections/events/ActiveEventsSection';
import { PastEventsSection } from '@/sections/events/PastEventsSection';
import { EventGallerySection } from '@/sections/events/EventGallerySection';

const EventsPage = () => {
  return (
    <main id="main-content">
      <EventsHeroSection />
      <ActiveEventsSection />
      <PastEventsSection />
      <EventGallerySection />
    </main>
  );
};

export default EventsPage;
