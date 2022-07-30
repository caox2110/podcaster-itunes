import { faker } from '@faker-js/faker';

import { HttpResponse, HttpStatusCode } from '@/core/clients';
import { FetchHttpClient } from '@/core/clients/fetch';

import { PodcastRssMapper } from '../mapper';
import { PodcastRss, errorMessages } from '../../domain';
import { mockPodcastRssListFromApi, mockPodcastRss } from '../../test';
import { RssEntity } from '../dto';

import { PodcastRssRepository } from './PodcastRss.repository';

jest.mock('@/core/clients/fetch');
jest.mock('../mapper');

type SutTypes = {
  sut: PodcastRssRepository;
  httpClient: FetchHttpClient<RssEntity>;
};

let makeSut: () => SutTypes;

beforeEach(() => {
  (FetchHttpClient as jest.Mock).mockImplementation(() => {
    return {
      get: (): HttpResponse<RssEntity> => ({
        status: HttpStatusCode.ok,
        body: mockPodcastRssListFromApi() as unknown as RssEntity,
      }),
    };
  });

  (PodcastRssMapper as jest.Mock).mockImplementation(() => {
    return {
      mapEntity: (): PodcastRss => mockPodcastRss(),
    };
  });

  makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpClient = new FetchHttpClient<RssEntity>();
    const mapper = new PodcastRssMapper();
    const sut = new PodcastRssRepository(url, httpClient, mapper);
    return {
      sut,
      httpClient,
    };
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('PodcastRss Repository', () => {
  describe('Dependencies', () => {
    it('Should return a valid PodcastRssRepository instance', () => {
      const { sut } = makeSut();

      expect(sut).toBeInstanceOf(PodcastRssRepository);
      expect(PodcastRssMapper).toHaveBeenCalledTimes(1);
      expect(FetchHttpClient).toHaveBeenCalledTimes(1);
    });
  });

  describe('Methods', () => {
    it('Should called getAll', async () => {
      const { sut } = makeSut();
      sut.getAll = jest.fn();

      await sut.getAll();

      expect(sut.getAll).toHaveBeenCalledTimes(1);
    });

    it('Should called getFiltered', async () => {
      const { sut } = makeSut();
      sut.getFiltered = jest.fn();

      sut.getFiltered('', []);

      expect(sut.getFiltered).toHaveBeenCalledTimes(1);
    });
  });

  describe('geAll', () => {
    it('Should return a valid PodcastRss list', async () => {
      const { sut } = makeSut();

      const items = await sut.getAll();

      expect(items).toBeInstanceOf(Array<PodcastRss>);
      expect(items).toHaveLength(100);
      expect(items).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            image: expect.any(String),
            author: expect.any(String),
            summary: expect.any(String),
          }),
        ]),
      );
      expect(items).toBeInstanceOf(Array<PodcastRss>);
    });

    it('Should return an empty PodcastRss array', async () => {
      (FetchHttpClient as jest.Mock).mockImplementationOnce(() => {
        return {
          get: (): HttpResponse<RssEntity> => ({
            status: HttpStatusCode.noContent,
            body: mockPodcastRssListFromApi(0) as unknown as RssEntity,
          }),
        };
      });

      const { sut } = makeSut();

      const items = await sut.getAll();

      expect(items).toHaveLength(0);
      expect(items).toStrictEqual([]);
    });

    it(`Should throw: ${errorMessages()[403]}`, async () => {
      (FetchHttpClient as jest.Mock).mockImplementationOnce(() => {
        return {
          get: (): HttpResponse<RssEntity> => ({
            status: HttpStatusCode.ok,
            body: null,
          }),
        };
      });
      const { sut } = makeSut();

      await expect(sut.getAll()).rejects.toThrowError(new Error(errorMessages()[403]));
    });

    it(`Should throw with body value: ${errorMessages()[403]}`, async () => {
      (FetchHttpClient as jest.Mock).mockImplementationOnce(() => {
        return {
          get: (): HttpResponse<RssEntity> => ({
            status: HttpStatusCode.badRequest,
            body: new Error('Not Found!'),
          }),
        };
      });
      const { sut } = makeSut();

      await expect(sut.getAll()).rejects.toThrowError(new Error(errorMessages()[403]));
    });

    it(`Should throw: ${errorMessages()[500]}`, async () => {
      (FetchHttpClient as jest.Mock).mockImplementationOnce(() => {
        return {
          get: (): HttpResponse<RssEntity> => ({
            status: HttpStatusCode.serverError,
            body: new Error('Internal Server Error'),
          }),
        };
      });
      const { sut } = makeSut();

      await expect(sut.getAll()).rejects.toThrowError(new Error(errorMessages()[500]));
    });
  });

  describe('getFiltered', () => {
    it('Should return a valid podcast rss filtered list', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered('Angie', [
        mockPodcastRss('Angie Martinez IRL - Angie Martinez', 'Angie Martinez'),
      ]);

      expect(itemsFiltered).toHaveLength(1);
      expect(itemsFiltered).toStrictEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title:
              expect.any(String) && expect.stringMatching('Angie Martinez IRL - Angie Martinez'),
            image: expect.any(String),
            author: expect.any(String) && expect.stringMatching('Angie Martinez'),
            summary: expect.any(String),
          }),
        ]),
      );
    });

    it('Should return a empty array with empty argument list', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered('Angie', []);

      expect(itemsFiltered).toHaveLength(0);
      expect(itemsFiltered).toStrictEqual([]);
    });

    it('Should return a empty array with null argument list', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered('Angie', null);

      expect(itemsFiltered).toHaveLength(0);
      expect(itemsFiltered).toStrictEqual([]);
    });

    it('Should return a empty array with undefined argument list', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered('Angie', undefined);

      expect(itemsFiltered).toHaveLength(0);
      expect(itemsFiltered).toStrictEqual([]);
    });

    it('Should return a empty array with string argument list', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered('Angie', '');

      expect(itemsFiltered).toHaveLength(0);
      expect(itemsFiltered).toStrictEqual([]);
    });

    it('Should return a podcast rss list with null searchTerm', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered(null, [
        mockPodcastRss('Angie Martinez IRL - Angie Martinez', 'Angie Martinez'),
      ]);

      expect(itemsFiltered).toHaveLength(1);
    });

    it('Should return a podcast rss list with empty searchTerm', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered('', [
        mockPodcastRss('Angie Martinez IRL - Angie Martinez', 'Angie Martinez'),
      ]);

      expect(itemsFiltered).toHaveLength(1);
    });

    it('Should return a podcast rss list with undefined searchTerm', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered(undefined, [
        mockPodcastRss('Angie Martinez IRL - Angie Martinez', 'Angie Martinez'),
      ]);

      expect(itemsFiltered).toHaveLength(1);
    });

    it('Should return a empty list with number searchTerm and bad podcast rss list', () => {
      const { sut } = makeSut();

      const itemsFiltered = sut.getFiltered(3, null);

      expect(itemsFiltered).toHaveLength(0);
    });

    it('Should return a podcast rss list with a valid searchTerm', () => {
      const { sut } = makeSut();

      const podcastRss = {
        id: Number(faker.random.numeric(10)),
        title: 'Angie Martinez IRL - Angie Martinez',
        author: 'Angie Martinez',
        image: faker.image.abstract(170, 170),
        summary: faker.lorem.paragraph(5),
      } as PodcastRss;

      const itemsFiltered = sut.getFiltered('Angie', [podcastRss]);

      expect(itemsFiltered[0]).toStrictEqual(podcastRss);
    });
  });
});
