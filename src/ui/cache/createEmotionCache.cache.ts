import createCache from '@emotion/cache';
import type { EmotionCache } from '@emotion/cache';

/**
 * createEmotionCache: allows for low level customization of how styles get inserted by emotion.
 *
 * @export
 * @returns {EmotionCache}
 */
export default function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css', prepend: true });
}
