/**
 * Defined constants for the app
 *
 * @type {{ APP_NAME: string; IS_DEV: boolean; IS_PROD: boolean; MODE: string; }}
 */
export const appConstant = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Podcaster',
  IS_DEV: (import.meta.env.DEV && import.meta.env.MODE === 'dev') || false,
  IS_PROD: import.meta.env.PROD || false,
  MODE: import.meta.env.MODE || '',
};
