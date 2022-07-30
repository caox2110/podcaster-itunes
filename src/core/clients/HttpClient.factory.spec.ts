import { constants } from '../constants';

import { FetchHttpClient } from './fetch';
import HttpClientFactory from './HttpClient.factory';

const {
  url: {
    preApi,
    endpoints: { rssPodcastUrl, lookupUrl },
  },
} = constants;

let httpClient: FetchHttpClient;

beforeEach(() => {
  httpClient = HttpClientFactory.makeFetchHttpClient();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Http Client Factory', () => {
  describe('Dependencies', () => {
    it('Should return a valid FetchHttpClient instance', () => {
      expect(httpClient).toBeInstanceOf(FetchHttpClient);
    });

    it('Should return a valid Podcast Rss api url', () => {
      const podcastRssApiUrl = `${preApi}${rssPodcastUrl}`;
      expect(HttpClientFactory.makePodcastRssApiUrl()).toBe(podcastRssApiUrl);
    });

    it('Should return a valid lookup api url', () => {
      const lookupApiUrl = `${preApi}${lookupUrl}/`;
      expect(HttpClientFactory.makeLookupApiUrl('')).toBe(lookupApiUrl);
    });
  });
});
