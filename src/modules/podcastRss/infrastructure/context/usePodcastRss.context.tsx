import { useContext } from 'react';

import { PodcastRssContextFactory } from './PodcastRssContext.factory';
import { PodcastRssProviderProperties } from './podcastRss.type';
import { INITIAL_DATA } from './PodcastRss.state';

const PodcastRssContext = PodcastRssContextFactory.makePodcastRssContext();

function PodcastRssProvider({
  state = INITIAL_DATA,
  children,
  ...rest
}: PodcastRssProviderProperties) {
  return (
    <PodcastRssContext.Provider value={state} {...rest}>
      {children}
    </PodcastRssContext.Provider>
  );
}
function usePodcastRss() {
  const context = useContext(PodcastRssContext);
  if (context === undefined) {
    throw new Error(
      'Error context podcast-rss. Hook usePodcastRss must be used within a PodcastRssProvider',
    );
  }

  const searchInputProperties = {
    value: context.searchTerm,
    onChange: context.handleChangeFilterPodcastRss,
  };
  return { ...context, searchInputProperties };
}

export { PodcastRssProvider, usePodcastRss };
