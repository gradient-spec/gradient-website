/**
 * Board member and team data types for the Gradient website.
 *
 * Board profiles default to name + role + social links,
 * with an expanded state for additional detail.
 */

export interface BoardMember {
  /** Unique identifier */
  id: string;
  /** Member's full name */
  name: string;
  /** Role or position title */
  role: string;
  /** Team or department the member belongs to */
  team?: string;
  /** Path or URL to member's photo */
  image?: string;
  /** Alt text for the member's photo */
  imageAlt?: string;
  /** Social/contact links */
  socials?: SocialLink[];
  /** Optional short bio (for expanded state) */
  bio?: string;
}

export interface SocialLink {
  /** Platform name (e.g., 'github', 'linkedin', 'twitter', 'email') */
  platform: string;
  /** URL to the social profile */
  url: string;
  /** Display label (optional) */
  label?: string;
}

export interface BoardYear {
  /** Academic year or term identifier (e.g., '2024-2025') */
  year: string;
  /** Whether this is the current active board */
  isCurrent: boolean;
  /** Board members for this year */
  members: BoardMember[];
}
