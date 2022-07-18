import { useMemo, useState } from 'react';

import { PageDataContainer } from '@/ui';

import { PodcastRssProvider, useGetAllPodcastRss } from '../infrastructure';

import { ListPodcast, SearchPodcastRss } from './components';

function PodcastRss() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const podcastsRssQuery = useGetAllPodcastRss(searchTerm);

  const state = useMemo(
    () => ({
      searchTerm,
      podcastsRssQuery,
      handleChangeFilterPodcastRss: (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
      },
    }),
    [podcastsRssQuery, searchTerm],
  );

  return (
    <PageDataContainer isError={podcastsRssQuery.isError} isLoading={podcastsRssQuery.isLoading}>
      <PodcastRssProvider state={state}>
        <SearchPodcastRss />
        <ListPodcast />
      </PodcastRssProvider>
    </PageDataContainer>
  );
}

export default PodcastRss;
