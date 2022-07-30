import { HttpClient, HttpStatusCode } from '@/core/clients';

import { PodcastRssMapper, RssEntity, Entry } from '..';
import { PodcastRssBoundary, PodcastRss, errorMessages } from '../../domain';

export class PodcastRssRepository implements PodcastRssBoundary {
  private readonly url: string;
  private readonly httpClient: HttpClient<RssEntity>;
  private readonly mapper: PodcastRssMapper;

  constructor(url: string, httpClient: HttpClient<RssEntity>, mapper: PodcastRssMapper) {
    this.url = url;
    this.httpClient = httpClient;
    this.mapper = mapper;
  }

  async getAll(): Promise<PodcastRss[]> {
    const response = await this.httpClient.get(this.url);

    if (!response.body) throw new Error(errorMessages()[403]);

    switch (response.status) {
      case HttpStatusCode.ok:
        return response.body.feed.entry.map((entry: Entry) => this.mapper.mapEntity(entry));
      case HttpStatusCode.noContent:
        return [];
      case HttpStatusCode.serverError:
        throw new Error(errorMessages()[500]);
      default:
        throw new Error(errorMessages()[403]);
    }
  }

  getFiltered(searchTerm: string, podcastRssList: PodcastRss[] = []): PodcastRss[] {
    if (typeof searchTerm !== 'string' || !searchTerm || searchTerm.length === 0)
      return podcastRssList ?? [];
    if (!Array.isArray(podcastRssList)) return [];
    return (
      podcastRssList?.filter(
        (podcastRss: PodcastRss) =>
          podcastRss.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          podcastRss.author.toLowerCase().includes(searchTerm.toLowerCase()),
      ) ?? []
    );
  }
}
