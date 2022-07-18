import { HttpClient, HttpStatusCode } from '@/core/clients';

import { PodcastRssMapper, RssEntity, Entry } from '..';
import { PodcastRssBoundary, PodcastRss } from '../../domain';

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
    let apiResponse;
    try {
      apiResponse = await this.httpClient.get(this.url);
      if (!apiResponse.body)
        throw new Error('Error fetching podcast-rss. Message: No data getted.');
      switch (apiResponse.status) {
        case HttpStatusCode.ok:
          return apiResponse.body.feed.entry.map((entry: Entry) => this.mapper.mapEntity(entry));
        case HttpStatusCode.noContent:
          return [];
        default:
          throw new Error('Error fetching podcast-rss. Message: State no manage.');
      }
    } catch (error: unknown) {
      throw new Error(`Error fetching podcast-rss. Message: ${JSON.stringify(error)}`);
    }
  }
}
