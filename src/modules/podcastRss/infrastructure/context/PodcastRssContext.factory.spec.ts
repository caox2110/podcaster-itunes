import React from 'react';

import { PodcastRssContextFactory } from './PodcastRssContext.factory';
import { INITIAL_DATA } from './PodcastRss.state';

describe('PodcastRss Context Factory', () => {
  describe('Dependencies', () => {
    it('Should return a valid PodcastRssRepository instance', () => {
      const createContext = jest.spyOn(React, 'createContext');
      PodcastRssContextFactory.makePodcastRssContext();
      expect(createContext).toBeCalled();
      expect(createContext).toHaveBeenCalledWith(INITIAL_DATA);
    });
  });
});
