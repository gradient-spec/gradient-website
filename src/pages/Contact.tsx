/**
 * Contact page — Closing and relationship.
 *
 * Implements the structural architecture for the Gradient Contact page.
 * Content is dynamically rendered from verified data sources.
 */

import { EditorialClosingSection } from '@/sections/contact/EditorialClosingSection';
import { ConnectSection } from '@/sections/contact/ConnectSection';
import { CollaborateSection } from '@/sections/contact/CollaborateSection';
import { ContactFormSection } from '@/sections/contact/ContactFormSection';
import { ClosingSection } from '@/sections/contact/ClosingSection';

const ContactPage = () => {
  return (
    <main id="main-content">
      <EditorialClosingSection />
      <ConnectSection />
      <CollaborateSection />
      <ContactFormSection />
      <ClosingSection />
    </main>
  );
};

export default ContactPage;
