import type { TimelineEntry } from '@/types';

/**
 * Verified Timeline Data.
 * 
 * Only entries explicitly approved in Phase 12E are included here.
 * Do not fabricate additional timeline entries.
 */
export const timelineEntries: TimelineEntry[] = [
  {
    id: 'gradient-begins',
    date: '2020',
    title: 'Gradient begins',
    description: 'Gradient is established at the college as a technical club serving the CSE-allied branches.'
  },
  {
    id: 'specathon',
    date: '2020 onward',
    title: 'SPECATHON',
    description: 'SPECATHON becomes Gradient\'s recurring college hackathon, continuing every year since the club\'s establishment.'
  }
];
