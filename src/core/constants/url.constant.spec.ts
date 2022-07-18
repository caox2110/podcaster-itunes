import { urlConstant } from './url.constant';

const constants = {
  preApi: 'https://itunes.apple.com/',
  allowOriginApi: 'https://api.allorigins.win/get?url=',
  endpoints: {
    rssPodcastUrl: 'us/rss/toppodcasts/limit=100/genre=1310/json',
    lookupUrl: 'lookup',
  },
};

describe('Url constant vars', () => {
  it('Should be a constant vars for make requests', () => {
    expect(urlConstant).toStrictEqual(constants);
  });
});
