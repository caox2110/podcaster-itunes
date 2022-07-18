import { PodcastRss } from '../../domain';
import { Entry } from '..';

export class PodcastRssMapper {
  mapEntity(entry: Entry): PodcastRss {
    return {
      id: Number.parseInt(entry.id.attributes['im:id'], 10),
      title: entry.title.label,
      author: entry['im:artist'].label,
      image: entry['im:image'][2].label,
      summary: entry.summary.label,
    };
  }
}
