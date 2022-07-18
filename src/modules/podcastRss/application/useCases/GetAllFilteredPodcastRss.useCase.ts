import { PodcastRssBoundary, PodcastRss } from '../../domain';

export class GetAllFilteredPodcastRssUseCase {
  private readonly podcastRssRepository: PodcastRssBoundary;

  constructor(podcastRssRepository: PodcastRssBoundary) {
    this.podcastRssRepository = podcastRssRepository;
  }

  async execute(): Promise<PodcastRss[]> {
    return await this.podcastRssRepository.getAll();
  }
}
