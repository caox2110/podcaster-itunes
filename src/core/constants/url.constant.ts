export const urlConstant = {
  preApi: import.meta.env.VITE_PRE_API || 'https://itunes.apple.com/',
  allowOriginApi: import.meta.env.VITE_ALLOW_ORIGIN_API || 'https://api.allorigins.win/get?url=',
  endpoints: {
    rssPodcastUrl:
      import.meta.env.VITE_RSS_TOP_PODCAST || 'us/rss/toppodcasts/limit=100/genre=1310/json',
    lookupUrl: import.meta.env.VITE_LOOKUP || 'lookup',
  },
};
