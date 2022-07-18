import { useMemo, useState } from 'react';

import useGetAllPodcastRss from './useGetAllPodcastRss.hook';

export default function usePodcastRss() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const podcastsRssQuery = useGetAllPodcastRss(searchTerm);

  const initialState = useMemo(
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

  return { initialState };
}
