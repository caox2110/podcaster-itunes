import { constants } from '@/core/constants';

import { PodcastRss } from '../../domain';
import { Entry } from '..';

const {
  app: { DEFAULT_IMAGE },
} = constants;

export class PodcastRssMapper {
  mapEntity(entry: Entry): PodcastRss {
    try {
      const id = Number.parseInt(String(entry.id.attributes?.['im:id']), 10);
      if (Number.isNaN(id)) {
        throw new TypeError(
          `Error mapper entry in to PodcastRss type. Entry Data: ${JSON.stringify(
            entry,
          )}. Error Message: Attribute 'im:id' from the Entry object or id must be a valid number.`,
        );
      }

      const image: string[] = entry['im:image']
        .sort((imgA, imgB) => Number(imgB.attributes?.height) - Number(imgA.attributes?.height))
        .map((img) => img.label || DEFAULT_IMAGE);
      if (image.length === 0) image.push(DEFAULT_IMAGE);

      return {
        id,
        title: String(entry.title.label),
        author: String(entry['im:artist'].label),
        image: image[0],
        summary: String(entry.summary.label),
      };
    } catch (error: any) {
      throw new Error(
        `Error mapper entry in to PodcastRss type. Entry Data: ${JSON.stringify(
          entry,
        )}. Error Message: ${JSON.stringify(error)}.`,
      );
    }
  }
}
