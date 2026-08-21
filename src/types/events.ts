/**
 * Event data types for the Gradient website.
 *
 * These types define the structure for event data.
 * Actual event content will be populated in later phases.
 */

export type EventStatus = 'upcoming' | 'ongoing' | 'past';

export interface EventData {
  /** Unique identifier */
  id: string;
  /** Event title */
  title: string;
  /** Short description of the event */
  description: string;
  /** Event date (ISO 8601) */
  date: string;
  /** Optional end date for multi-day events (ISO 8601) */
  endDate?: string;
  /** Event location or venue */
  location?: string;
  /** Current status */
  status: EventStatus;
  /** Path or URL to the event's primary image */
  image?: string;
  /** Alt text for the event image */
  imageAlt?: string;
  /** Optional gallery of additional images */
  gallery?: EventImage[];
  /** Optional external registration or details URL */
  externalUrl?: string;
}

export interface EventImage {
  /** Image source path or URL */
  src: string;
  /** Alt text */
  alt: string;
  /** Optional aspect ratio hint for layout */
  aspectRatio?: string;
}
