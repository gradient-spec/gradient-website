/**
 * Gradient website route configuration.
 *
 * Six approved top-level routes:
 * /          — Home
 * /about     — About
 * /events    — Events
 * /projects  — Projects
 * /boards    — Boards
 * /contact   — Contact
 *
 * Uses lazy loading for code splitting.
 * A catch-all * route provides a branded 404 page.
 */

import { lazy } from 'react';
import {
  createBrowserRouter,
  type RouteObject,
} from 'react-router-dom';
import { RootLayout } from '@/layouts';

/* Lazy-loaded pages for code splitting */
const HomePage = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/About'));
const EventsPage = lazy(() => import('@/pages/Events'));
const ProjectsPage = lazy(() => import('@/pages/Projects'));
const BoardsPage = lazy(() => import('@/pages/Boards'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'boards', element: <BoardsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
