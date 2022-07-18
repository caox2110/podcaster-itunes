import createCache from '@emotion/cache';
import type { EmotionCache, Options } from '@emotion/cache';

/**
 * createEmotionCache: allows for low level customization of how styles get inserted by emotion.
 *
 * @export
 * @returns {EmotionCache}
 */
const EmotionCacheFactory = {
  makeCache: ({ key, prepend = true }: Options): EmotionCache => createCache({ key, prepend }),
};
export { EmotionCacheFactory };
