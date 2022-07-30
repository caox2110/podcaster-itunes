import { PodcastRssBoundary, PodcastRss } from '../../domain';

export class GetFilteredPodcastRssUseCase {
  private readonly podcastRssRepository: PodcastRssBoundary;

  constructor(podcastRssRepository: PodcastRssBoundary) {
    this.podcastRssRepository = podcastRssRepository;
  }

  execute(searchTerm: string, podcastRssList: PodcastRss[]): PodcastRss[] {
    return this.podcastRssRepository.getFiltered(searchTerm, podcastRssList);
  }
}
