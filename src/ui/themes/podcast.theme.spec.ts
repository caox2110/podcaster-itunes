import type { Theme } from '@mui/material/styles';

import { constants } from '@/core/constants';

import { theme } from './podcast.theme';

const {
  theme: {
    MODE: { LIGHT },
  },
} = constants;

let themeOptions: Theme;

describe('Podcast theme tests', () => {
  beforeEach(() => (themeOptions = theme()));
  it('Should be have a defined theme for podcast app', () => {
    expect(themeOptions).toMatchObject<Theme>(themeOptions);
  });
  it('Should be light theme mode', () => {
    expect(themeOptions.palette.mode).toBe(LIGHT);
  });
});
