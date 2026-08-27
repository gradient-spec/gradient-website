import type { ProjectData } from '@/types';

/**
 * Project data will be populated in later phases.
 * This empty array provides the correct typed structure.
 */
export const projects: ProjectData[] = [
  {
    id: 'placeholder-project-01',
    title: 'Project 01',
    description: 'Project description placeholder.',
    featured: true
  },
  {
    id: 'placeholder-project-02',
    title: 'Project 02',
    description: 'Project description placeholder.',
    featured: false
  }
];
