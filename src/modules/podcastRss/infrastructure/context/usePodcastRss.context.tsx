import { useContext } from 'react';

import { PodcastRssContextFactory } from './PodcastRssContext.factory';
import { PodcastRssProviderProperties } from './podcastRss.type';
import { INITIAL_DATA } from './podcastRssState.state';

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
    throw new Error('usePodcastRss must be used within a PodcastRssProvider');
  }

  const searchInputProperties = {
    value: context.searchTerm,
    onChange: context.handleChangeFilterPodcastRss,
  };
  return { ...context, searchInputProperties };
}

export { PodcastRssProvider, usePodcastRss };
