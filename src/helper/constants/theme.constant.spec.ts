import { themeConstant } from './theme.constant';

const constants = {
  MODE: {
    LIGHT: 'light',
    DARK: 'dark',
  },
  FONT_PRIMARY: "'DM Sans', sans-serif",
};
describe('Theme constant vars', () => {
  it('Should be a defined constant vars for the theme', () => {
    expect(themeConstant).toStrictEqual(constants);
    expect(themeConstant).toMatchSnapshot({
      MODE: {
        LIGHT: expect.stringMatching(/light/),
        DARK: expect.stringMatching(/dark/),
      },
      FONT_PRIMARY: expect.any(String),
    });
  });
});
