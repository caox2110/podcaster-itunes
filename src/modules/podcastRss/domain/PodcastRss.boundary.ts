import { PodcastRss } from '.';

export interface PodcastRssBoundary {
  getAll(): Promise<PodcastRss[] | undefined>;
  getFiltered(searchTerm: string, items: PodcastRss[]): PodcastRss[];
}
