import { PodcastRssRepository } from './PodcastRss.repository';
import { PodcastRssRepositoryFactory } from './PodcastRssRepository.factory';

let repository: PodcastRssRepository;

beforeEach(() => {
  repository = PodcastRssRepositoryFactory.makePodcastRssServiceWithFetchClient();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('PodcastRss Repository Factory', () => {
  describe('Dependencies', () => {
    it('Should return a valid PodcastRssRepository instance', () => {
      expect(repository).toBeInstanceOf(PodcastRssRepository);
    });
  });
});
