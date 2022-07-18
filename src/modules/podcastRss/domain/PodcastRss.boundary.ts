import { PodcastRss } from '.';

export interface PodcastRssBoundary {
  getAll(): Promise<PodcastRss[]>;
}
