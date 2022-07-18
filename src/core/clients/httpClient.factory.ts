import { constants } from '../constants';

import { FetchHttpClient } from './fetch';

const {
  url: {
    preApi,
    endpoints: { rssPodcastUrl, lookupUrl },
  },
} = constants;

const HttpClientFactory = {
  makePodcastRssApiUrl: (): string => `${preApi}${rssPodcastUrl}`,
  makeLookupApiUrl: (path: string): string => `${preApi}${lookupUrl}/${path}`,
  makeFetchHttpClient: (): FetchHttpClient => new FetchHttpClient(),
};
export default HttpClientFactory;
