import { PodcastRssQuery } from './podcastRss.type';

export const INITIAL_DATA = {
  searchTerm: '',
  podcastsRssQuery: {} as PodcastRssQuery,
  handleChangeFilterPodcastRss: (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  },
};
