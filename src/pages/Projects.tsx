/**
 * Projects page — Technical and editorial.
 *
 * Page sections (Projects Hero, Featured, Collection, Exploration)
 * will be composed here in later phases.
 */

import { ProjectsHeroSection } from '@/sections/projects/ProjectsHeroSection';
import { FeaturedProjectsSection } from '@/sections/projects/FeaturedProjectsSection';
import { ProjectCollectionSection } from '@/sections/projects/ProjectCollectionSection';
import { ProjectExplorationSection } from '@/sections/projects/ProjectExplorationSection';

const ProjectsPage = () => {
  return (
    <main id="main-content">
      <ProjectsHeroSection />
      <FeaturedProjectsSection />
      <ProjectCollectionSection />
      <ProjectExplorationSection />
    </main>
  );
};

export default ProjectsPage;
