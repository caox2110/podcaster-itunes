import { Context, createContext } from 'react';

import { InitialStateType } from './podcastRss.type';
import { INITIAL_DATA } from './PodcastRss.state';

const PodcastRssContextFactory = {
  makePodcastRssContext: (): Context<InitialStateType> =>
    createContext(INITIAL_DATA as InitialStateType),
};
export { PodcastRssContextFactory };
