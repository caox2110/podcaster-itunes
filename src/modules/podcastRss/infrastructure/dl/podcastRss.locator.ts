import { PodcastRssRepositoryFactory } from '..';
import { GetAllFilteredPodcastRssUseCase } from '../../application';

type PodcastRssServiceLocator = {
  getAllFilteredPodCastRss: GetAllFilteredPodcastRssUseCase;
};

function providePodcastRssLocator(): PodcastRssServiceLocator {
  const podcastRssRepository = PodcastRssRepositoryFactory.makePodcastRssServiceWithFetchClient();
  const getAllFilteredPodCastRssUseCase = new GetAllFilteredPodcastRssUseCase(podcastRssRepository);
  return { getAllFilteredPodCastRss: getAllFilteredPodCastRssUseCase };
}

export type { PodcastRssServiceLocator };
export { providePodcastRssLocator };
