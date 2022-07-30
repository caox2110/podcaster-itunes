import { errorMessages, successMessages } from './podcastRss.message';

describe('PodcastRss Message', () => {
  describe('errorMessages', () => {
    it('Should return a valid error message by default', () => {
      expect(errorMessages().default).toBe(
        'Error fetching podcast-rss.Error Message: State no manage.',
      );
    });

    it('Should return a valid error message for 403', () => {
      expect(errorMessages()[403]).toBe(
        'Error fetching podcast-rss. Error Message: No data getted.',
      );
    });

    it('Should return a valid error message for 500', () => {
      expect(errorMessages()[500]).toBe(
        'Error fetching podcast-rss. Error Message: Internal Server Error.',
      );
    });

    it('Should return a valid error message for getAll method', () => {
      expect(errorMessages({}).getAll).toBe('Error fetching podcast-rss. Error Message: {}.');
    });

    it('Should return a valid error message for filter method', () => {
      expect(errorMessages({}).filter).toBe('Error filtering podcast-rss. Error Message: {}.');
    });
  });

  describe('successMessages', () => {
    it('Should return a valid error message by default', () => {
      expect(successMessages()).toStrictEqual({});
    });
  });
});
