import { useQuery } from 'react-query';

import { providePodcastRssLocator } from '..';
import { PodcastRss } from '../../domain';

export default function useGetAllPodcastRss(searchTem = '') {
  return useQuery<PodcastRss[], Error>(
    ['PodCastRssList'],
    () => {
      const { getAllFilteredPodCastRss } = providePodcastRssLocator();
      return getAllFilteredPodCastRss.execute();
    },
    {
      select: (podcastRssList) =>
        podcastRssList?.filter((podcastRss: PodcastRss) =>
          searchTem.length > 0
            ? podcastRss.title.toLowerCase().includes(searchTem.toLowerCase()) ||
              podcastRss.author.toLowerCase().includes(searchTem.toLowerCase())
            : true,
        ) ?? [],
    },
  );
}
