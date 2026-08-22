/**
 * Boards page — Human and expressive.
 *
 * Implements the structural architecture for the Gradient Boards.
 * Content is dynamically rendered from verified data sources.
 */

import { BoardsHeroSection } from '@/sections/boards/BoardsHeroSection';
import { CurrentBoardSection } from '@/sections/boards/CurrentBoardSection';
import { PreviousBoardsSection } from '@/sections/boards/PreviousBoardsSection';
import { GradientTodaySection } from '@/sections/boards/GradientTodaySection';

const BoardsPage = () => {
  return (
    <main id="main-content">
      <BoardsHeroSection />
      <CurrentBoardSection />
      <PreviousBoardsSection />
      <GradientTodaySection />
    </main>
  );
};

export default BoardsPage;
