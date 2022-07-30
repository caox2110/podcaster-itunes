import { useQuery } from 'react-query';

import { providePodcastRssLocator } from '..';
import { PodcastRss } from '../../domain';

export default function useGetAllPodcastRss(searchTem = '') {
  return useQuery<PodcastRss[], Error>(
    ['PodCastRssList'],
    (): Promise<PodcastRss[]> => {
      const { getAllPodcastRss } = providePodcastRssLocator();
      return getAllPodcastRss.execute();
    },
    {
      select: (podcastRssList): PodcastRss[] => {
        const { getFilteredPodcastRss } = providePodcastRssLocator();
        return getFilteredPodcastRss.execute(searchTem, podcastRssList);
      },
    },
  );
}
