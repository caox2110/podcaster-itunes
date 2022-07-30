import { INITIAL_DATA } from './PodcastRss.state';

const INITIAL_DATA_MOCKED = {
  searchTerm: '',
  podcastsRssQuery: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleChangeFilterPodcastRss: (event: React.ChangeEvent<HTMLInputElement>) => {},
};

describe('PodcastRss State', () => {
  it('Should return a valid initial data for PodcastRss Context', () => {
    expect(JSON.stringify(INITIAL_DATA)).toStrictEqual(JSON.stringify(INITIAL_DATA_MOCKED));
    expect(INITIAL_DATA).toStrictEqual(
      expect.objectContaining({
        searchTerm: expect.any(String),
        podcastsRssQuery: expect.any(Object),
        handleChangeFilterPodcastRss: expect.any(Function),
      }),
    );
    expect(INITIAL_DATA).toMatchObject({
      searchTerm: expect.any(String),
      podcastsRssQuery: expect.any(Object),
      handleChangeFilterPodcastRss: expect.any(Function),
    });
  });
  it('Should handle change event to filter podcastRss', () => {
    const handleChangeFilterPodcastRssSpy = jest.spyOn(
      INITIAL_DATA,
      'handleChangeFilterPodcastRss',
    );
    INITIAL_DATA.handleChangeFilterPodcastRss(null);
    expect(handleChangeFilterPodcastRssSpy).toBeCalledWith(null);
  });
});
