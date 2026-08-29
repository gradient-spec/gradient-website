import type { BoardYear } from '@/types';

/**
 * Board data will be populated in later phases.
 * This empty array provides the correct typed structure.
 */
export const boards: BoardYear[] = [
  {
    isCurrent: true,
    members: [
      { id: 'mb-01', name: 'Anusha', role: 'President', team: 'Main Board' },
      { id: 'mb-02', name: 'Pranathi', role: 'Vice President', team: 'Main Board' },
      { id: 'mb-03', name: 'Suraj', role: 'Secretary', team: 'Main Board' },
      { id: 'mb-04', name: 'Rakesh', role: 'Joint Secretary', team: 'Main Board' },
      { id: 'mb-05', name: 'Rushitha', role: 'Treasurer', team: 'Main Board' },
      { id: 'mb-06', name: 'Siddartha', role: 'Junior Treasurer', team: 'Main Board' },
      { id: 'mb-07', name: 'Shubhang', role: 'Admin', team: 'Main Board' },
      { id: 'mb-08', name: 'Satwika', role: 'Co-Admin', team: 'Main Board' },
      { id: 'ct-01', name: 'Core Team Member 01', role: '[ PLACEHOLDER ]', team: 'Core Team' },
      { id: 'ct-02', name: 'Core Team Member 02', role: '[ PLACEHOLDER ]', team: 'Core Team' },
      { id: 'ct-03', name: 'Core Team Member 03', role: '[ PLACEHOLDER ]', team: 'Core Team' },
      { id: 'ct-04', name: 'Core Team Member 04', role: '[ PLACEHOLDER ]', team: 'Core Team' }
    ]
  }
];
