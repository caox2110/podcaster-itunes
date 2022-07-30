import { appConstant } from './app.constant';
import { themeConstant } from './theme.constant';
import { urlConstant } from './url.constant';
import { queryClientConstant } from './queryClient.constant';

/**
 * Constants for the app
 *
 * @type {{ app: any; theme: any; url: any; }}
 */
const constants = {
  app: appConstant,
  theme: themeConstant,
  url: urlConstant,
  queryClient: queryClientConstant,
};

if (appConstant.IS_DEV) {
  console.warn('Constants are', constants);
  console.warn(`ENV is ${appConstant.MODE}`);
}

export { constants };
