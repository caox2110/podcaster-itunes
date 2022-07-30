/* eslint-disable max-len */
import { constants } from '@/core/constants';

import { Entry } from '..';

import { PodcastRssMapper } from './PodcastRss.mapper';

const {
  app: { DEFAULT_IMAGE },
} = constants;

let mapper: PodcastRssMapper;
let entry: Entry;

beforeEach(() => {
  mapper = new PodcastRssMapper();
  entry = {
    'im:name': {
      label: 'Angie Martinez IRL',
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: '0',
        currency: 'USD',
      },
    },
    'im:image': [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    summary: {
      label:
        'Created and hosted by renowned media personality Angie Martinez, “IRL” sees Angie and notable guests sitting down to candidly explore the magic of life, it’s fragility, purpose and complexities.  Angie’s conversations will explore legacy, philosophies, and the extraordinary ways we choose to live our real lives. ',
    },
    'im:artist': {
      label: 'Angie Martinez',
    },
    title: {
      label: 'Angie Martinez IRL - Angie Martinez',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://podcasts.apple.com/us/podcast/angie-martinez-irl/id1633466636?uo=2',
      },
    },
    id: {
      label: 'https://podcasts.apple.com/us/podcast/angie-martinez-irl/id1633466636?uo=2',
      attributes: {
        'im:id': '1633466636',
      },
    },
    'im:contentType': {
      attributes: {
        term: 'Podcast',
        label: 'Podcast',
      },
    },
    category: {
      attributes: {
        'im:id': '1310',
        term: 'Music',
        scheme: 'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music',
      },
    },
    'im:releaseDate': {
      label: '2022-07-13T02:00:00-07:00',
      attributes: {
        label: 'July 13, 2022',
      },
    },
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Podcast Mapper', () => {
  it('Should return a valid podcast with valid Entry data', () => {
    const podcastMapped = mapper.mapEntity(entry);
    expect(podcastMapped).toEqual({
      id: 1633466636,
      title: 'Angie Martinez IRL - Angie Martinez',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/170x170bb.png',
      summary:
        'Created and hosted by renowned media personality Angie Martinez, “IRL” sees Angie and notable guests sitting down to candidly explore the magic of life, it’s fragility, purpose and complexities.  Angie’s conversations will explore legacy, philosophies, and the extraordinary ways we choose to live our real lives. ',
      author: 'Angie Martinez',
    });
  });

  it('Should return a valid podcast instance with valid Entry data', () => {
    const podcastMapped = mapper.mapEntity(entry);
    expect(typeof podcastMapped.id).toEqual('number');
    expect(typeof podcastMapped.title).toEqual('string');
    expect(typeof podcastMapped.image).toEqual('string');
    expect(typeof podcastMapped.author).toEqual('string');
    expect(typeof podcastMapped.summary).toEqual('string');
  });

  it('Should return a default image if "im:image" is empty in Entry data', () => {
    entry['im:image'] = [];
    const podcastMapped = mapper.mapEntity(entry);
    expect(podcastMapped.image).toBe(DEFAULT_IMAGE);
  });

  it('Should return a default image if "im:image" item do not have a label attribute in Entry data', () => {
    entry['im:image'] = [
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        attributes: {
          height: '170',
        },
      },
    ];
    const podcastMapped = mapper.mapEntity(entry);
    expect(podcastMapped.image).toBe(DEFAULT_IMAGE);
  });

  it('Should thrown an error with null as Entry data', () => {
    expect(() => mapper.mapEntity(null)).toThrowError(
      new Error('Error mapper entry in to PodcastRss type. Entry Data: null. Error Message: {}.'),
    );
  });

  it('Should thrown an error with undefined as Entry data', () => {
    expect(() => mapper.mapEntity(undefined)).toThrowError(
      new Error(
        'Error mapper entry in to PodcastRss type. Entry Data: undefined. Error Message: {}.',
      ),
    );
  });

  it('Should thrown an error with empty string as Entry data', () => {
    expect(() => mapper.mapEntity('')).toThrowError(
      new Error('Error mapper entry in to PodcastRss type. Entry Data: "". Error Message: {}.'),
    );
  });

  it('Should thrown an error with empty object as Entry data', () => {
    expect(() => mapper.mapEntity({} as Entry)).toThrowError(
      new Error('Error mapper entry in to PodcastRss type. Entry Data: {}. Error Message: {}.'),
    );
  });

  it('Should thrown an error with undefined id in Entry data', () => {
    entry.id = {};
    expect(() => mapper.mapEntity(entry)).toThrowError(
      new Error(
        `Error mapper entry in to PodcastRss type. Entry Data: ${JSON.stringify(
          entry,
        )}. Error Message: {}.`,
      ),
    );
  });
  it('Should thrown an error with null id in Entry data', () => {
    entry.id = null;
    expect(() => mapper.mapEntity(entry)).toThrowError(
      new Error(
        `Error mapper entry in to PodcastRss type. Entry Data: ${JSON.stringify(
          entry,
        )}. Error Message: {}.`,
      ),
    );
  });
  it('Should thrown an error with empty object id in Entry data', () => {
    entry.id = {};
    expect(() => mapper.mapEntity(entry)).toThrowError(
      new Error(
        `Error mapper entry in to PodcastRss type. Entry Data: ${JSON.stringify(
          entry,
        )}. Error Message: {}.`,
      ),
    );
  });
  it('Should thrown an error with a not valid id in Entry data', () => {
    entry.id = {
      label: 'https://podcasts.apple.com/us/podcast/angie-martinez-irl/id1633466636?uo=2',
      attributes: {
        'im:id': undefined,
      },
    };
    // console.log(Number.parseInt(String(entry.id.attributes?.['im:id']), 10));
    expect(() => mapper.mapEntity(entry)).toThrowError(
      new Error(
        `Error mapper entry in to PodcastRss type. Entry Data: ${JSON.stringify(
          entry,
        )}. Error Message: {}.`,
      ),
    );
  });
});

describe('.mapEntity function', () => {
  it('defines a mapEntity function', () => {
    expect(typeof mapper.mapEntity).toBe('function');
  });

  it('mapEntity entity when called', () => {
    const mapEntitySpy = jest.spyOn(mapper, 'mapEntity');
    const podcastMapped = mapper.mapEntity(entry);
    expect(mapEntitySpy).toBeCalled();
    expect(mapEntitySpy).toHaveBeenCalledWith(entry);
    expect(mapEntitySpy).toHaveReturnedWith(podcastMapped);
  });
});
