import { PodcastRssRepositoryFactory } from '..';
import { GetAllPodcastRssUseCase, GetFilteredPodcastRssUseCase } from '../../application';

type PodcastRssServiceLocator = {
  getAllPodcastRss: GetAllPodcastRssUseCase;
  getFilteredPodcastRss: GetFilteredPodcastRssUseCase;
};

function providePodcastRssLocator(): PodcastRssServiceLocator {
  const podcastRssRepository = PodcastRssRepositoryFactory.makePodcastRssServiceWithFetchClient();
  const getAllPodCastRssUseCase = new GetAllPodcastRssUseCase(podcastRssRepository);
  const getFilteredPodcastRssUseCase = new GetFilteredPodcastRssUseCase(podcastRssRepository);
  return {
    getAllPodcastRss: getAllPodCastRssUseCase,
    getFilteredPodcastRss: getFilteredPodcastRssUseCase,
  };
}

export type { PodcastRssServiceLocator };
export { providePodcastRssLocator };
