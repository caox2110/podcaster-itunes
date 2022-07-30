import { CardPodcastRss, MuiGrid } from '@/ui';

import { usePodcastRss } from '../../../infrastructure';
import { PodcastRss } from '../../../domain';

export default function ListPodcastRss(): JSX.Element {
  const { podcastsRssQuery } = usePodcastRss();

  const { data } = podcastsRssQuery;
  return (
    <MuiGrid container spacing={4}>
      {data?.map((podcast: PodcastRss) => (
        <MuiGrid item key={podcast.id} md={3} sm={6} xs={12}>
          <CardPodcastRss
            actionRoute={`/podcast/${podcast.id}`}
            author={podcast.author}
            image={podcast.image}
            title={podcast.title}
          />
        </MuiGrid>
      ))}
    </MuiGrid>
  );
}
