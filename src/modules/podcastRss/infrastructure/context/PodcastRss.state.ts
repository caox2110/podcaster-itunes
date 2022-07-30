import { PodcastRssQuery } from './podcastRss.type';

export const INITIAL_DATA = {
  searchTerm: '',
  podcastsRssQuery: {} as PodcastRssQuery,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleChangeFilterPodcastRss: (event: React.ChangeEvent<HTMLInputElement>) => {},
};
