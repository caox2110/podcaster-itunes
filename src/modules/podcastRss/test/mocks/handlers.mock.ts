import { constants } from '@/core/constants';
import { addRequestHandlers } from '@/core/test';

import { mockPodcastRssListFromApi, mockPodcastRssList } from './podcastRss.mock';

const {
  url: {
    preApi,
    endpoints: { rssPodcastUrl },
  },
} = constants;

function mockPodcastRssCollectionResponse(httpStatusCode = 200, response = null) {
  addRequestHandlers([
    {
      method: 'get',
      endpoint: `${preApi}${rssPodcastUrl}`,
      httpStatusCode: httpStatusCode,
      response: response ?? mockPodcastRssListFromApi(5),
    },
  ]);
}

function mockPodcastRssMapper() {
  return mockPodcastRssList();
}

export { mockPodcastRssCollectionResponse, mockPodcastRssMapper };
