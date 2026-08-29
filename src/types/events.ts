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
  description?: string;
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
  /** Event duration */
  duration?: string;
  /** Event type */
  type?: string;
  /** Eligibility */
  eligibility?: string;
  /** Team size */
  teamSize?: string;
  /** Prize information */
  prize?: string;
  /** Organizing department */
  organizingDepartment?: string;
  /** Registration status */
  registrationStatus?: 'open' | 'closed';
  /** Domains */
  domains?: string[];
  /** Poster copy/subtitle */
  posterCopy?: string[];
}

export interface EventImage {
  /** Image source path or URL */
  src: string;
  /** Alt text */
  alt: string;
  /** Optional aspect ratio hint for layout */
  aspectRatio?: string;
}
