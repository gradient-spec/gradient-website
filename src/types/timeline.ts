export interface TimelineEntry {
  /** Unique identifier for the timeline entry */
  id: string;
  /** The date, year, or timeframe of the entry */
  date: string;
  /** The main title or heading of the milestone */
  title: string;
  /** Detailed description of the milestone */
  description: string;
}
