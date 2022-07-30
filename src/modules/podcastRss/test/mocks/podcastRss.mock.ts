/* eslint-disable no-loops/no-loops */
import { faker } from '@faker-js/faker';

import { RssEntity, Entry } from '../../infrastructure';
import { PodcastRss } from '../../domain';

const mockEntry = (
  titleParameter = '',
  authorParameter = '',
  releaseDateParameter = '',
  summaryParameter = '',
): Entry => {
  const songName = titleParameter || faker.music.songName();
  const fullName = authorParameter || `${faker.name.firstName()} ${faker.name.lastName()}`;
  const releaseDate = String(releaseDateParameter || faker.date.recent(30));
  const summary = summaryParameter || faker.lorem.paragraph(5);
  return {
    'im:name': {
      label: songName,
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: faker.finance.amount(),
        currency: faker.finance.currencyCode(),
      },
    },
    'im:image': [
      {
        label: faker.image.abstract(55, 55),
        attributes: {
          height: '55',
        },
      },
      {
        label: faker.image.abstract(60, 60),
        attributes: {
          height: '60',
        },
      },
      {
        label: faker.image.abstract(170, 170),
        attributes: {
          height: '170',
        },
      },
    ],
    summary: {
      label: summary,
    },
    'im:artist': {
      label: fullName,
    },
    title: {
      label: `${songName} - ${fullName}`,
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: faker.internet.url(),
      },
    },
    id: {
      label: faker.internet.url(),
      attributes: {
        'im:id': faker.random.numeric(10),
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
        'im:id': faker.random.numeric(4),
        term: 'Music',
        scheme: faker.internet.url(),
        label: 'Music',
      },
    },
    'im:releaseDate': {
      label: releaseDate, //'2022-07-13T02:00:00-07:00',
      attributes: {
        label: 'July 13, 2022',
      },
    },
  };
};

const mockPodcastRssListFromApi = (
  count = 100,
  titleParameter = '',
  authorParameter = '',
  releaseDateParameter = '',
  summaryParameter = '',
): RssEntity => {
  const entry = [];
  for (let index = 0; index < count; index++) {
    const item = mockEntry(titleParameter, authorParameter, releaseDateParameter, summaryParameter);
    entry.push(item);
  }
  return {
    feed: {
      autor: {
        name: {
          label: faker.company.companyName(),
        },
        uri: {
          label: faker.internet.url(),
        },
      },
      entry,
    },
  };
};

const mockPodcastRss = (
  titleParameter = '',
  authorParameter = '',
  summaryParameter = '',
): PodcastRss => {
  const title = titleParameter || faker.music.songName();
  const author = authorParameter || `${faker.name.firstName()} ${faker.name.lastName()}`;
  const summary = summaryParameter || faker.lorem.paragraph(5);
  return {
    id: Number(faker.random.numeric(10)),
    title,
    image: faker.image.abstract(170, 170),
    summary,
    author,
  } as PodcastRss;
};

const mockPodcastRssList = (
  count = 100,
  titleParameter = '',
  authorParameter = '',
  summaryParameter = '',
): PodcastRss[] => {
  const podcastRssList = [];
  for (let index = 0; index < count; index++) {
    const item = mockPodcastRss(titleParameter, authorParameter, summaryParameter);
    podcastRssList.push(item);
  }
  return podcastRssList;
};

export { mockPodcastRssListFromApi, mockEntry, mockPodcastRssList, mockPodcastRss };
