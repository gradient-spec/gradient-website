/**
 * Project data types for the Gradient website.
 *
 * Projects may have externally hosted pages.
 * The externalUrl field supports redirecting to those pages
 * rather than recreating them internally.
 */

export interface ProjectData {
  /** Unique identifier */
  id: string;
  /** Project title */
  title: string;
  /** Short description of what the project does */
  description: string;
  /** Technologies used in the project */
  technologies?: string[];
  /** Path or URL to the project's primary image */
  image?: string;
  /** Alt text for the project image */
  imageAlt?: string;
  /** Additional project imagery (screenshots, diagrams, etc.) */
  images?: ProjectImage[];
  /**
   * External URL for projects that already have hosted pages.
   * When present, the project links externally rather than
   * navigating to an internal detail page.
   */
  externalUrl?: string;
  /** Whether this project is featured on the home page */
  featured?: boolean;
}

export interface ProjectImage {
  /** Image source path or URL */
  src: string;
  /** Alt text */
  alt: string;
  /** Optional type hint: screenshot, diagram, photo, etc. */
  type?: 'screenshot' | 'diagram' | 'photo' | 'prototype' | 'other';
}
