import { HttpClientFactory } from '@/core/clients';

import { PodcastRssMapper } from '..';

import { PodcastRssRepository } from './PodcastRss.repository';

const PodcastRssRepositoryFactory = {
  makePodcastRssServiceWithFetchClient: (): PodcastRssRepository =>
    new PodcastRssRepository(
      HttpClientFactory.makePodcastRssApiUrl(),
      HttpClientFactory.makeFetchHttpClient(),
      new PodcastRssMapper(),
    ),
};
export { PodcastRssRepositoryFactory };
