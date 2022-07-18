import { ReactNode } from 'react';
import type { UseQueryResult } from 'react-query';

import { PodcastRss } from '../../domain';

type PodcastRssQuery = UseQueryResult<PodcastRss[], Error>;

interface InitialStateType {
  searchTerm: string;
  podcastsRssQuery: PodcastRssQuery;
  handleChangeFilterPodcastRss: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

interface PodcastRssProviderProperties {
  children: ReactNode;
  state?: InitialStateType;
}

export type { PodcastRssQuery, InitialStateType, PodcastRssProviderProperties };
